/*
### **do, while**

한번은 코드가 실행되고, 이후에 반복실행될지 말지를 결정

`do{
    반복 실행될 코드}while(조건식);`

### **조건식이 거짓(False) 일 때,**

- while : 한번도 실행되지 않음
- do, while : 한번은 실행되고 종료
*/

var cond = false;

while(cond) {
	console.log("이 구문은 실행되지 않습니다.");
}

do{
	console.log("이 구문흔 한번은 실행됩니다.");
}while(cond);

do{
	var ans = parseInt(prompt("1+1=?"));
}while(ans!=2);

console.log("맞췄습니다.");