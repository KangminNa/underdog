/*
### witch문-실습(1)

### **문제 설명**

각 달을 month라는 인자로 받아 그 달이 몇일까지 있는 반환하는 함수 solution함수를 완성하세요.

(2월은 28일까지 있다고 가정하세요.)

---

`switch`, `case`는 조건에 따라 프록그램의 흐름을 분기해서 특정 코드가 실행되도록 합니다. `break`구문을 만나면 switch-case의 마지막 중괄호 밖으로 빠져나오게 됩니다.

아래의 코드는 choice의 값에 따라 출력되는 값이 달라지는 코드입니다. 예제를 참고하여 문제를 해결해 보세요.

switch( choice ){
    case 1:
        console.log("1번 메뉴를 선택하셨습니다.");
        break;
    case 2:
        console.log("2번 메뉴를 선택하셨습니다.");
        break;
    case 3:
        console.log("3번 메뉴를 선택하셨습니다.");
        break;
    case 4:
        console.log("4번 메뉴를 선택하셨습니다.");
        break;
    default:
        console.log("없는 메뉴 입니다.");
        break;
}
*/
function solution( month ){
    // 여기에 switch를 이용해 각 달의 날짜수를 반환하는 프로그램을 작성하세요.
    switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return -1;
  }
}