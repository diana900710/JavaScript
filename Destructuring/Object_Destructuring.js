//1.
var person = { name: "Kevin", email: "kevin@gmail.com" };
var { name, email } = person;
console.log(name, email);
//2.
var person = { name: "Kevin xi", phone: "0925-155222"};
var { name: fullname, phone: mobile } = person;
console.log(fullname, mobile);
//3.
var {name = "David", age = 35} = {name:"Tom", age:32};
console.log(name, age);
var {name = "David", age = 35} = {name:"Tom"};
console.log(name, age);
//4.
var {name:myname="Kevin xi", sex:gender,phone:mobie} = { name: "Kevin", sex: true, phone: "0925-155222"};
console.log(myname, gender, mobie);