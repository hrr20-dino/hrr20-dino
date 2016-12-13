# hrr20-dino

## Getting started

### Running in development mode:

* Navigate to the root of the project.
* Run `npm install`.
* Run `gulp`.

In this mode, nodemon runs the server while browsersync runs the browser.  Changes to client-side files including stylesheets triggers both a rebuild and a refresh of the browser.  Changes to server side files triggers a nodemon refresh. 

### Building for production:

* `gulp production` *or* run `gulp` while `NODE_ENV` is set to `production`.
* `npm start` to launch the server.

Production builds include minified app and vendor JavaScript along with minified CSS.  Reference names to these dependencies change automatically in index.html.

### Testing

* run `gulp test`

## Architecture overview

See [the Dino project wiki](https://github.com/hrr20-dino/hrr20-dino/wiki) for more detailed information.

* React SPA
* Material UI
* Sass stylesheets
* Flux state manager
* Postgres database
* Express server

## Current feature set

## Opportunities for extension