let username : string = 'kim';

let nameArray : string[] = ['kim', 'park'];

let nameObject :  {name?:'kim'} = {'name':'kim'}
// ? : name이라는 속성이 들어 올 수도 있고 안 들어올 수도 있어요 

let newname : string | number = 'kim';
//다양한 타입이 들어올 수 있는 Union type

type MyType = string| number;
//타입은 변수에 담아쓸 수 있음
//타입 이름은 대문자로 많이 지정함
let myname : MyType = 'jeongyeon';

function func(x : number) :number{
    return x*2;
}
// 어떤 타입이 return 될지 func(x:number):number 로 표시 

type Member = [number, boolean];
let john : Member = [1, true];
//Array 에 쓸 수 있는 tuple 타입

type newMember = {
    name: string
}
let johny: newMember = {name : 'kim'};
//object 에 타입 지정해야 할 속성이 너무 많으면

type SecondMember = {
    [key:string]:string,
}
// 글자로 된 모든 object 속성의 타입은 string
let jeongyeon : SecondMember = {name:'jeongyeon', age: '25'};

//클래스 문법
class User{
    names : string;
    constructor(names: string){
        this.names = names;
    }
}