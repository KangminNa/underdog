var a=1, b=2,c=3, d=4;
a<b; //true
a>b; //false
a<b;//true
a>b;//true
a<=b;//true
a>=b;//false
a==b//false
a==a//true
a!=b//ture

// String에서도 가능
var e="a", f="b", g="c", h="d";
e==e;//ture
e!=e;//false
e<f;//true
f<e;//false
1<3;//true
"a"<"b";//true

true && true;// true
true  && false;//false
false && ture; //false
false && flase; //ture

truer||ture//ture
true||false//ture
false||ture//ture
flase||flase//false

!ture//false
!false//ture

var height=180;
var age=20;
height>=180 && age>=20 && age<30//ture
height=170;
height>=180 && age>=20 && age<30//false
age<8 || age>=65//false
age=70;
age<8 || age>=65//ture