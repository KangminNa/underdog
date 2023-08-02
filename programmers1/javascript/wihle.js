/*
# 1. while문

### **반복문**

조건에 따라 프로그램의 일정 코드를 반복적으로 수행할 수 있도록 하는 구문

### **while**

조건이 만족하는 동안 반복실행될 코드를 계속 실행

`while( 조건식){
    반복 실행될 코드}`

### **continue, break;**

- continue : 남은 반복실행될 코드를 모두 skip
- break : 반복문에서 즉시 탈출
*/

cosole.log("Menu");
cosole.log("1. Ice Americano");
cosole.log("2. Cafe Latte");
cosole.log("3. Cappuccino");
cosole.log("4. Tea");

var count = 0;

while(count<3){
	var choice = parseInt(promt("메뉴를 선택해 주세요"));
	console.log(choice + "빈 메뉴를 선택하셨습니다.");

	switch(choice){
	case 1:
		console.log("아이스 아메리카노는 1500원 입니다.");
		break;
	case 2:
		console.log("카페라뗴는 1800원 입니다.");
		break;
	case 3:
		console.log("카푸치노는 2000원 입니다.");
		break;
	case 4:
		console.log("홍차는 1300원 입니다.");
		break;
	default:
		console.log("죄송합니다. 그런 메뉴는 없습니다.");
		break;
	}
	count++;
}

console.log("안녕히 가십시오");
