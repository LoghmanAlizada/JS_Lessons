
 // *!                       Lesson JS Scopes
 
 // *TODO                    (1) Global Scope
 // *TODO                    (2) Function Scope
 // *TODO                    (3) Block Scope

// Examples

/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/

// *TODO (1) Global Scope

// *? Dəyişəni globalda (yəni heçbir function daxilində deyil) set edirik.
// *? Və bu dəyişən globalda və istənilən function daxilindən əlçatan olur.

 var a = 10; // Globalda dəyər set etmək.
 console.log(a); // Globalda əlçatanlılıq.
 
 function Example(){
    console.log(a); // Function daxilində əlçatanlılıq.
    if(true){
        console.log(a); // Block scope daxilində əlçatanlılıq.
    }
 }

 Example(); // *! Əgər bir function set edirsizsə və əməliyyatlar aparırsızsa, bu methodun çalışması üçün onu mütləq çağırmalıyıq (call the function)!
 
/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/

// *TODO (2) Function Scope

// *? Dəyişəni bir function daxilində set edirik. Və bu dəyişən yalnız,
// *? set olunduğu function daxilində və həmin function daxilindəki 
// *? block scope daxilində əlçatan olur. Globalda əlçatan deyil.

function Example2(){
    var b = 9; // Function daxilində dəyər set etmək.
    console.log(b); // Function daxilində əlçatanlılıq.
    if(true){
        console.log(b); // Block scope daxilində əlçatanlılıq.
    }
}

Example2();

/***************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************/

// *TODO (3) Block Scope

// *? Dəyişəni bir block scope daxilində set edirik. Və bu dəyişən,
// *? yalnız set oldunduğu block scope daxilində əlçatan olur.
// *? Globalda və Function daxilində əlçatan deyil.
// *! QEYD: Yalnız tipi var olan dəyişən block scope daxilində set olunsa belə, həm olduğu block scope daxilində həmdə yarandığı function daxilində əlçatan olur.
// *!       let və const üçün isə belə deyil.

function Example3(){
    if(true){
        var c = 8;
        console.log(c); // Block scope daxilində əlçatanlılıq.
    }
}

Example3();