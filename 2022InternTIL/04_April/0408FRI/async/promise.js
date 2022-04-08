'use strict';

// Promise is a JavaScript object for asynchronous operation


// 1. Producer
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work. 
    // 파일 읽어오거나.. 데이터 받아오거나 .. 하는 동안 다음 라인에 코드가 실행 안됨
    // network, read files은 비동기적으로 하는게 좋다. 

    //promise보면 executer를 전달 해 줘야한다. 
    console.log('doing something...');
    setTimeout(()=>{
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally 
// 잘 실행되었다면, 우리가 원하는 callback 호출 
// resolve로 줬으니까 ellie 라는 value로 들어옴
// Promise 다 끝난 결과가 value 파라미터로 들어온다는걸 알 수 있다. 
promise
    .then((value)=>{
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    })


// 3. Promise chaning
const fetchNumber = new Promise((resole,reject)=>{
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num-1), 1000);
    });
})
.then(num => console.log(num));