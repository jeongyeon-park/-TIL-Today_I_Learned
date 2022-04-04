class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// Let's Create an instance
let myCustomer = new Customer("Martin", "Kim");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);