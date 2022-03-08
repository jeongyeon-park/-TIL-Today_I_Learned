var username = 'kim';
var nameArray = ['kim', 'park'];
var nameObject = { 'name': 'kim' };
// ? : name이라는 속성이 들어 올 수도 있고 안 들어올 수도 있어요 
var newname = 'kim';
//타입은 변수에 담아쓸 수 있음
//타입 이름은 대문자로 많이 지정함
var myname = 'jeongyeon';
function func(x) {
    return x * 2;
}
var john = [1, true];
var johny = { name: 'kim' };
// 글자로 된 모든 object 속성의 타입은 string
var jeongyeon = { name: 'jeongyeon', age: '25' };
//클래스 문법
var User = /** @class */ (function () {
    function User(names) {
        this.names = names;
    }
    return User;
}());
