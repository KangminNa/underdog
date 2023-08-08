function f(){
	console.log(this);
	console.log("f is called");
}

function setName(name){
	this.name = name;
}

var o={name:"object", method:f};
var o2={name:"", setNatme:setName};

o.setName("object1");
o2.setName("object2");

console.log(o, o2);//object1, object2 this를 이용하여 접근 가능

//f();
//0.method();

//f is called
//f is called
// 총 두번의 호출이 되는 것을 볼 수 있음

//this 이후
//window
//Object
//this은 예약어 바깥에 선언한 함수는 window가 호출
//객체 메소드로서 호출됐을땐 Object로 나옴