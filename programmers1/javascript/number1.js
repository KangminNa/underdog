//파트3. Number - 실습(1)
//변수 str에 저장된 문자열을 정수로 변환해서 pi_int에 저장하세요.

/* 
예시
var height = "160.4";
console.log(height, typeof(height));    // 160.4 string이 출력됩니다.

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));    // 160 'number'가 출력됩니다.
*/

var str="3.141592는 Pi의 근사값입니다."
var pi_int = parseInt(str);

console.log("pi_int의 값은", pi_int, "입니다." );