# Spotify Playlist Generator

A modern, visually stunning web application that generates personalized Spotify playlists using AI-powered recommendations.

## Features

- 🎨 Modern UI with Spotify's signature dark theme
- 🎵 Real-time song previews
- 🎨 Beautiful animations and transitions
- 🎯 AI-powered song recommendations
- 🎨 Glassmorphism design elements
- 🎵 Album artwork display
- 🎨 Mood-based color theming

## Tech Stack

- Frontend:
  - Next.js 13
  - React
  - Tailwind CSS
  - Framer Motion
  - Spotify Web Playback SDK

- Backend:
  - FastAPI
  - Spotipy
  - Python

## Prerequisites

- Node.js 16+
- Python 3.8+
- Spotify Developer Account
- Spotify API Credentials

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spotify-playlist-generator.git
cd spotify-playlist-generator
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory:
```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
```

5. Start the development servers:

Frontend:
```bash
npm run dev
```

Backend:
```bash
cd backend
uvicorn main:app --reload
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Usage

1. Enter a song name or paste a Spotify track URL
2. Click "Generate Playlist"
3. Browse through the recommended songs
4. Preview songs by clicking on them
5. Save your playlist to Spotify

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
