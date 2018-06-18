const Uri = require('./Uri');
const { createAuthorizationHeader, isRequired } = require('./Utils');

class Track {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  fetch(trackId, options) {
    isRequired({
      trackId,
      territory: this.sdk.territory || options.territory,
      sdkInstance: this.sdk,
      accessToken: this.sdk.token
    });

    const uri = Uri.Track.fetch(trackId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = Track;
