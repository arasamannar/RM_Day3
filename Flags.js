var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    var result=JSON.parse(request.response);
    for (let t in result)
    {
        console.log(result[t].name.common, result[t].flags); 
        //gets the data from server through API and results the country name and its flag details using for-in loop.
    }
}