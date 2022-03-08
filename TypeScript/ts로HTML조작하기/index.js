// document.getElementById() 이거 typescript에서 쓰는법
// 내가 id를 잘못 적으면 tit에 element가 안들어가고 null이 들어감. 
//그래서 tit가 null일 수도 있는거임
var tit = document.querySelector('#title');
// tit?.innerHTML = '반가워요';
//타입을 하나로 확정 하는것 narrowing
// narrowing 하는 5가지 방법
//01. if (제목이 null 아니면){} 이런식으로
// select로 찾은것은 null 
if (tit != null) {
    tit.innerHTML = '반가워요';
}
//02. instanceof 연산자 사용하기 
//이 방법을 가장 많이 쓰게 될 것이다. 
// 오브젝트 명 instanceof 클래스 : 이 object가 이 클래스의 자식이냐 물어볼 수 있음. 
if (tit instanceof Element) {
    tit.innerHTML = '반가워요';
}
//03. as 사용하기 : 타입 Assertion : 잘못 찾아가도 무조건 타입이 Element로 확정이다. 
//비상시에 쓰거나 100% 확신 할 때만 써라
var tit1 = document.querySelector('#title');
tit1.innerHTML = '비가 오네요';
//04. 오브젝트에 붙이는 ?. (optional chaining)
//그냥 . 이랑 같은 효과인데  tit1에 innerHTML이 있으면 출력 해주소 없으면 undefined 반환한다. 
if ((tit1 === null || tit1 === void 0 ? void 0 : tit1.innerHTML) != undefined) {
    tit1.innerHTML = '안녕';
}
// 05. tsconfig.json 에서 nullcheck : false로 바꾸어주기
// a tag narrowing 예제 
// a 태그에 필요한 정확한 타입 명이 있다. => HTMLAnchor
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
// ts에는 Element 타입에 -> (HTMLAnchorElement 타입, HTMLHeadingElement타입, HTMLButtonElement 타입)
// Elemet안에는 별게 없다. 
// HTMLAnchorElement (href, style, class)
//ts에서 eventListener 부착하는 법 
var button = document.querySelector('#button');
// button에 add~ 가 있다면 실행, 없다면 undefined. narrowing된것. 
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log('안녕');
});
