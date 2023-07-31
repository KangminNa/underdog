// 파트3. Number-실습(2)
// 변수 str에 저장된 문자열을 실수로 변환해서 pi_float에 저장하세요

/*
예시
문자열을 실수로 변환하기 위해 parseFloat를 이용할 수 있습니다.
var height = "160.4";
console.log(height, typeof(height));    // 160.4 string이 출력됩니다.

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));    // 160 'number'가 출력됩니다.

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));    // 160.4 'number'가 출력됩니다.
*/
var str="3.141592는 Pi의 근사값입니다."
var pi_float = parseFloat(str);

console.log("pi_float의 값은", pi_float, "입니다." );