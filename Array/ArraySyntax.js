let Computer = ['CPU', 'DRAM', 'SSD', 'Mouse'];
console.log(Computer);
//type
console.log(typeof Computer);
console.log(typeof null);
//bool
console.log(Computer instanceof Array);
console.log(Array.isArray(Computer));

AddThead(Computer);
AddThead("kevin");
function AddThead(titleArray){
    if(Array.isArray(Computer)){
        return;
    }
}

let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
for(var i=0; i < Cars.length; i++){
    console.log(Cars[i]);
}
Cars.forEach(function(item, index){
    //console.log(index, item);
    console.log(`${index}, ${item}`);
});//也可寫成Arrow Function
Cars.forEach((item, index)=>{
    console.log(`${index}, ${item}`);
});//參數名稱也可改成簡潔明瞭的名稱
Cars.forEach((car, indx)=>{
    console.log(`${indx}, ${car}`);
});

let friends = [];
let person1 = {
    id: 1,
    name: "Kevin",
    email: "Kevin@gmail.com"
};
let person2 = {
    id: 2,
    name: "Marry",
    email: "Marry@gmail.com"
};
friends.push(person1);
friends.push(person2);
friends.push(person1, person2);
let person3 = {
    id: 3,
    name: "John",
    email: "John@gmail.com"
};
friends.unshift(person3); //插入第一筆
friends.pop(); //刪除末端一筆
console.log(friends);