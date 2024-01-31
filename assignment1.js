//Creating server paths using 3 arrays:
serverVerbs = ["GET","GET","GET","POST","GET","POST"]
serverPaths = ["/","/about","/contact","/login","/panel","/logout"]
serverResponses	= ["Welcome to WEB700 Assignment 1","This assignment was prepared by Yen","Yen: tnytran@myseneca.ca","User Logged In","Main Panel","Logout Complete"]


function getRandomInt(max) {
    'This function is for generating a random integer value between 0 and a specified maximum'
    return Math.floor(Math.random() * max);
}


function httpRequest(httpVerb, path) {
    'This function is for generating the serverResponses based on a given serverVerbs and a given serverPaths'
    successCode = "200";
    errorCode = "404";
    for (var i = 0; i < 6; i++) {
        if (serverVerbs[i] == httpVerb && serverPaths[i] == path) {
            return `${successCode}: ${serverResponses[i]}`;
        }
    }
    return `${errorCode}: Unable to process ${httpVerb} request for ${path}`;
}


function automateTests() {
    'This function is for automating the arguments passed in to the httpRequest() function and set it run every one second'
    testVerbs = ["GET", "POST"];
    testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    function randomRequest() {
        randVerb = testVerbs[getRandomInt(2)];
        randPath = testPaths[getRandomInt(8)];
        console.log(httpRequest(randVerb, randPath));
    }
    setInterval(randomRequest, 1000);
}


automateTests(); //Call automateTests() function 