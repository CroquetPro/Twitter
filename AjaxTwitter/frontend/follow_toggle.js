function FollowToggle (button){
  this.$el = $(button);
  this.$userId = this.$el.data("user-id");
  this.$initialFollowState = this.$el.data("initial-follow-state");
  this.$followState = this.$initialFollowState;
  this.$el.on('click', this.handleClick.bind(this));
  this.$el.html(this.render());
}

$.extend(FollowToggle.prototype = {
  render: function() {
    if(this.$followState === 'followed') {
      return "Unfollow!";
    }
    else if(this.$followState === 'unfollowed') {
      return "Follow!";
    }
  },
  handleClick: function(e) {
    e.preventDefault();
    var verb, newState;

    if(this.$followState === 'followed') {
      verb = "DELETE";
      newState = "unfollowed";
    }
    else if(this.$followState === 'unfollowed') {
      verb = "POST";
      newState = "followed";
    }

    $.ajax({
      url: '/users/' + this.$userId + '/follow',
      type: verb,
      dataType: "json",
      success: function(){
        this.$followState = newState;
        this.$el.html(this.render());
        console.log("Follow status updated.");
      }.bind(this),
      error: function(){
        console.log("I can't even.");
      }
    });
  }
});

module.exports = FollowToggle;
