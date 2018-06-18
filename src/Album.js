const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class Album {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  fetchMetadata(albumId, options) {
    const uri = Uri.Album.fetchMetadata(albumId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetchTracks(albumId, options) {
    const uri = Uri.Album.fetchTracks(albumId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = Album;
