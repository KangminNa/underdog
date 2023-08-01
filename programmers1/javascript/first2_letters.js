/*
### String 다루기 - 실습(2)

### **문제 설명**

함수 solution을 수정해서 인자 str의 첫2글자를 문자열로 return하는 함수를 만들어 보세요.

예를 들어, str이 "hello"라면 substring또는 substr 메소드를 써서 "he"를 return하면 됩니다.

---

부분 문자열을 구해봅시다.

문자열의 연속된 일부분을 구하는 함수는 `.substring`과 `.substr`이 있습니다.

- `.substring(pos1, pos2)` : pos1 에서 pos2까지의 부분 문자열 반환
    - pos2 생략시 pos1에서부터 마지막 까지의 문자열 반환
- `.substr(pos, length)` : pos에서 length길이 만큼의 부분 문자열 반환
    - length 생략시, pos에서 마지막까지의 문자열 반환
    - pos 가 음수인 경우, str.length - pos 로 동작

예를 들어,

```jsx
var str = "abcdefg";

var a = str.substring(2, 5);   // cde
var b = str.substr(2, 5);      // cdefg
```
*/

function solution(str){
    return str.substring(0,2)
}