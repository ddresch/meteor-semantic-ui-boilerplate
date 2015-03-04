Package.describe({
  name: 'ddh:semantic-ui-mobile-boilerplate',
  summary: 'Basic setup of a simple mobile layout and iron:router routings.',
  description: 'Semantic-UI mobile boilerplate.',
  version: '0.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'templating',
    'nooitaf:semantic-ui'
  ], 'client');

  api.use([    
    'iron:router'
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