/*
### for문 - 실습

### **문제 설명**

for문을 이용해서 배열 cost의 값을 모두 더해 total_cost 변수에 저장하세요.

---

for문은 초기구문, 업데이트 구문, 반복조건을 한 구문에 합친 반복문입니다. while문과 for문을 비교하는 예제를 참고하여 문제를 해결해 보세요.

### while문

```jsx
var sum = 0;
var i = 0; //초기 설정 코드
while( i < 5 조건식){
    sum = sum + i;
    i++; // 업데이트 코드
}
```

### for문

```jsx
var sum = 0;
for( var i = 0 ; i < 5; i++ ){    // 초기 설정 코드 ; 조건식 ; 업데이트 코드
    sum = sum + i;
}
```
*/
var cost = [ 85, 42, 37, 10, 22, 8, 15 ];
var total_cost = 0;

// 여기에 코드를 작성하세요.
for(i=0; i<cost.length; i++){

    total_cost += cost[i];
}


console.log(total_cost);