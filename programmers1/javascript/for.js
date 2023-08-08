/*
### **for**

초기구문, 업데이트 구문, 반복조건 을 한 구문에 합친 반복문.

### **0~4까지 더하는 동일한 while문과 for문.**

### while 문

```jsx
var sum = 0;
var i = 0; 초기 설정 코드while( i < 5 조건식 ){
    sum = sum + i;
    i++; // 업데이트 코드*}
```

### for문

```jsx
var sum = 0;
for( var i = 0 ; i < 5 ; i++ ){
    sum = sum + i;
}
```
*/
var array = [1,2,3,4,5,6,7,8,9,10];

var i = 0; // 반복문 진입 전 실행될 초기 코드

while(i<array.length){
	//빈벅 실행될 코드
	console.log(array[i]);
	i++; // 반복문 코드가 한번 실행되고 나면 실행될 업데이트 구문
}

// 위와 같은 코드임. while과 for문에 차이를 확인

for(var i = 0; i < array.length; i++){ // 조건식
	//반복 실행될 코드
	console.log(array[i]);
	//for문애서 continue를 만나면 중괄호 끝으로 간 이후 update로 갑니다.
	//while문에서 continue를 만나면 반복실행 코드의 끝으로 이동한 다음 바로 조건식 검사

}