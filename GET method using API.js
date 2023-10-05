var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    var result=JSON.parse(request.response);
    for (let t in result)
    {
        console.log(result[t].name.common, result[t].population); 
        console.log(t,"-", result[t].region, "&", result[t].subregion,);
        //gets the data from server through API and results the country name, population, region, subregion details using for-in loop.
    }
}
/*output: as data is huge reducing the data to the page limit
French Polynesia
280904
0
-
Oceania
&
Polynesia
Saint Martin
38659
1
-
Americas
&
Caribbean
Venezuela
28435943
2
-
Americas
&
South America
Réunion
840974
*/