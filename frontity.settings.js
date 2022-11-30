const settings = {
  "name": "charles-cantin-photographe",
  "state": {
    "frontity": {
      "url": "https://mondernierprojet.fr",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "monThemePhoto",
      "state": {
        "theme": {
          "menu": [
            [
              "Accueil",
              "/"
            ],
            [
              "Tarifs & prestations",
              "/tarifs-et-prestations/"
            ],
            [
              "Contact",
              "/contact/"
            ],
            [
              "Gallerie",
              "/gallerie/"
            ]
          ]
          // ,
          // "featured": {
          //   "showOnList": false,
          //   "showOnPost": false
          // }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://mondernierprojet.fr/wp-json",
          "url": "https://mondernierprojet.fr",
          "homepage": "/accueil",
          "postsPage": "/gallerie"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react", 
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
