'use strict';

// JavaScript is synchronous. 자바스크립트는 동기적이다. 
// Execute the code block by orger after hoisting.
// 호이스팅 된 이후 부터 코드가 하나하나씩 동기적으로 실행된다. 
// hoisting: var, function declaration 선언이 제일 위로 올라가는 것. 
// hoisting이후부터 코드가 나타나는 순서대로 실행된다. 

// 콜백함수란? 우리가 전달 해 주는 함수를 나중에 불러줘 
//코드를 제일 위에서 부터 밑으로 실행한다. 
// 브라우저 API는 무조건 브라우저에게 먼저 요청을 보낸다. 
console.log('1');
setTimeout(()=> console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user)=>{
        userStorage.getRoles(
            user, 
            (userWithRole)=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    (error)=>{
        console.log(error);
});