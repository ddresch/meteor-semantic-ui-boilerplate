Package.describe({
  name: 'ddh:semantic-ui-mobile-boilerplate',
  summary: 'Basic setup of a simple mobile layout and iron:router routings.',
  description: 'Semantic-UI mobile boilerplate.',
  version: '0.1.0',
  git: 'https://github.com/ddresch/meteor-semantic-ui-boilerplate'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use([
    'templating',
    'nooitaf:semantic-ui@1.10.4'
  ], 'client');

  api.use([    
    'iron:router@1.0.5'
  ], ['client','server']);

  api.imply([
    'iron:router',
    'nooitaf:semantic-ui'
  ]);

  api.add_files([    
    'client/stylesheets/mobile.css',
    'client/views/mobile_layout.html',
    'client/views/mobile_layout.js',
    'lib/router.js'
  ], 'client');
});