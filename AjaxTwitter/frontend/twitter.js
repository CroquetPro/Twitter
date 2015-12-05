window.FollowToggle = require ("./follow_toggle.js");

$(document).ready( function() {
  var buttons = document.querySelectorAll('button.follow-toggle');

  for(var i = 0; i < buttons.length; i++) {
    new window.FollowToggle(buttons[i]);
  }
});
