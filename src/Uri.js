const qs = require('qs');
const { isRequired } = require('./Utils');

const API_DOMAIN = 'https://api.kkbox.com/v1.1';
const OAUTH_DOMAIN = 'https://account.kkbox.com/oauth2';

function appendQueryString(uri, options) {
  if (options) {
    return `${uri}?${qs.stringify(options)}`;
  } else {
    return uri;
  }
}

const Uri = {
  Auth: {
    fetchAccessToken() {
      return `${OAUTH_DOMAIN}/token/`;
    }
  },
  Track: {
    fetch(trackId, options) {
      isRequired({
        trackId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/tracks/${trackId}`;
      return appendQueryString(uri, options);
    }
  },
  Album: {
    fetchMetadata(albumId, options) {
      isRequired({
        albumId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/albums/${albumId}`;
      return appendQueryString(uri, options);
    },
    fetchTracks(albumId, options) {
      isRequired({
        albumId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/albums/${albumId}/tracks`;
      return appendQueryString(uri, options);
    },
    getWidgetUri() {}
  },
  Artist: {
    fetchMetadata(artistId, options) {
      isRequired({
        artistId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/artists/${artistId}`;
      return appendQueryString(uri, options);
    },
    fetchAlbums(artistId, options) {
      isRequired({
        artistId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/artists/${artistId}/albums`;
      return appendQueryString(uri, options);
    },
    fetchTopTracks(artistId, options) {
      isRequired({
        artistId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/artists/${artistId}/top-tracks`;
      return appendQueryString(uri, options);
    },
    fetchRelatedArtists(artistId, options) {
      isRequired({
        artistId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/artists/${artistId}/related-artists`;
      return appendQueryString(uri, options);
    }
  },
  Playlist: {
    fetch(playlistId, options) {
      isRequired({
        playlistId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/shared-playlists/${playlistId}`;
      return appendQueryString(uri, options);
    },
    fetchFeaturedPlaylists(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/featured-playlists`;
      return appendQueryString(uri, options);
    },
    fetchNewHitsPlaylists(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/new-hits-playlists`;
      return appendQueryString(uri, options);
    }
  },
  Chart: {
    listAll(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/charts`;
      return appendQueryString(uri, options);
    }
  },
  Search: {
    query(text, options) {
      isRequired({
        territory: options.territory
      });

      if (text === undefined || text === '')
        throw new Error('text is required');

      let uri = `${API_DOMAIN}/search`;
      return appendQueryString(uri, {
        q: text,
        ...options
      });
    }
  },
  FeaturedPlaylistCategory: {
    listAll(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/featured-playlist-categories`;
      return appendQueryString(uri, options);
    },
    fetch(categoryId, options) {
      isRequired({
        categoryId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/featured-playlist-categories/${categoryId}`;
      return appendQueryString(uri, options);
    }
  },
  NewReleaseCategory: {
    listAll(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/new-release-categories`;
      return appendQueryString(uri, options);
    },
    fetch(categoryId, options) {
      isRequired({
        categoryId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/new-release-categories/${categoryId}`;
      return appendQueryString(uri, options);
    }
  },
  MoodStation: {
    listAll(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/mood-stations`;
      return appendQueryString(uri, options);
    },
    fetch(stationId, options) {
      isRequired({
        stationId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/mood-stations/${stationId}`;
      return appendQueryString(uri, options);
    }
  },
  GenreStation: {
    listAll(options) {
      isRequired({
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/genre-stations`;
      return appendQueryString(uri, options);
    },
    fetch(stationId, options) {
      isRequired({
        stationId,
        territory: options.territory
      });
      let uri = `${API_DOMAIN}/genre-stations/${stationId}`;
      return appendQueryString(uri, options);
    }
  }
};

module.exports = Uri;
