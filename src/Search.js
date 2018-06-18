const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class Search {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  query(text, options) {
    const uri = Uri.Search.query(text, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = Search;
