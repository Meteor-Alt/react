# react

Dependency for Meteor packages that need React.

Will connect to either the Meteor react-runtime package or to an app installed NPM React module.

## Why

If you package has a hard requirement on the meteor react packages, a 1.3 app using the NPM React module will have multiple copies of React and cause conflicts.

This package allows your package to use whichever version of React is setup by the application.

## Usage

Inside your packages package.js file replace react or react-runtime

```
api.use('react@0.14.3')
```

with

```
api.use('alt:react@1.0.2')
```

