const Uri = require('./Uri');
const { createAuthorizationHeader } = require('./Utils');

class Chart {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  listAll(options) {
    const uri = Uri.Chart.listAll({
      territory: this.sdk.territory,
      ...options
    });

    return this.http.get(uri, {
      ...createAuthorizationHeader(this.sdk.token)
    });
  }
}

module.exports = Chart;
