//global variables
var apiKey = "56130ae4b4e1403ca2bea94193ae6e14";
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// url site
var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "apiKey";
var articleCounter = 0;
//functions
function runQuery(numArticles,queryURL) {
	//ajax funtions
	$.ajax({url: queryURL, method: "GET"})
		.done(function(NYTData){
			console.log(NYTData);
		})
}
//methods or functions callback? (main)
$('#searchBtn'),on('click', function(){
	// check auth key?
	runQuery(10, "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "apiKey")
})

// Retrieve user input and convert to variables
//use the variable to run AJAX call to the NYT
// breakdown the NYT object into useable fields
//dynamically generate the content in html 
//buggs or errors??