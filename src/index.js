const http = require('./http');
const { Territory, ContentType } = require('./constants');
const Auth = require('./Auth');
const Track = require('./Track');
const Album = require('./Album');
const Artist = require('./Artist');
const Playlist = require('./Playlist');
const Chart = require('./Chart');
const Search = require('./Search');
const FeaturedPlaylistCategory = require('./FeaturedPlaylistCategory');
const NewReleaseCategory = require('./NewReleaseCategory');
const MoodStation = require('./MoodStation');
const GenreStation = require('./GenreStation');

class KKBOX {
  constructor({ territory, token }) {
    this.token = token || null;
    this.territory = territory || Territory.TW;

    const refs = { sdkInstance: this, httpClient: http };

    this.auth = new Auth(refs);
    this.track = new Track(refs);
    this.album = new Album(refs);
    this.artist = new Artist(refs);
    this.playlist = new Playlist(refs);
    this.chart = new Chart(refs);
    this.search = new Search(refs);
    this.featuredPlaylistCategory = new FeaturedPlaylistCategory(refs);
    this.newReleaseCategory = new NewReleaseCategory(refs);
    this.moodStation = new MoodStation(refs);
    this.genreStation = new GenreStation(refs);
  }

  setAccessToken(token) {
    this.token = token;
  }

  setTerritory(territory) {
    this.territory = territory;
  }
}

KKBOX.Territory = Territory;
KKBOX.ContentType = ContentType;

module.exports = KKBOX;
