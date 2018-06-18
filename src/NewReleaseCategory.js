const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class NewReleaseCategory {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  listAll(options) {
    const uri = Uri.NewReleaseCategory.listAll({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }

  fetch(categoryId, options) {
    const uri = Uri.NewReleaseCategory.fetch(categoryId, {
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = NewReleaseCategory;
