# TypeScriptCrash

## tsc , node 명령
웹 브라우저는 ts를 읽을 수 없다. 

code compile은 tsc 이용해서 한다. 

tsc sample-types.ts 하면 js 파일이 생긴다

js파일은 ts파일을 컴파일 할 때마다 바뀌어서 js 파일을 수정해선 안됨

node sample-types.js 하면 js파일이 실행된다. 

웹 브라우저가 ts를 읽을 수 없어 이를 js로 변환 해 주는 것을 transpiling 이라 부른다.

( Translating + Compiling )

## Type: any


## Template Strings 
```typescript
let firstName : string = "Anup";
let lastName : string = 'Kumar';

console.log("Hi " + firstName + " " + lastName);

console.log(`Hi ${firstName} ${lastName}`);
```

많은 concatenation 있을 때에는 `Hi ${FirstName} ${lastName}` 이렇게 쓰는게 더 편하겠죠 ~~


# Scope 이란?
scope 은 코드 영역에 있는 변수 또는 리소스의 가시성 또는 접근성을 결정한다. 

## Global Scope
js 에는 단 하나의 Global Scope이 있다. 
모든 functions 바깥 영역을 Global Scope이라고 부른다. 
global scope 에서 정의 된 variables는 어느 scope에서나 접근 가능하다 .

## Local Scope
함수 안에서 정의 된 variables는 Local 이 된다. 모든 함수는 고유의 scope을 가지고 있다. 

같은 variable 명이어도 다른 함수에서 쓰인다면 사용 가능하다. 

```typescript
//global scope
function foo1(){
    //local scope 1
    function foo2(){
        //local scope 2
    }
}

//global scope
function foo3(){
    //local scope 3
}

//global scope
```

Local Scope은 또 function scope 와 block scope로 나뉘어진다.

## Function Scope
함수에서 variable을 선언 하는 언제든 variable은 오직 함수 안에서만 보여진다.

함수의 바깥에서 그 variable에 접근할 수 없다. 

var은 variable은 function-scope에서만 접근 할 수 있도록 정의 해 주는 키워드다. 

```typescript
function foo(){
    var fruit ='apple';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: apple
console.log(fruit);       //error: fruit is not defined 
```

## Block Scope
block scope은 if, switch 혹은 for, while loop의 영역이다. 

일반적으로 말 하면, {  } 이 즉 curly brackets가 보이는 모든 곳이다. 
이것은 block 이다. 
const 나 let 키워드는 개발자가 variables을 block scope에서 선언 할 수 있게 해 준다. 

이는 variables가 대응하는 블록 내에만 존재함을 의미한다. 

## Lexical Scope
Lexical Scope은 부모의 scope의 variables 에 접근 할 수 있는 자식 scope을 말 한다. 

```typescript
function foo1(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo2(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo2();
}

foo1();
//result:
//apple
//banana
//strawberry
```

자식 함수는 부모의 실행 컨텍스트에 사전적으로 결합 된다. 

# var, let, const 

| |var|let|const|
|-------|---|---|---|
|reassigned|O|O|X|
|Scope|Function Scope|Block Scope|Block Scope|
|Reference before declaration|O|X|X|

## Const 
const 는 variable을 재할당 하고싶지 않을 때 사용된다. 이것은 한번 선언될 때 고정적이다. 

## let
 let 은 block scope 이다. 이건 오직 고유의 scope에서만 존재 한다는 뜻이다. 
 ```typescript
 let foo='outside';
if(true){
    let foo = 'inside'
    console.log(foo);            //print inside

}
console.log(foo);                //print outside
 ```
이 경우 결과는 outside가 나오게 된다 !

일반적으로 tsc는 계속 js파일을 생성한다. 
이걸 방지하기 위해 special dompiler flag 사용 해 보자 

# For Loop - Array of numbers
```typescript
let reviews: number[] = [5,5,4.5,1,3];

for (let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
}
```
# Simplified For Loop
```typescript
let sportsOne: string[] = ["Golf","Cricket", "Tennis","Swimming"];
for (let tempSport of sportsOne){
    console.log(tempSport);
}
```
# Growable Arrays 
타입 스크립트에서 array는 항상 growable / dynamic 하다.


# Class
## properties 
Properties는 기본적으로 public 으로 설정 돼 있다. 

## Access Modifiers
|Modifier|Definition|
|---|---|
|public|Property is accessible to all classes (default modifier)|
|protected|Property is only accessible in current class and subclasses|
|private|Property is only accessible in current class|

- tsc --noEmitOnError Customer.ts 하면 compliation error 발생 시 .js 파일을 생성하지 않는다. 

--noEmitOnError 이런게 compiler flag 다. 

이런거 하나하나 다 적어주려면 .. 너무 힘들다. 
그래서 tsconfig.json 에서 이런걸 설정 해 주는거다 .

## tsconfig.json
tsconfig.json 파일은 compiler 옵션과 project setting 을 정의한다. 

```typescript
{
    "compilerOptions":{
        "noEmitOnError": true,
        "target": "es5"
    }
}
```

## Parameter Properties

parameter properties를 설정 해주는 short cut 이 있다. 
properties를 정의하고 자동으로 할당한다. 

## Modules 
타입스크립트는 모듈 개념을 제공한다. 
모듈은 class, function, variable 등을 export 할 수 있다. 

```typescript
export class Customer {}
```

해 주면 

![image](https://user-images.githubusercontent.com/64348346/159767590-9bf62ce1-89e0-4ecd-b05d-46d735bb1aba.png)

```typescript
export class Customer {
    // parameter properties shortcut
    constructor( private _firstName: string, private _lastName: string){   
    }
    public get firstName(): string{
        return this._firstName;
    }
    public set firstName(value : string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}
```
export 해 주면 다른 파일에서 import 를 할 수 있다. 

```typescript
import { Customer } from './Customer';

// Let's Create an instance
let myCustomer = new Customer("Martin", "Kim");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
```

class import 하니까 { Customer } 해 주기 

## Inheritance 
typescript 는 상속을 제공하며 
공통 프로퍼티와 method를 superclass에서 정의하고 

subclass 는 superclass를 상속받아 프로퍼티와 method를 추가할 수 있다.

abstract class와 overriding 도 지원한다. 

**타입스크립트에서는 한 클래스가 하나의 클래스만 상속 받을 수 있다.**
**interface는 다중으로 구현할 수 있다.**

![image](https://user-images.githubusercontent.com/64348346/159771105-33d52fd3-7c2a-4ba2-a2c6-699a6a6b0db7.png)


## Super 메소드
super() 메소드는 부모 클래스의 생성자를 호출할 때 사용된다. 

자식 클래스의 인스턴스를 생성하면 해당 인스턴스에는 자식 클래스의 고유 멤버뿐만 아니라 부모 클래스의 모든 멤버까지도 포함되어있다. 


## Abstract Classes