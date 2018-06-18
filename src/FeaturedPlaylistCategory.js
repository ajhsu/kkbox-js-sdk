const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class FeaturedPlaylistCategory {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  listAll(options) {
    const uri = Uri.FeaturedPlaylistCategory.listAll({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetch(categoryId, options) {
    const uri = Uri.FeaturedPlaylistCategory.fetch(categoryId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = FeaturedPlaylistCategory;
