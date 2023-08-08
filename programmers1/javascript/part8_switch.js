/*
### **switch, case**

조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 함

switch( 비교할 값 ){
    case 값1:
        비교할 값이 값1인 경우 실행될 코드break;
    case 값2:
        비교할 값이 값2인 경우 실행될 코드break;

    
    ... 여러개의 case
    default:
        비교할 값이 위의 모든 값과 다른 경우 실행될 코드break;
}
### **break**

break구문을 만나면, switch-case 문의 마지막 중괄호(}) 밖으로 빠져나옴.

- break를 사용하지 않으면, switch문에서 빠져나오지 않고 다음 case에 해당하는 코드까지 실행됨.
*/

cosole.log("Menu");
cosole.log("1. Ice Americano");
cosole.log("2. Cafe Latte");
cosole.log("3. Cappuccino");
cosole.log("4. Tea");

var choic = parseInt(prompt("메뉴를 선택해 주세요"));

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
//break를 활용하여 원하는 값만 나올 수 있게 다음 조건문을 빠져나가는 역할을 해줌.
}