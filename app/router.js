var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('posts', function() {
    this.route('page', {path: '/page/:page'});
  });
});

export default Router;
