const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class MoodStation {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  listAll(options) {
    const uri = Uri.MoodStation.listAll({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetch(stationId, options) {
    const uri = Uri.MoodStation.fetch(stationId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = MoodStation;
