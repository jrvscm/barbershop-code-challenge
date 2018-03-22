//normally would hide these with .env or put them in the ignore file.
//including them in the repo for ease of use when whomever clones the repo or views the code
export const UNSPLASH_BASE_URL = 'https://api.unsplash.com/';
export const UNSPLASH_ACCESS_KEY = '80ece97d474f5768fb0288307847ac993a939747eaafac1989207cd7a9397a08';
export const UNSPLASH_SECRET_KEY = '9bfc51cc90ad72f2fa43b0bbcfba491e150e986237121bbe5305af31ebeb1d10';

//for testing
export const MOCK_DATA = {
    currentImages: [
      {
        id: 'P2cn9rt8pII',
        created_at: '2017-06-11T19:53:12-04:00',
        updated_at: '2017-12-12T12:40:40-05:00',
        width: 3391,
        height: 2543,
        color: '#241F1A',
        description: 'Person standing on a rocky Wharariki sand beach',
        categories: [],
        user: {
          id: 'a6RHorWL5ho',
          updated_at: '2018-03-20T14:15:37-04:00',
          username: 'lastly',
          name: 'Tyler Lastovich',
          first_name: 'Tyler',
          last_name: 'Lastovich',
          twitter_username: 'tylerlastovich',
          portfolio_url: 'http://buymeacoff.ee/TL',
          bio: 'There is always something new to build and somewhere new to explore',
          location: 'Way Up Here ↗️🌎',
          links: {
            self: 'https://api.unsplash.com/users/lastly',
            html: 'https://unsplash.com/@lastly',
            photos: 'https://api.unsplash.com/users/lastly/photos',
            likes: 'https://api.unsplash.com/users/lastly/likes',
            portfolio: 'https://api.unsplash.com/users/lastly/portfolio',
            following: 'https://api.unsplash.com/users/lastly/following',
            followers: 'https://api.unsplash.com/users/lastly/followers'
          },
          profile_image: {
            small: 'https://images.unsplash.com/profile-1497048509756-0cd92aa0a177?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=f732507f6e3085d3c546a7e32929a7a9',
            medium: 'https://images.unsplash.com/profile-1497048509756-0cd92aa0a177?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=dc508c320bc88b325f754235aa42ef7c',
            large: 'https://images.unsplash.com/profile-1497048509756-0cd92aa0a177?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=6d324c5c885416454bbb79e1ad22cb50',
            custom: 'https://images.unsplash.com/profile-1497048509756-0cd92aa0a177?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=cd1db90c605d2de3eccd91c9dcf6b77a'
          },
          total_collections: 12,
          instagram_username: 'tylerlastovich',
          total_likes: 190,
          total_photos: 167
        },
        urls: {
          raw: 'https://images.unsplash.com/photo-1497225013001-9f6084fed957?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=370dbcb49c3e11549b1b943705b02c9a',
          full: 'https://images.unsplash.com/photo-1497225013001-9f6084fed957?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=a772eac5fff90cb06d19f930987de6e0',
          regular: 'https://images.unsplash.com/photo-1497225013001-9f6084fed957?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=00258f741b05cdebfa6cd5be336cdfc8',
          small: 'https://images.unsplash.com/photo-1497225013001-9f6084fed957?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=bb1753cf2631dc3d0f38636aa0e2b2b1',
          thumb: 'https://images.unsplash.com/photo-1497225013001-9f6084fed957?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=ee05f32766cc8830cf811ad2a42318ee',
          custom: 'https://images.unsplash.com/photo-1497225013001-9f6084fed957?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=93a83fce499db2bf7e35ee3916c214c3'
        },
        links: {
          self: 'https://api.unsplash.com/photos/P2cn9rt8pII',
          html: 'https://unsplash.com/photos/P2cn9rt8pII',
          download: 'https://unsplash.com/photos/P2cn9rt8pII/download',
          download_location: 'https://api.unsplash.com/photos/P2cn9rt8pII/download'
        },
        liked_by_user: false,
        sponsored: false,
        likes: 32,
        current_user_collections: [],
        slug: null,
        location: {
          title: 'Wharariki Beach, Puponga, New Zealand',
          name: 'Wharariki Beach',
          city: 'Puponga',
          country: 'New Zealand',
          position: {
            latitude: -40.5064687341284,
            longitude: 172.6603138875
          }
        },
        exif: {
          make: 'Panasonic',
          model: 'DMC-FZ300',
          exposure_time: '1/4000',
          aperture: '4',
          focal_length: '4.5',
          iso: 100
        },
        views: 217594,
        downloads: 779
      },
      {
        id: 'CygpfTrOuCc',
        created_at: '2018-03-15T05:08:58-04:00',
        updated_at: '2018-03-15T06:28:46-04:00',
        width: 6016,
        height: 4016,
        color: '#030303',
        description: null,
        categories: [],
        user: {
          id: 'vsZait6dtqc',
          updated_at: '2018-03-20T17:04:53-04:00',
          username: 'chuttersnap',
          name: 'chuttersnap',
          first_name: 'chuttersnap',
          last_name: null,
          twitter_username: null,
          portfolio_url: 'http://www.facebook.com/chuttersnap',
          bio: 'Unsplash Ambassador // The CHUTTERSNAP Empire',
          location: 'Singapore',
          links: {
            self: 'https://api.unsplash.com/users/chuttersnap',
            html: 'https://unsplash.com/@chuttersnap',
            photos: 'https://api.unsplash.com/users/chuttersnap/photos',
            likes: 'https://api.unsplash.com/users/chuttersnap/likes',
            portfolio: 'https://api.unsplash.com/users/chuttersnap/portfolio',
            following: 'https://api.unsplash.com/users/chuttersnap/following',
            followers: 'https://api.unsplash.com/users/chuttersnap/followers'
          },
          profile_image: {
            small: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7a05fcdbc458e07429a0c10009eff08a',
            medium: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=6f30bba4381be49bf427839bf7b23a81',
            large: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=46a0c4b0050aaaca259bc07c00d158c6',
            custom: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=e37c3f3e07a1bbe2a2805fedd24e12e6'
          },
          total_collections: 1,
          instagram_username: 'chuttersnap',
          total_likes: 1123,
          total_photos: 1169
        },
        urls: {
          raw: 'https://images.unsplash.com/photo-1521104934253-a0608369afbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=452ee3fff8fe9ce0bca9ac2f1b73355e',
          full: 'https://images.unsplash.com/photo-1521104934253-a0608369afbe?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=4e31d6e80f03846fef78020d4bd55b78',
          regular: 'https://images.unsplash.com/photo-1521104934253-a0608369afbe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=366045e9a978a541e35a2d1786e113ba',
          small: 'https://images.unsplash.com/photo-1521104934253-a0608369afbe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=aa543d90bae4d6222d2bf696c06e786c',
          thumb: 'https://images.unsplash.com/photo-1521104934253-a0608369afbe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=bd457914d57396abdcc22d79795057b5',
          custom: 'https://images.unsplash.com/photo-1521104934253-a0608369afbe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=750026075b63947290ccabeb20251387'
        },
        links: {
          self: 'https://api.unsplash.com/photos/CygpfTrOuCc',
          html: 'https://unsplash.com/photos/CygpfTrOuCc',
          download: 'https://unsplash.com/photos/CygpfTrOuCc/download',
          download_location: 'https://api.unsplash.com/photos/CygpfTrOuCc/download'
        },
        liked_by_user: false,
        sponsored: false,
        likes: 5,
        current_user_collections: [],
        slug: null,
        exif: {
          make: 'Nikon',
          model: 'NIKON D750',
          exposure_time: '1/4000',
          aperture: '0.7',
          focal_length: '50',
          iso: 100
        },
        views: 29498,
        downloads: 308
      },
      {
        id: 'gugEIYGOCLk',
        created_at: '2016-09-09T14:54:28-04:00',
        updated_at: '2017-10-31T17:19:35-04:00',
        width: 4600,
        height: 3071,
        color: '#191006',
        description: 'A long bookcase in a room with a sofa, a chair and a pouffe',
        categories: [],
        user: {
          id: 'D3HwF26_qmE',
          updated_at: '2018-02-22T16:18:30-05:00',
          username: 'wstn',
          name: 'Ben Garratt',
          first_name: 'Ben',
          last_name: 'Garratt',
          twitter_username: 'wstn',
          portfolio_url: null,
          bio: null,
          location: 'London',
          links: {
            self: 'https://api.unsplash.com/users/wstn',
            html: 'https://unsplash.com/@wstn',
            photos: 'https://api.unsplash.com/users/wstn/photos',
            likes: 'https://api.unsplash.com/users/wstn/likes',
            portfolio: 'https://api.unsplash.com/users/wstn/portfolio',
            following: 'https://api.unsplash.com/users/wstn/following',
            followers: 'https://api.unsplash.com/users/wstn/followers'
          },
          profile_image: {
            small: 'https://images.unsplash.com/profile-1473519396937-12e2205469ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=9b2f8c8a66bf01ea96a58d698257e47b',
            medium: 'https://images.unsplash.com/profile-1473519396937-12e2205469ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=7739270432600dfcfc9483baf1b673b5',
            large: 'https://images.unsplash.com/profile-1473519396937-12e2205469ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=bcf42ff7337cf48f631364718f0c68f8',
            custom: 'https://images.unsplash.com/profile-1473519396937-12e2205469ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=e247cb249491cb1032b48f2961c71607'
          },
          total_collections: 0,
          instagram_username: null,
          total_likes: 0,
          total_photos: 6
        },
        urls: {
          raw: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=ea68193c2a02cb2e644f7cb0dafa7f90',
          full: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=117b8dbb5c28a2ed1e6ae718142fca72',
          regular: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=07917f2bfad272841bf6eb6d205cc4c2',
          small: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=bd26ab9cd4183374e06e66487101c395',
          thumb: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=32f7dd201de4122039fa0304df3750fe',
          custom: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=8b586ffd9a0489d2ee5afc920f062c5f'
        },
        links: {
          self: 'https://api.unsplash.com/photos/gugEIYGOCLk',
          html: 'https://unsplash.com/photos/gugEIYGOCLk',
          download: 'https://unsplash.com/photos/gugEIYGOCLk/download',
          download_location: 'https://api.unsplash.com/photos/gugEIYGOCLk/download'
        },
        liked_by_user: false,
        sponsored: false,
        likes: 198,
        current_user_collections: [],
        slug: null,
        exif: {
          make: 'Nikon',
          model: 'NIKON D610',
          exposure_time: '1/4000',
          aperture: '3.5',
          focal_length: '35',
          iso: 320
        },
        views: 2153816,
        downloads: 14139
      },
      {
        id: '2s5MARcNcc8',
        created_at: '2017-08-14T19:05:46-04:00',
        updated_at: '2017-10-20T02:33:12-04:00',
        width: 6016,
        height: 4016,
        color: '#192422',
        description: null,
        categories: [],
        user: {
          id: 'vsZait6dtqc',
          updated_at: '2018-03-20T17:04:53-04:00',
          username: 'chuttersnap',
          name: 'chuttersnap',
          first_name: 'chuttersnap',
          last_name: null,
          twitter_username: null,
          portfolio_url: 'http://www.facebook.com/chuttersnap',
          bio: 'Unsplash Ambassador // The CHUTTERSNAP Empire',
          location: 'Singapore',
          links: {
            self: 'https://api.unsplash.com/users/chuttersnap',
            html: 'https://unsplash.com/@chuttersnap',
            photos: 'https://api.unsplash.com/users/chuttersnap/photos',
            likes: 'https://api.unsplash.com/users/chuttersnap/likes',
            portfolio: 'https://api.unsplash.com/users/chuttersnap/portfolio',
            following: 'https://api.unsplash.com/users/chuttersnap/following',
            followers: 'https://api.unsplash.com/users/chuttersnap/followers'
          },
          profile_image: {
            small: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7a05fcdbc458e07429a0c10009eff08a',
            medium: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=6f30bba4381be49bf427839bf7b23a81',
            large: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=46a0c4b0050aaaca259bc07c00d158c6',
            custom: 'https://images.unsplash.com/profile-1519037305094-44617d4cf506?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=e37c3f3e07a1bbe2a2805fedd24e12e6'
          },
          total_collections: 1,
          instagram_username: 'chuttersnap',
          total_likes: 1123,
          total_photos: 1169
        },
        urls: {
          raw: 'https://images.unsplash.com/photo-1502751946918-9c24d05484ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=987bb26375df28f9c07e0b53cc34a15e',
          full: 'https://images.unsplash.com/photo-1502751946918-9c24d05484ba?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=2473c664fb8cd747991caa6079b3f72d',
          regular: 'https://images.unsplash.com/photo-1502751946918-9c24d05484ba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=92d0786422eaa1e3109500c47920a33e',
          small: 'https://images.unsplash.com/photo-1502751946918-9c24d05484ba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=44269decdb8b172e61cf58c7441457ae',
          thumb: 'https://images.unsplash.com/photo-1502751946918-9c24d05484ba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=707928fe0d34a5ba2c024d21c72e1da4',
          custom: 'https://images.unsplash.com/photo-1502751946918-9c24d05484ba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=5974a3cdf98ed28cc3acc31085909255'
        },
        links: {
          self: 'https://api.unsplash.com/photos/2s5MARcNcc8',
          html: 'https://unsplash.com/photos/2s5MARcNcc8',
          download: 'https://unsplash.com/photos/2s5MARcNcc8/download',
          download_location: 'https://api.unsplash.com/photos/2s5MARcNcc8/download'
        },
        liked_by_user: false,
        sponsored: false,
        likes: 38,
        current_user_collections: [],
        slug: null,
        exif: {
          make: 'Nikon',
          model: 'NIKON D750',
          exposure_time: '1/4000',
          aperture: '2.8',
          focal_length: '45',
          iso: 100
        },
        views: 152556,
        downloads: 1264
      },
      {
        id: 'xGy_DKmPYEk',
        created_at: '2016-07-18T01:08:44-04:00',
        updated_at: '2017-10-31T13:41:16-04:00',
        width: 2738,
        height: 1825,
        color: '#E6AC93',
        description: null,
        categories: [],
        user: {
          id: 'He1Uhih1Qdg',
          updated_at: '2018-03-19T20:16:55-04:00',
          username: 'averieclaire',
          name: 'averie woodard',
          first_name: 'averie',
          last_name: 'woodard',
          twitter_username: null,
          portfolio_url: 'http://averieclaire.com',
          bio: null,
          location: 'Denton, Texas',
          links: {
            self: 'https://api.unsplash.com/users/averieclaire',
            html: 'https://unsplash.com/@averieclaire',
            photos: 'https://api.unsplash.com/users/averieclaire/photos',
            likes: 'https://api.unsplash.com/users/averieclaire/likes',
            portfolio: 'https://api.unsplash.com/users/averieclaire/portfolio',
            following: 'https://api.unsplash.com/users/averieclaire/following',
            followers: 'https://api.unsplash.com/users/averieclaire/followers'
          },
          profile_image: {
            small: 'https://images.unsplash.com/profile-1514909811778-7222cf00a0ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=f2c0936bf605794a616dca4883cec01a',
            medium: 'https://images.unsplash.com/profile-1514909811778-7222cf00a0ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=d0e5fe54c53db7d2219a1a2b13d5b98b',
            large: 'https://images.unsplash.com/profile-1514909811778-7222cf00a0ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=4271cbf6aa51d8a92eecd990bcb5e906',
            custom: 'https://images.unsplash.com/profile-1514909811778-7222cf00a0ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=aac69fd8ac0c3b76251ab659d67b7cdf'
          },
          total_collections: 0,
          instagram_username: 'averieclaire',
          total_likes: 2,
          total_photos: 45
        },
        urls: {
          raw: 'https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=273e5974caa5c7c93aa39a45af159661',
          full: 'https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=92846bf6954eef8ba1abd9b3192a5e88',
          regular: 'https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=aa8f659df1b4d9c0af1f061eb25e7800',
          small: 'https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=ae01d03cd0e05b1c282bdab200c75c6d',
          thumb: 'https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=fe5d2cad68dd02ff3a4d24e20f3c9a77',
          custom: 'https://images.unsplash.com/photo-1468818519844-64bc429824de?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=f615769141635d42f7d32b28268410fb'
        },
        links: {
          self: 'https://api.unsplash.com/photos/xGy_DKmPYEk',
          html: 'https://unsplash.com/photos/xGy_DKmPYEk',
          download: 'https://unsplash.com/photos/xGy_DKmPYEk/download',
          download_location: 'https://api.unsplash.com/photos/xGy_DKmPYEk/download'
        },
        liked_by_user: false,
        sponsored: false,
        likes: 926,
        current_user_collections: [],
        slug: null,
        exif: {
          make: 'Canon',
          model: 'Canon EOS 5D Mark III',
          exposure_time: '1/4000',
          aperture: '2.8',
          focal_length: '50',
          iso: 250
        },
        views: 4173784,
        downloads: 28916
      },
      {
        id: 'QxjsOlFNr_4',
        created_at: '2016-06-08T23:07:55-04:00',
        updated_at: '2017-11-01T07:58:16-04:00',
        width: 4928,
        height: 3264,
        color: '#F7F8FA',
        description: 'A desert landscape in San Pedro de Atacama',
        categories: [],
        user: {
          id: 'MV8mydJPSaw',
          updated_at: '2018-02-22T17:48:42-05:00',
          username: 'keaneyefoto',
          name: 'Hailey Kean',
          first_name: 'Hailey',
          last_name: 'Kean',
          twitter_username: null,
          portfolio_url: null,
          bio: 'Photographer and blogger from Toronto Canada\r\n\r\nwww.keanonculture.wordpress.com',
          location: 'Toronto, Canada',
          links: {
            self: 'https://api.unsplash.com/users/keaneyefoto',
            html: 'https://unsplash.com/@keaneyefoto',
            photos: 'https://api.unsplash.com/users/keaneyefoto/photos',
            likes: 'https://api.unsplash.com/users/keaneyefoto/likes',
            portfolio: 'https://api.unsplash.com/users/keaneyefoto/portfolio',
            following: 'https://api.unsplash.com/users/keaneyefoto/following',
            followers: 'https://api.unsplash.com/users/keaneyefoto/followers'
          },
          profile_image: {
            small: 'https://images.unsplash.com/profile-1465442868532-d5846263f001?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=d62beccb87e9a1c0654305c0e092aa4c',
            medium: 'https://images.unsplash.com/profile-1465442868532-d5846263f001?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=85a337ab2e013d22a904498032a55521',
            large: 'https://images.unsplash.com/profile-1465442868532-d5846263f001?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=7091c1263b00adc23dc6f4431bd9b46a',
            custom: 'https://images.unsplash.com/profile-1465442868532-d5846263f001?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=ab9d15520ea5cd052d051b3103805d8d'
          },
          total_collections: 2,
          instagram_username: 'keaneyefoto',
          total_likes: 14,
          total_photos: 6
        },
        urls: {
          raw: 'https://images.unsplash.com/photo-1465441494912-68f5747c3fe0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=9410e5a72cda488ed113c2d5e14a17e3',
          full: 'https://images.unsplash.com/photo-1465441494912-68f5747c3fe0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=581d434bc358f029600e4fec84b3de29',
          regular: 'https://images.unsplash.com/photo-1465441494912-68f5747c3fe0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=c728b4ba72a719f8bc6737cff42a67a6',
          small: 'https://images.unsplash.com/photo-1465441494912-68f5747c3fe0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=629f280354074ff9d10d16261e3c5225',
          thumb: 'https://images.unsplash.com/photo-1465441494912-68f5747c3fe0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=75388da00a1574b1fd7e1ae799d83659',
          custom: 'https://images.unsplash.com/photo-1465441494912-68f5747c3fe0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=crop&s=fbc3869ee4996f7d2eed88c3d7f369c8'
        },
        links: {
          self: 'https://api.unsplash.com/photos/QxjsOlFNr_4',
          html: 'https://unsplash.com/photos/QxjsOlFNr_4',
          download: 'https://unsplash.com/photos/QxjsOlFNr_4/download',
          download_location: 'https://api.unsplash.com/photos/QxjsOlFNr_4/download'
        },
        liked_by_user: false,
        sponsored: false,
        likes: 658,
        current_user_collections: [],
        slug: null,
        location: {
          title: 'San Pedro de Atacama, Chile',
          name: 'San Pedro de Atacama',
          city: 'San Pedro de Atacama',
          country: 'Chile',
          position: {
            latitude: -22.9087073,
            longitude: -68.1997156
          }
        },
        exif: {
          make: 'Nikon',
          model: 'NIKON D5100',
          exposure_time: '1/4000',
          aperture: '5.0',
          focal_length: '20',
          iso: 100
        },
        views: 5167356,
        downloads: 27829
      }
    ],
    grid: true,
    loading: false,
    show: false,
    imageStatus: [
      {
        index: 0,
        status: 'loaded'
      },
      {
        index: 1,
        status: 'loaded'
      },
      {
        index: 2,
        status: 'loaded'
      },
      {
        index: 3,
        status: 'loaded'
      },
      {
        index: 4,
        status: 'loaded'
      },
      {
        index: 5,
        status: 'loaded'
      }
    ],
    modalImage: {
      src: 'https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyOTA1fQ&s=ea68193c2a02cb2e644f7cb0dafa7f90',
      alt: 'A long bookcase in a room with a sofa, a chair and a pouffe',
      name: 'Ben Garratt',
      twitter_username: 'wstn',
      location: 'London',
      instagram: null,
      profile_image: 'https://images.unsplash.com/profile-1473519396937-12e2205469ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=7739270432600dfcfc9483baf1b673b5'
    },
    searchInputValue: '',
    formError: false
  }
  