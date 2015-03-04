# meteor-semantic-ui-boilerplate

This is a pretty simple setup to get started with semantic-ui as a GUI framework. The layout uses a sidebar on the left and a empty top bar.

## Install

  meteor add ddh:semantic-ui-mobile-boilerplate

## How to use

If you want to setup your sidebar the packages introduces two new parameters `label` and `icon` you can use within your iron:router options object.

  Router.route('/', {
    template: 'startpage',
    label: 'Home', 
    icon: 'home'
  });

  Router.route('search', {
    label: 'Search', 
    icon: 'search'
  });

