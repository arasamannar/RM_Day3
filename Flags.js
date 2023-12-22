// get data from server via API
// assign in a new varaible
let request = new XMLHttpRequest();

//specify the API
request.open('GET','https://restcountries.com/v3.1/all');

//sending request to server
request.send();

//after successfull request create a function to do a specific task and console the countries flags
request.onload = function () {
    // here we will be convert the data JSON to Object and assign in a new variable
    let restcountries = JSON.parse(request.response);
    // console.log(flags)
    
    // now we use loop for console the countries flags

    for(let flag in restcountries) {
        console.log(restcountries[flag].flags);
    }
}