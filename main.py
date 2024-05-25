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
