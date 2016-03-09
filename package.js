Package.describe({
  name: 'alt:react',
  version: '1.0.2',
  summary: 'Exports React and ReactDOM from either Meteor React or NPM React',
  git: 'https://github.com/Meteor-Alt/react-packages',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use('ecmascript')
  api.use('react@0.14.3', {weak: true})
  api.imply('react-meteor-data@0.1.4')
  api.imply('jsx@0.2.3')
  api.addFiles('react.js')
  api.export(['React', 'ReactDOM'])
})

