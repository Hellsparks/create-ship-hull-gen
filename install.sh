#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "=== Ship Hull Generator Installer ==="
echo ""

# Check for Node.js
if command -v node &>/dev/null; then
  echo "Node.js $(node --version) found."
else
  echo "Node.js not found. Attempting to install..."

  if command -v apt-get &>/dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
  elif command -v dnf &>/dev/null; then
    curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
    sudo dnf install -y nodejs
  elif command -v pacman &>/dev/null; then
    sudo pacman -Sy --noconfirm nodejs npm
  elif command -v zypper &>/dev/null; then
    sudo zypper install -y nodejs npm
  else
    echo ""
    echo "Could not detect package manager. Please install Node.js manually:"
    echo "  https://nodejs.org/en/download/"
    exit 1
  fi

  if ! command -v node &>/dev/null; then
    echo "Node.js installation failed. Please install it manually:"
    echo "  https://nodejs.org/en/download/"
    exit 1
  fi
  echo "Node.js $(node --version) installed."
fi

echo ""
echo "Installing dependencies..."
npm install
echo ""
echo "Done! Run ./run.sh to start."
