'use client';

import { useState } from 'react';
import SongCard from '../components/SongCard';
import WaveformLoader from '../components/WaveformLoader';

interface Song {
  title: string;
  artist: string;
  albumArt: string;
  preview_url?: string;
  spotify_url?: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);

  const handleGeneratePlaylist = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ song_name: 'Example Song' }), // TODO: Get from user input
      });
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error('Error generating playlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#1DB954] to-[#1ed760] bg-clip-text text-transparent">
          Spotify Playlist Generator
        </h1>
        <p className="text-gray-400 text-lg">
          Create amazing playlists with AI-powered recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <SongCard
              key={index}
              title={song.title}
              artist={song.artist}
              albumArt={song.albumArt}
              onClick={() => song.preview_url && new Audio(song.preview_url).play()}
            />
          ))
        ) : (
          // Example song cards when no songs are loaded
          <>
            <SongCard
              title="Example Song"
              artist="Example Artist"
              albumArt="https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f5"
            />
            <SongCard
              title="Another Song"
              artist="Another Artist"
              albumArt="https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f5"
            />
            <SongCard
              title="Third Song"
              artist="Third Artist"
              albumArt="https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f5"
            />
          </>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleGeneratePlaylist}
          className="px-8 py-4 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full font-bold transition-colors flex items-center space-x-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <WaveformLoader />
              <span>Generating...</span>
            </>
          ) : (
            <span>Generate Playlist</span>
          )}
        </button>
      </div>
    </div>
  );
} 