// ?     JS Variables (var, let, const)

//TODO (1) var
//** -Eyniadlı ikinci bir dəyişən yaratmaq olur. Bu zaman sətir məntiqinə görə,
//**  dəyişən ən sonuncu mənimsədilmiş dəyəri saxlayır.

var a = 10;
var a = 11;
console.log(a);

/************************************************************************************************************/
/************************************************************************************************************/

//TODO (2) let 
//**  Eyniadlı ikinci bir dəyişən yaratmaq olmur. Lakin yaradılmış dəyişənin dəyərini,
//**  sonraki sətirlərdə dəyişmək olur.

let b = 10;
b = 12;
console.log(b);

/************************************************************************************************************/
/************************************************************************************************************/

//TODO (3) const
//**  Eyniadlı ikinci bir dəyişəni yaratmaq və ya yaradılmış dəyişənin dəyərini sonrakı sətirlərdə dəyişmək olmur.
//**  Lakin const-la yaradılmış obyektdə məntiq biraz fərqlidir. Const-la yaradılmış obyektin özünü dəyişmək və ya
//**  həmin obyektə yeni dəyərlər əlavə etmək mümkün deyil. Lakin obyekt daxilində olan dəyərləri update etmək mümkündür.

const ExpObject = {
    Name : "Loghman",
    Surname : "Alizada",
    Email : "loghmanalizada@gmail.com"
};

ExpObject.Email = "xxxx@loghman.me"

console.log(ExpObject);