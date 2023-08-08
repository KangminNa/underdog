/*
### 배열 만들기 - 실습(2)

### **문제 설명**

함수 solution을 수정해서 인자로 받는 배열 arr의 첫번째 엘리먼트를 return하도록 만들어 보세요.

---

배열의 엘리먼트에 접근하기 위해 `arr[index]`(대괄호안에 인덱스)를 사용합니다.

예를 들어,

var arr = [1, 2, 3, 4, 5];

console.log(arr[0]);               // 1이 출력됩니다.
console.log(arr[arr.length-1]);    // 5가 출력됩니다.
*/

function solution(arr){
    return arr[0]
}

var result = solution([1,2,3,4,5])
console.log(result)