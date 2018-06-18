const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class Playlist {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  fetch(playlistId, options) {
    const uri = Uri.Playlist.fetch(playlistId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetchFeaturedPlaylists(options) {
    const uri = Uri.Playlist.fetchFeaturedPlaylists({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetchNewHitsPlaylists(options) {
    const uri = Uri.Playlist.fetchNewHitsPlaylists({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = Playlist;
