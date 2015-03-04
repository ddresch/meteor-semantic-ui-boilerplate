Template.mobileLayout.rendered = function(){
  $('.ui.sidebar')
    .sidebar('setting', 'transition', 'scale down')
    .sidebar('attach events', '.menu .item')      
  ;
};

Template.mobileLayout.helpers({
  sidebarLinks: function(){
    var links = new Array();
    
    _.each(Router.routes, function(r){
      console.log(r);
      if( r.options.hasOwnProperty('label') &&
          r.options.hasOwnProperty('icon') ){
        links.push({
          routeName: r.name,
          label: r.options.label,
          icon: r.options.icon
        });
      }
    });

    return links;
  }
});