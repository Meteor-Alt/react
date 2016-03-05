Package.describe({
  name: 'alt:react-npm',
  version: '1.0.0',
  summary: 'Exports React and ReactDOM from npm React',
  git: '',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')
  api.use(['ecmascript', 'modules'])
  api.mainModule('react-npm.js')
  api.export(['React', 'ReactDOM'])
})

