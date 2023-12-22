// get the details from the server using API
// get the API data and assign in a new variable
let request = new XMLHttpRequest();

//now to sepcify API which can be give the data 

request.open('GET','https://restcountries.com/v3.1/all');

// send a request to the server was a sucessfull data

request.send();

//after successfull request we want create function to do a secific task and  console the countries details
// here i will use a arrow function

request.onload = () => {
    // here we convert the data format JSON to OBJECT and assing in a new variable
    let countriesDetails = JSON.parse(request.response);
    
    // console.log(countriesDetails);

    // now console the countires details using loops
    for(let details in countriesDetails) {
       console.log(countriesDetails[details].name);
       console.log(countriesDetails[details].region);
       console.log(countriesDetails[details].subregion);
       console.log(countriesDetails[details].population);
    }
}