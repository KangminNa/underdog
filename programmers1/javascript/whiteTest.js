/*
### while문 - 실습(1)

### **문제 설명**

count를 0으로 초기화하고 while문 안에서 1씩 더해주고 있습니다. 이렇게 하면 count가 9까지 증가한 다음 while문의 조건에 따라 반복이 종료됩니다. [실행]버튼을 눌러서 실행 결과를 확인해 보세요.

---

while문은 조건에 따라 프로그램의 일정 코드를 반복적으로 수행할 수 있도록 하는 구문입니다. 아래의 예를 참고하여 문제를 해결해 보세요.

var count = 0;

while( count < 20){    // count가 20 이하일 때 코드가 실행됩니다.
    console.log( count );
    count += 2;    // count의 값을 2만큼 증가시킵니다.
}
*/
var count = 0;
while( count < 10){
    console.log( count );
    count++;
}
//작성한 코드 없음. 실행하여 작동원리는 알아보는 코드