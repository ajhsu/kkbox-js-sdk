function createAuthorizationHeader(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
}

function isRequired(params) {
  const keys = Object.keys(params);
  keys.forEach(function(key) {
    if (!params[key]) {
      throw new Error(`${key} is required.`);
    }
  });
}

module.exports = {
  createAuthorizationHeader,
  isRequired
};
