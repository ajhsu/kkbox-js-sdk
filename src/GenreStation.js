const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class GenreStation {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  listAll(options) {
    const uri = Uri.GenreStation.listAll({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetch(stationId, options) {
    const uri = Uri.GenreStation.fetch(stationId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = GenreStation;
