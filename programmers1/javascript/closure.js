/*
### **Closure 클로저**

- 함수, 함수가 선언될 때의 environment로 구성
- 함수가 정의 될 때의 environment가 함께 closure로 결합되면서, 다양한 활용이 가능

```jsx
function makeCounterFunction(initVal){
    var count = initVal;
    function Increase(){
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);
```

- counter1의 closure
    - 함수 : `function Increase(){}`
    - 환경 : `var count = 0;`
- counter2의 closure
    - 함수 : `function Increase(){}`
    - 환경 : `var count = 10;`
*/

function makeCounterFunction(initval){
	var count = initVal;
	function Increase(){
		count++
		console.log(count);
	}
	return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();//1
counter2();//11

/*
makeCounterFunction(0);

closure가 가리키는 함수
function Increase(){}

closure의 environment
var count = 0;

makeCounterFunction(10);

closure가 가리키는 함수
fucntion Increase(){}

closure의 environment
var count = 10;
*/

//둘다 count라는 이름을 쓰지만 다른 값을 가짐
