Package.describe({
  name: 'alt:react',
  version: '1.0.0',
  summary: 'Exports React and ReactDOM from either Meteor React or NPM React',
  git: '',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use('ecmascript')
  api.use('react@0.14.3', {weak: true})
  api.use('alt:react-npm@1.0.0', {weak: true})
  api.imply('react-meteor-data@0.1.4')
  api.addFiles('react.js')
  api.export(['React', 'ReactDOM'])
})

