# ng-simple-groups

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Project Info

* AngularJS 1.x 
* Auth using [auth0](http://www.auth0.com)
* User storage using [Firebase](https://firebase.google.com/) (with [AngularFire](https://github.com/firebase/angularFire))
* Required [API wrapper](http://www.github.com/IsmiKin/ex-simplegroups) (problems with testing basic auth client)

## Build & development

## Install & Setup

### Dependencies
```
npm install
bower install
```

### Env variables
```
// auth0 
export authProviderDomain = ####
export authProviderClientID = ####

// Check API Wrapper link above
export apiRoot = #### 

// Firebase
export firebaseProject = ####
```

## Run

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
