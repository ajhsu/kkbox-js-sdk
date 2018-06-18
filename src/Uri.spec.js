const { Territory } = require('./constants');
const Uri = require('./Uri');

describe('Uri', () => {
  describe('Auth', () => {
    test('fetchAccessToken', () => {
      expect(Uri.Auth.fetchAccessToken()).toMatchSnapshot();
    });
  });

  describe('Track', () => {
    test('fetch', () => {
      // Use-cases
      expect(
        Uri.Track.fetch('fakeTrackId', {
          territory: Territory.TW
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Track.fetch()).toThrow();
      expect(() => Uri.Track.fetch('fakeTrackId')).toThrow();
    });
  });

  describe('Album', () => {
    test('fetchMetadata', () => {
      // Use-cases
      expect(
        Uri.Album.fetchMetadata('fakeAlbumId', {
          territory: Territory.TW
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Album.fetchMetadata()).toThrow();
      expect(() => Uri.Album.fetchMetadata('fakeAlbumId')).toThrow();
    });

    test('fetchTracks', () => {
      // Use-cases
      expect(
        Uri.Album.fetchTracks('fakeAlbumId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Album.fetchTracks()).toThrow();
      expect(() => Uri.Album.fetchTracks('fakeAlbumId')).toThrow();
    });
  });

  describe('Artist', () => {
    test('fetchMetadata', () => {
      // Use-cases
      expect(
        Uri.Artist.fetchMetadata('fakeArtistId', {
          territory: Territory.TW
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Artist.fetchMetadata()).toThrow();
      expect(() => Uri.Artist.fetchMetadata('fakeArtistId')).toThrow();
    });

    test('fetchAlbums', () => {
      // Use-cases
      expect(
        Uri.Artist.fetchAlbums('fakeArtistId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Artist.fetchAlbums()).toThrow();
      expect(() => Uri.Artist.fetchAlbums('fakeArtistId')).toThrow();
    });

    test('fetchTopTracks', () => {
      // Use-cases
      expect(
        Uri.Artist.fetchTopTracks('fakeArtistId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Artist.fetchTopTracks()).toThrow();
      expect(() => Uri.Artist.fetchTopTracks('fakeArtistId')).toThrow();
    });

    test('fetchRelatedArtists', () => {
      // Use-cases
      expect(
        Uri.Artist.fetchRelatedArtists('fakeArtistId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Artist.fetchRelatedArtists()).toThrow();
      expect(() => Uri.Artist.fetchRelatedArtists('fakeArtistId')).toThrow();
    });
  });

  describe('Playlist', () => {
    test('fetch', () => {
      // Use-cases
      expect(
        Uri.Playlist.fetch('fakePlaylistId', {
          territory: Territory.TW
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Playlist.fetch()).toThrow();
      expect(() => Uri.Playlist.fetch('fakePlaylistId')).toThrow();
    });

    test('fetchFeaturedPlaylists', () => {
      // Use-cases
      expect(
        Uri.Playlist.fetchFeaturedPlaylists({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Playlist.fetchFeaturedPlaylists()).toThrow();
    });

    test('fetchNewHitsPlaylists', () => {
      // Use-cases
      expect(
        Uri.Playlist.fetchNewHitsPlaylists({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Playlist.fetchNewHitsPlaylists()).toThrow();
    });
  });

  describe('Chart', () => {
    test('listAll', () => {
      // Use-cases
      expect(
        Uri.Chart.listAll({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Chart.listAll()).toThrow();
    });
  });

  describe('Search', () => {
    test('query', () => {
      // Use-cases
      expect(
        Uri.Search.query('FAKE QUERY', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.Search.query()).toThrow();
    });
  });

  describe('FeaturedPlaylistCategory', () => {
    test('listAll', () => {
      // Use-cases
      expect(
        Uri.FeaturedPlaylistCategory.listAll({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.FeaturedPlaylistCategory.listAll()).toThrow();
    });
    test('fetch', () => {
      // Use-cases
      expect(
        Uri.FeaturedPlaylistCategory.fetch('fakeCategoryId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.FeaturedPlaylistCategory.fetch()).toThrow();
      expect(() =>
        Uri.FeaturedPlaylistCategory.fetch('fakeCategoryId')
      ).toThrow();
    });
  });

  describe('NewReleaseCategory', () => {
    test('listAll', () => {
      // Use-cases
      expect(
        Uri.NewReleaseCategory.listAll({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.NewReleaseCategory.listAll()).toThrow();
    });
    test('fetch', () => {
      // Use-cases
      expect(
        Uri.NewReleaseCategory.fetch('fakeCategoryId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.NewReleaseCategory.fetch()).toThrow();
      expect(() => Uri.NewReleaseCategory.fetch('fakeCategoryId')).toThrow();
    });
  });

  describe('MoodStation', () => {
    test('listAll', () => {
      // Use-cases
      expect(
        Uri.MoodStation.listAll({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.MoodStation.listAll()).toThrow();
    });
    test('fetch', () => {
      // Use-cases
      expect(
        Uri.MoodStation.fetch('fakeStationId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.MoodStation.fetch()).toThrow();
      expect(() => Uri.MoodStation.fetch('fakeStationId')).toThrow();
    });
  });

  describe('GenreStation', () => {
    test('listAll', () => {
      // Use-cases
      expect(
        Uri.GenreStation.listAll({
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.GenreStation.listAll()).toThrow();
    });
    test('fetch', () => {
      // Use-cases
      expect(
        Uri.GenreStation.fetch('fakeStationId', {
          territory: Territory.TW,
          limit: 5,
          offset: 10
        })
      ).toMatchSnapshot();

      // Exceptions
      expect(() => Uri.GenreStation.fetch()).toThrow();
      expect(() => Uri.GenreStation.fetch('fakeStationId')).toThrow();
    });
  });
});
