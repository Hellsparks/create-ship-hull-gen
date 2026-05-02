#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "=== Ship Hull Generator Installer ==="
echo ""

# Check for Node.js
if command -v node &>/dev/null; then
  echo "Node.js $(node --version) found."
else
  echo "Node.js not found. Attempting to install..."

  if command -v brew &>/dev/null; then
    brew install node
  else
    echo "Homebrew not found. Installing Homebrew first..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    # Add brew to PATH for Apple Silicon
    if [ -f /opt/homebrew/bin/brew ]; then
      eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    brew install node
  fi

  if ! command -v node &>/dev/null; then
    echo ""
    echo "Node.js installation failed. Please install it manually:"
    echo "  https://nodejs.org/en/download/"
    read -p "Press Enter to close..."
    exit 1
  fi
  echo "Node.js $(node --version) installed."
fi

echo ""
echo "Installing dependencies..."
npm install
echo ""
echo "Done! Double-click run.command to start."
read -p "Press Enter to close..."
