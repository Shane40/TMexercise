
// _.each(repo, function (p){
// 	console.log(p);
// });

// var shane = user, orgs, repo, starred;
// 	console.log(user.name);
// 	console.log(user.login);
// 	console.log(user.location);
// 	console.log(user.email);
// 	console.log("Joined on " + user.created_at);
// 	console.log(user.followers);
// 	console.log(user.public_gists);
// 	console.log(user.following);


var user = "https://api.github.com/users/Shane40";
var orgs = "https://api.github.com/orgs/tiy-atl-js-q1-2015";
var repo = "https://api.github.com/users/Shane40/repos";
var starred = "https://api.github.com/users/h5bp";


// =====USER======

// Grab the template.
var usertemplate = $('#user-template').html();

// Turn it into a template function.
var userrendered = _.template(usertemplate);

// Pass in an object. Return value is a string
// with the bee stings replaced with object's properties
 $.getJSON(user).done (function (i){
 $('.some-user').append(userrendered(i));
 });

// Inject the fresh html into the page.
// $('.some-container').append(freshHTML);


// =======END OF USER=========

// ======REPO =======

// Grab the template.
var repotemplate = $('#repo-template').html();

// Turn it into a template function.
var reporendered = _.template(repotemplate);

// Pass in an object. Return value is a string
// with the bee stings replaced with object's properties
 $.getJSON(repo).done (function (i){
 	console.log(i);
 	i.forEach(function (x){
 $('.some-repo').append(reporendered(x));
	});
 });



// ======END OF REPO =======





























