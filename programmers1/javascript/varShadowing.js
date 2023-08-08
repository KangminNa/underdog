/*
### 변수의 shadowing-실습

### **문제 설명**

다음 코드는 구구단을 2단부터 9단까지 출력하는 코드입니다. 하지만 이대로 실행하면 정상적으로 구구단을 출력하지 않습니다. 아래의 코드에 shadowing 효과를 추가해 구구단이 잘 출력되도록 하세요.

---

변수의 shadowing은 서로 다른 함수에서 같은 이름의 변수를 사용하는 경우 나타납니다. 함수 안에서 이미 밖에 선언 되어있던 같은 이름의 변수를 사용하는 경우, 함수 밖의 변수는 잠시 가려지게(shadowing) 됩니다.

그러므로 함수 안에서는 해당 함수 내의 변수를 사용하고 함수 밖의 변수는 값이 변하지 않지요. 함수에서 빠져나오면 함수 밖의 변수에 접근할 수 있습니다. 아래의 예제를 살펴보고 문제를 해결해 보세요.

function shadowing(){
    var val = 0;             // 함수 밖의 변수와 이름이 같은 변수를 선언
    console.log("F", val);   // val은 함수 안의 val을 사용, 0이 출력
    val++;
}

var val = 0;
shadowing();
console.log("O", val);       // 함수를 빠져나오면서 함수 밖의 val을 사용하므로 0이 출력
*/

function printTimesTable(a){
    for( i = 1 ; i <= 9 ; i++ ){
        console.log( a + " * " + i + " = " + a*i );
    }
}


for( var mul = 2 ; mul <= 9 ; mul++ ){
    printTimesTable(mul);
}