#!/usr/bin/env bash
cd "$(dirname "$0")"
echo "Starting Ship Hull Generator..."
echo "Open http://localhost:5173 in your browser"
echo ""
open "http://localhost:5173" 2>/dev/null
npm run dev
