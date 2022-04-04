var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Let's Create an instance
var myCustomer = new Customer("Martin", "Kim");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
