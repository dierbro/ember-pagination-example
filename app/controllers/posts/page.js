var PostsPageController = Ember.ArrayController.extend({
  paginationInfo: function(){
    return this.store.metadataFor("post");
  }.property("content")
});

export default PostsPageController;
