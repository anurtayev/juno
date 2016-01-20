Package.describe({
  name: 'anurtayev:ts-etnry',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react');
  
  api.use('aldeed:autoform@5.0.0');
  
  api.addFiles('ts-etnry.jsx');
  api.export('Entry', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('anurtayev:ts-etnry');
  api.addFiles('ts-etnry-tests.js');
});
