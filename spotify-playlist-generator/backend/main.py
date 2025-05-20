from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Spotify setup
client_credentials_manager = SpotifyClientCredentials(
    client_id=os.getenv("SPOTIFY_CLIENT_ID"),
    client_secret=os.getenv("SPOTIFY_CLIENT_SECRET")
)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

class SongRequest(BaseModel):
    song_name: str

@app.post("/api/recommendations")
async def get_recommendations(request: SongRequest):
    try:
        # Search for the song
        result = sp.search(q=request.song_name, limit=1)
        if not result['tracks']['items']:
            raise HTTPException(status_code=404, detail="Song not found")
        
        track = result['tracks']['items'][0]
        track_id = track['id']
        
        # Get recommendations
        recommendations = sp.recommendations(
            seed_tracks=[track_id],
            limit=10
        )
        
        # Format the response
        formatted_recommendations = []
        for track in recommendations['tracks']:
            formatted_recommendations.append({
                'title': track['name'],
                'artist': track['artists'][0]['name'],
                'albumArt': track['album']['images'][0]['url'],
                'preview_url': track['preview_url'],
                'spotify_url': track['external_urls']['spotify']
            })
        
        return formatted_recommendations
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 