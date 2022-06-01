const addUID = <T extends {name:string}>(obj: T)=>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name:'jeongyeon', age: 23});
//let docTwo = addUID('hello');

console.log(docOne);

// with Interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name:'shaun'}
}

const docFour: Resource<string[]>  = {
    uid:2,
    resourceName: 'shoppingList',
    data: ['string', 'milk']
}

console.log(docThree, docFour);