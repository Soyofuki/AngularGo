# AngularGo
An Angular SPA website with samples and out of box common functions for easy leveraging.

# Quick Start

Install Node.js and NPM. Use Node version 16.20.2 at max.

Install Angular CLI.

```
npm install -g @angular/cli@15
```

If Python 2 is not installed, install the latest version (2.7.18 now) and set NPM config with the below command, adding "python=C:\Python27\python.exe" in a new line and save.

```
npm config edit
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
ng build --aot
```
