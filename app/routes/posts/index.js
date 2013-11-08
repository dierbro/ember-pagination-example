var PostsIndexRoute = Ember.Route.extend({
  beforeModel: function(){
    this.transitionTo('posts.page', 1);
  }
});

export default PostsIndexRoute;

