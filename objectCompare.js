let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
}

//output for the above code is using stringify method : The objects are not equal.