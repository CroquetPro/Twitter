function FollowToggle (button){
  this.$el = $(button);
  this.$userId = this.$el.data("user-id");
  this.$initialFollowState = this.$el.data("initial-follow-state");
  this.$followState = this.$initialFollowState;
  this.$el.on('click', this.handleClick.bind(this));
  this.$el.html(this.render());
  // this.$el.prop("disabled", false);
}

$.extend(FollowToggle.prototype = {
  render: function() {
    if(this.$followState === 'followed') {
      return "Unfollow!";
    }
    else if(this.$followState === 'unfollowed') {
      return "Follow!";
    }
    else if (this.$followState === 'unfollowing' ||
            this.$followState === 'following'){
      this.$el.prop("disabled", true);
    }
  },
  handleClick: function(e) {
    e.preventDefault();
    var verb, newState;

    if(this.$followState === 'followed') {
      verb = "DELETE";
      newState = "unfollowed";
      this.$followState = "unfollowing";
    }
    else if(this.$followState === 'unfollowed') {
      verb = "POST";
      newState = "followed";
      this.$followState = "following";
    }
    
    this.render();

    $.ajax({
      url: '/users/' + this.$userId + '/follow',
      type: verb,
      dataType: "json",
      success: function(){
        this.$followState = newState;
        this.$el.prop("disabled", false);
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
