const settings = {
  "name": "charles-cantin-photographe",
  "state": {
    "frontity": {
      "url": "http://charles-cantin-photographe.local",
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
          "api": "http://charles-cantin-photographe.local/wp-json",
          "url": "http://charles-cantin-photographe.local",
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
