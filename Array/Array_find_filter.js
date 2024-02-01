let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
//找Benz
let car = Cars.find(c => c=='Benz');
console.log(car);
//找Audi的位置
let index = Cars.indexOf('Audi');
console.log(index);
//找Benz的位置
let idx = Cars.findIndex(c => c=='Benz');
console.log(idx);

let Prices = [200, 320, 250, 120];
//找p>300的位置
console.log(Prices.findIndex(p => p>300));
//找出p>250的值
console.log(Prices.filter(p => p>250));
//找出Prices>250的所有值
Prices.filter(function(item, idex){
    if(item >= 250){
        console.log(`${Cars[idex]} 's price is ${item}, 它價格大於250`);
    }
});
//找出Prices>250的值，並加入陣列前面
let result = Prices.filter(function(item, idex){
    if(item >= 250){
        console.log(`${Cars[idex]} 's price is ${item}, 它價格大於250`);
        return true;
    }
});
console.log(result);

console.log("=-".repeat(40));

let resultArray = [];
Prices.forEach(function(price, idex){
    if(price >= 250){
        console.log(`${Cars[idex]} 's price is ${price}, 它價格大於250`);
        resultArray.push(price);
    }
});
console.log(resultArray);