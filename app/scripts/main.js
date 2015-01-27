
// _.each(repo, function (p){
// 	console.log(p);
// });

// var shane = user, orgs, repo, starred;
// 	console.log(user.url);
// 	console.log(user.name);
// 	console.log(user.login);
// 	console.log(user.location);
// 	console.log(user.email);
// 	console.log("Joined on " + user.created_at);
// 	console.log(user.followers);
// 	console.log(user.public_gists);
// 	console.log(user.following);



// =====USER======

// Grab the template string.
var templateString = $('#item-template').text();

// Turn it into a template function.
var renderTemplate = _.template(templateString);

// Pass in an object. Return value is a string
// with the bee stings replaced with object's properties
var freshHTML = renderTemplate({name: 'Beer Mug'});

// Inject the fresh html into the page.
$('.some-container').append(freshHTML);