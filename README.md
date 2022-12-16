Les informations ci dessous proviennent du Readme.md généré automatiquement par frontity.
J'ai laissé les informations relatives au déploiement comme demandé.
Pour les précisons écrites par moi même scrollez jusqu'à précisions.

# charles-cantin-photographe

This project was bootstrapped with [Frontity](https://frontity.org/).

#### Table of Contents

- [Launch a development server](#launch-a-development-server)
- [Create a production-ready build](#create-a-production-ready-build)
- [Deploy](#deploy)
- [Précisions](rédigé par l'apprenante)

### Launch a development server

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project.

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content.

## Précisions:

- [Le CMS] : J'ai utilisé wordpress.

- [le Backend] :
  L'hébergement a été éfféctué grace à l'hébergeur Ionos. Et les fichiers on été transférés grace à WP migration.
  J'ai tout dévelloppé dans un premier temps en local grace à <Local> puis j'ai transféré mes fichiers sur le serveur.
  Bien que le front ne soit pas travaillé vous pouvez visiter :

  > > > https://mondernierprojet.fr

- [le FrontEnd] :
  Il est hébergé sur vercel. Pour un projet Frontity c'est ce qu'il y avait de plus simple.

      Une fois le projet bien avancé :
        ->J'ai dabord "push" mon projet sur github
        ->J'ai connecté mon "repository" github avec un nouveau projet vercel.
        ->Une fois cela fait une modification de mon depot Github entrainait la modification du projet vercel.
