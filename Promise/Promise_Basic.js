const promise1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        // resolve('JS課程快上完了!');
        reject('JS還有好多bugs');
    },3000);
});

console.log(promise1);
promise1
    .then(result=>{
        console.log(result);
    })
    .catch(ex=>{
        console.log("Err: " + ex);
    })
    .finally(()=>{
        console.log("Finally完成!");
        console.log(promise1);
    });
console.log(promise1);