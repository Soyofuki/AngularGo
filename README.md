# AngularGo
An Angular SPA website with samples and out of box common functions for easy leveraging.

# Quick Start

Install Node.js and NPM. Use Node version 17.9.1 at max.

Install Angular CLI.

```
npm install -g @angular/cli
```

For Windows,  install build tools.

```
npm install --global --production windows-build-tools
```

Install packages.

```
npm install npm-force-resolutions --save-dev --force
npm install --no-option --force
```

Run application in local web server and open in browser. Add `--ssl` if needed.

```
ng serve -o
ng serve -o --ssl
```

Build and distribute to /dist folder.

```
ng build --prod --aot
```
