/*
### String 다루기 - 실습(1)

### **문제 설명**

함수 solution을 수정해서 인자 str의 첫번째 글자를 return하는 함수를 만들어 보세요.

---

문자열에서 특정 위치의 문자를 알아내기 위해서는 두 가지 방법을 이용할 수 있습니다.

- `.charAt` 함수 사용하기
- 대괄호([]) 사용하기

예를 들어,

```jsx
var str = "abcdefg";

var a = str.charAt(0);      // a 와 b의 결과값은
var b = str[0];             // 'a'입니다.

var c = str.charAt(str.length-1);   // c와 d의 결과값은
var d = str[str.length-1];          // 'g'입니다.
```

*/
function solution(str){
    return str[0];
}