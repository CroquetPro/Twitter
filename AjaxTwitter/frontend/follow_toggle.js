function FollowToggle (){
  this.$el = $('.follow-toggle');
  this.$userId = this.$el.find("data-user-id");
  this.$initialFollowState = this.$el.find("data-initial-follow-state");
}

module.exports = FollowToggle;
