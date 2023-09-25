var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    var result=JSON.parse(request.response);
    for (var t in result)
    {
        console.log(result[t].name.common, result[t].population); 
        console.log(t,"-", result[t].region, "&", result[t].subregion,);
        //gets the data from server through API and results the country name, population, region, subregion details using for-in loop.
    }
}