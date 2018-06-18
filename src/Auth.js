const Uri = require('./Uri');

class Auth {
  constructor({ sdkInstance, httpClient }) {
    this.sdk = sdkInstance;
    this.http = httpClient;
  }

  fetchAccessToken({ clientId, clientSecret }) {
    const uri = Uri.Auth.fetchAccessToken();
    return this.http.post(uri, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials',
      auth: {
        username: clientId,
        password: clientSecret
      }
    });
  }
}

module.exports = Auth;
