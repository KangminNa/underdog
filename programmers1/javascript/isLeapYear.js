/*
### if문-실습(3)

### **문제 설명**

인자 year가 윤년인지 아닌지를 true, false로 반환하는 solution함수를 완성하세요.

(편의상, 4의 배수인 해는 모두 윤년으로 생각하세요.)

---

4의 배수인지 검사하려면 `year % 4`를 확인하면 됩니다. 즉, `year % 4 == 0`이 참이면 true, 0이 아니라면 false가 반환되면 되겠지요.
*/
function solution( year ){
    if(year%4==0)//if 문을 추가하세요
    return true;
    //else 문을 추가하세요
    return false;
}