let person ={
    name: "Kevin",
    age: 35,
    height: 180,
    weight: 80
};

console.log(person.name);
console.log(person['age']);

let keys = Object.keys(person);
let values = Object.values(person);
console.log(keys, values);

keys.forEach(item =>{
    console.log(item, person[item]);
});

console.log(person);
console.log("The Object is " + person);
console.log("The Object is %o", person);
//編碼成Json文字格式
let jsonText = JSON.stringify(person);
console.log(jsonText);
console.log(typeof jsonText);
//還原
let p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);