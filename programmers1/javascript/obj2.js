/*
Object - 실습(2)

문제 설명
book의 title을 이용해서 코드 2번째 줄이 책의 제목을 출력하도록 만들어 보세요.

객체의 속성에 접근하는 방법은 두 가지가 있습니다.

객체이름.속성이름
객체이름["속성이름"] 아래의 예를 참고하여 문제를 해결해 보세요.
var man = { name : "홍길동", age : 20};

console.log(man.name);       // 홍길동이 출력됩니다.
console.log(man["name"]);    // 홍길동이 출력됩니다.

*/

var book = {"title":"어린왕자"};
console.log("제목:", book.title);
console.log("제목:", book[title]);