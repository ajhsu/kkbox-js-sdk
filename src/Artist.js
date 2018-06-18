const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class Artist {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  fetchMetadata(artistId, options) {
    const uri = Uri.Artist.fetchMetadata(artistId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetchAlbums(artistId, options) {
    const uri = Uri.Artist.fetchAlbums(artistId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetchTopTracks(artistId, options) {
    const uri = Uri.Artist.fetchTopTracks(artistId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetchRelatedArtists(artistId, options) {
    const uri = Uri.Artist.fetchRelatedArtists(artistId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = Artist;
