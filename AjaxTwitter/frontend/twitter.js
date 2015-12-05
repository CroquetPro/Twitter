window.FollowToggle = require ("./follow_toggle.js");
window.UsersSearch = require ("./users_search.js");

$(document).ready( function() {
  var buttons = document.querySelectorAll('button.follow-toggle');

  for(var i = 0; i < buttons.length; i++) {
    new window.FollowToggle(buttons[i]);
  }

  var searchParties = document.querySelectorAll('nav.users-search');

  for(var i = 0; i < searchParties.length; i++) {
    new window.UsersSearch(searchParties[i]);
  }

});
