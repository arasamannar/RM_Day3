let ob1 = {
    name: "person1", age : 5
};
let ob2 = {
    age : 5, name: "person1"
};
console.log(ob1 === ob2);
console.log(JSON.stringify(ob1) === JSON.stringify(ob2));
// console.log(Object.toJSON(ob1) == Object.toJSON(ob2));
// console.log(_.isEqual(ob1, ob2));
function areEqualJSON(obj1,obj2)
{
    const jsonStr1 = JSON.stringify(obj1);
    const jsonStr2 = JSON.stringify(obj2);
     if (jsonStr1 === jsonStr2){
     return true;}
     else{
         return false;
     }
}
const obj1={name:"Person1",age:5};
const obj2={age:5,name:"Person1"};
 if(areEqualJSON(obj1,obj2))
 {
     console.log("The JSON objects are equal"); 
     
 }else
 {
    console.log("The JSON objects are  not equal"); 
 }