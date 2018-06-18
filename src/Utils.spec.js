const { createAuthorizationHeader } = require('./Utils');

describe('Utils', () => {
  test('createAuthorizationHeader', () => {
    // Use-cases
    expect(createAuthorizationHeader('fakeAccessToken')).toMatchSnapshot();
  });
});
