/*
### **문제 설명**

배열 arr의 앞에 "begin", 뒤에 "end" 문자열을 엘리먼트로 추가하세요.

---

배열에 엘리먼트를 추가/삭제하기 위해 아래와 같은 방법을 이용합니다.

- `.push(element)` : 배열의 뒤에 엘리먼트 추가
- `.pop()` : 배열의 뒤에서 엘리먼트 삭제하고 리턴
- `.shift()` : 배열의 앞에서 엘리먼트 삭제하고 리턴
- `.unshift(element)` : 배열의 앞에 엘리먼트 추가

예를 들어,
var arr = ['a', 'b', 'c'];

arr.push('e');          // arr = ['a', 'b', 'c', 'e']
arr.unshift('i');       // arr = ['i', 'a', 'b', 'c', 'e']

console.log(arr.pop());      // e가 출력되고 arr = ['i', 'a', 'b', 'c']
console.log(arr.shift());    // i가 출력되고 arr = ['a', 'b', 'c']
*/
var arr=[1,2,3];
//arr의 앞에 "begin", 뒤에 "end"를 엘리먼트로 추가하세요.
//push, unshift를 이용하세요.
arr.push("end");
arr.unshift("begin");


console.log(arr);