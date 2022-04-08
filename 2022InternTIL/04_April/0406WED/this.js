// let person = {
//     fullname: '박정연',
//     age: 20,
//     printThis: function(){
//         console.log(this);
//         console.log("this === window: ",this === window);
//         console.log("this === person: ",this === person);
//     },
// };

// // person에 의해서 this가 호출 되었기 때문에 여기 this는 person이다. 
// //person.printThis();
// let printThis = person.printThis;
// printThis();

// function printThis(){
//     console.log(this);
// } 
// // 이렇게 하면 호출 한 놈이 없으니까 this는 window 전역객체가 된다. 
// // default this => this
// printThis();

// let person1 = {
//     name: '홍길동1',
//     printThis: printThis,
// };
// person1.printThis();

// let person2 = {
//     name: '홍길동2',
//     printThis: printThis,
// };
// person2.printThis();

// let person3 = {
//     name: '홍길동3',
//     printThis: printThis,
// };
// person3.printThis();

//window
let btn=document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
    console.log(this === btn);
});

//ES5에서 this 설정 할 수 있는 bind method 나왓다. 
// function printThis(){
//     console.log(this);
// }
// let person1 = {
//     name: '홍길동',
// };
// let printThis1 = printThis.bind(person1); // 애는 함수를 반환한다. 
// // bind로 this에 person1을 바인드 한다. 
// // bind는 단 한번만 사용할 수 있다.
// printThis1();

// let person = {
//     name:'정연',
//     age: 20,
//     hello: function(){
//         setTimeout(()=>{
//             console.log(this);
//         }, 1000);
//     },
// };
// person.hello();

// console.log(this);
// console.log(this===window);

let person = {
    name:'정연',
    age: 20,
    printThis: function(){
        console.log(this);
    },
};
person.printThis();