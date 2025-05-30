#!/bin/bash
# dev-server.sh

echo "🌟 Starting local development server..."
echo "📂 Serving files from current directory"
echo "🌐 Open http://localhost:8000 in your browser"
echo "⏹️  Press Ctrl+C to stop"
echo ""

# Start a simple HTTP server
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python to run the dev server."
    echo "💡 Alternatively, you can use any static file server."
fi