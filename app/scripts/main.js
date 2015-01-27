// function getproduct() {
// var productboxHTML = "";
// etsy_items.results.forEach ( function (listing){
// 	console.log(listing.price);
// 	console.log(listing.title);
// 	console.log(listing.Images[0].url_fullxfull);
// 	console.log(listing.Shop.shop_name);

// productboxHTML +=
// '<div class="productbox">' +
// 	'<img src= "'+listing.Images[0].url_fullxfull+'"/> ' +
// 	'<h3>'+ listing.title+' </h3>' + 
// 	'<span> <h4>'+ listing.Shop.shop_name+' </h4> </span>' +
// 	'<span> <h5>'+ listing.price+' '+ listing.currency_code+'</h5> </span>' +
// '</div>'

// console.log (productboxHTML);

// //give the function a name that represents a concept.
// });


// return productboxHTML;
// };

// $(document).ready(function(){
// 	$(".rightbox").append(getproduct());

// });
//=======USER======

// =====USER======


function mainbiobox (){
var biobox = 
	console.log(user.url);
	console.log(user.name);
	console.log(user.login);
	console.log(user.location);
	console.log(user.email);
	console.log("Joined on " + user.created_at);
	console.log(user.followers);
	console.log(user.public_gists);
	console.log(user.following);

	biobox +=
	'<div class="shanebox">' +
	'<img scr="'+user.url+'"/> ' +
	'<li>' + user.name+' </li>' +
	'<li>' + user.login+' </li>' +
	'<li>' + user.location+' </li>' +
	'<li>' + user.email+' </li>' +
	'<li>' + user.created_at+' </li>' +
	'<h4>' + user.followers+' </h4>' +
	'<h4>' + user.public_gists+' </h4>' +
	'<h4>' + user.following+' </h4>' +
	'</div>'
});
	console.log(mainbiobox);


// '<div class="productbox">' +
// 	'<img src= "'+listing.Images[0].url_fullxfull+'"/> ' +
// 	'<h3>'+ listing.title+' </h3>' + 
// 	'<span> <h4>'+ listing.Shop.shop_name+' </h4> </span>' +
// 	'<span> <h5>'+ listing.price+' '+ listing.currency_code+'</h5> </span>' +
// '</div>'

// var shanemug = $('.hero-unit img');
// console.log(shanemug);



// var templateFunct = _.template(templateString)

// $(".leftbox").append(xxxxx());

// });






// =====REPO======
// repo.forEach (function (identity){
// 	console.log(identity.name);
// });

// repo.forEach(function (weblist){
// 	console.log(weblist.url);
// 	console.log(weblist.owner.url)

// });
