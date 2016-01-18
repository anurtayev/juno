Package.describe({
  name: 'anurtayev:ts-accounting',
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
  
  api.export('Accounting', 'client');
  api.export('AccountingToolbar', 'client');

  api.addFiles('ts-accounting.jsx');
  api.addFiles('ts-accounting-toolbar.jsx');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('anurtayev:ts-accounting');
  api.addFiles('ts-accounting-tests.js');
});
