NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/feed_show"],

  events: {
    'click button': 'refreshFeed'
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      feed: this.model
    });

    this.$el.html(content);

    return this;
  },

  refreshFeed: function () {
    this.model.fetch();
  }
});
