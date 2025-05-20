# Enhanced Spotify Playlist Generator

A modern, full-stack application for creating personalized Spotify playlists with a beautiful user interface and powerful backend features.

## Features

- 🎵 Search and browse Spotify tracks
- 🎨 Modern, responsive UI with animations
- 🔍 Advanced track search and filtering
- 🎧 Preview tracks before adding to playlist
- 📱 Mobile-friendly design
- 🔒 Secure authentication with Spotify
- 🚀 Fast and efficient API endpoints
- 💾 Persistent storage with PostgreSQL

## Tech Stack

### Frontend
- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Axios

### Backend
- FastAPI
- Python 3.9+
- PostgreSQL
- SQLAlchemy
- Spotipy
- Pydantic

## Prerequisites

- Node.js 16+
- Python 3.9+
- PostgreSQL
- Spotify Developer Account

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spotify-playlist-generator.git
   cd spotify-playlist-generator
   ```

2. Set up the backend:
   ```bash
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp .env.example .env
   # Edit .env with your Spotify credentials
   ```

3. Set up the frontend:
   ```bash
   cd client
   npm install
   ```

4. Set up the database:
   ```bash
   # Create a PostgreSQL database
   createdb spotify_playlist_generator
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   uvicorn main:app --reload
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /search?query={query}` - Search for tracks
- `POST /playlist` - Create a new playlist
- `GET /recommendations` - Get track recommendations

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
DATABASE_URL=postgresql://user:password@localhost:5432/spotify_playlist_generator
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Spotify Web API
- FastAPI
- Next.js
- Tailwind CSS
