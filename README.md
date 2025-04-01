# Spotify Playlist Generator

This project generates a Spotify playlist based on a song name extracted from a YouTube link. It uses the YouTube, Speech Recognition, and Spotify APIs to create a playlist of similar songs.

## Features

- Extract song name from a YouTube link.
- Analyze the song using speech recognition.
- Get similar songs from Spotify.
- Generate a playlist with the original and similar songs.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/emadahmad2001/spotify-playlist-generator.git
    cd spotify-playlist-generator
    ```

2. Install the required dependencies:

    ```bash
    pip install speechrecognition pytube spotipy
    ```

3. Set up your Spotify API credentials:

    Replace `'your-spotify-client-id'` and `'your-spotify-client-secret'` with your actual Spotify API credentials in the script.

## How to Use

1. Run the script:

    ```bash
    python spotify_playlist_generator.py
    ```

2. Enter a YouTube link when prompted:

    ```bash
    Enter a YouTube link: [Your YouTube Link]
    ```

3. Speak a command or description for the song when prompted:

    ```bash
    Say something!
    ```

4. The script will print out a generated playlist of similar songs.

## Example

```python
import speech_recognition as sr
from pytube import YouTube
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Spotify API credentials
client_id = "your-spotify-client-id"
client_secret = "your-spotify-client-secret"

# Create a Spotify client
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def get_song_name(url):
    # Extract the song name from the YouTube link
    yt = YouTube(url)
    return yt.title

def analyze_song(song_name):
    # Analyze the song using speech recognition
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)
        try:
            print("You said: " + r.recognize_google(audio))
        except sr.UnknownValueError:
            print("Google Speech Recognition could not understand your audio")
        except sr.RequestError as e:
            print("Could not request results from Google Speech Recognition service; {0}".format(e))
    return r.recognize_google(audio)

def get_similar_songs(song_name):
    # Get similar songs using Spotify
    result = sp.search(q=song_name)
    track_id = result['tracks']['items'][0]['id']
    similar_songs = sp.recommendations(seed_tracks=[track_id], limit=10)
    return [song['name'] for song in similar_songs['tracks']]

def create_playlist(song_name):
    # Create a playlist with similar songs
    playlist = [song_name]
    similar_songs = get_similar_songs(song_name)
    playlist.extend(similar_songs)
    return playlist

def main():
    url = input("Enter a YouTube link: ")
    song_name = get_song_name(url)
    analyzed_song = analyze_song(song_name)
    playlist = create_playlist(analyzed_song)
    print("Playlist: ", playlist)

if __name__ == "__main__":
    main()
