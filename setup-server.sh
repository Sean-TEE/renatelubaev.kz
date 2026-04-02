#!/bin/bash
# ================================================
# Скрипт настройки VPS для renatelubaev.kz
# Запускать на сервере под root
# ================================================

set -e

echo "=========================================="
echo "  Настройка VPS для renatelubaev.kz"
echo "=========================================="

# 1. Обновление системы
echo "[1/5] Обновление системы..."
apt update && apt upgrade -y

# 2. Установка Caddy
echo "[2/5] Установка Caddy..."
apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt install caddy -y

# 3. Создание директории сайта
echo "[3/5] Создание директории сайта..."
mkdir -p /var/www/renatelubaev.kz

# 4. Настройка Caddy
echo "[4/5] Настройка Caddy..."
cat > /etc/caddy/Caddyfile << 'EOF'
renatelubaev.kz {
    root * /var/www/renatelubaev.kz
    file_server
    encode gzip zstd

    header {
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy strict-origin-when-cross-origin
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    }

    @static path /_assets/* *.svg *.ico
    header @static Cache-Control "public, max-age=31536000, immutable"

    @html path *.html /
    header @html Cache-Control "public, max-age=3600, must-revalidate"

    handle_errors {
        rewrite * /404.html
        file_server
    }
}

www.renatelubaev.kz {
    redir https://renatelubaev.kz{uri} permanent
}
EOF

# 5. Firewall
echo "[5/5] Настройка firewall..."
ufw allow 22
ufw allow 80
ufw allow 443
ufw --force enable

# Перезапуск Caddy
systemctl restart caddy
systemctl enable caddy

echo "=========================================="
echo "  ✅ VPS настроен!"
echo "  Caddy запущен и готов к приёму файлов."
echo "  Директория сайта: /var/www/renatelubaev.kz"
echo "=========================================="
