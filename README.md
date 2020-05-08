# WhenIsGreat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.
This is going to be a knock-off website of "whenisgood.net" I want to add a few features that doodlepoll has such as a tiered acceptance system (Time is good -> can make time work, but is less preferable -> can't make it). Also, want to be able to import .cal files so that I can automagically show which spots the person already has blocked out to other things. Also, make it HTTPS because that is super easy and I don't know why whenisgood isn't doing it especially since they allow users to create accounts with passwords.

# File Structure
core contains things that are only imported / set up once like singleton services and header and footer components


# Helpful Info
Each page is its own module with its own components. The page modules are lazily loaded so they won't slow down the initial page load, but I enabled PreloadAllModules so they are loaded in the background while the usr is on the first page. This way, they can switch quickly between modules.

TO DO: enable selective preloading so that the 404 doesn't get preloaded. The odds of someone needing that while on the site is low. Only load it if they go to that page. The only reason they'd need it is if they're pasting a link, so they weren't already on the page for it to load anyways! (If that's how it works. Maybe allowing the preloading of 404 would make it cached? And if I don't then it won't be? shrug)

# Credits / Sources:
Code file structure from: https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
