/*pregunta  1*/
function a(){
    return 35;
}
console.log(a())
/* imprime 35 */

/*pregunta  2*/
function a(){
    return 4;
}
console.log(a()+a());

/*imprime 8*/

/*pregunta  3*/
function a(b){
    return b;
}
console.log(a(2)+a(4));
/*imprime 6*/

/*pregunta  4*/
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
/*imprime 3*/
/*imprime 9*/

/*pregunta  5*/
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
/*imprime 40*/

/*pregunta  6*/
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
/*imprime 4*/

/*pregunta  7*/
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
/*imprime 10 3*/
/*imprime 30*/

/*pregunta  8*/
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
/*imprime 3*/
/*imprime 4*/

/*pregunta  9*/
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
/*imprime 2*/
/*imprime 5*/
/*imprime 8*/

/*pregunta  10*/
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 0*/

/*pregunta  11*/
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 0*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 1*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 2*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 3*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 4*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 5*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 6*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 7*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 8*/
/*imprime 0*/
/*imprime 1*/
/*imprime 2*/
/*imprime 3*/
/*imprime 4*/
/*imprime 5*/
/*imprime 6*/
/*imprime 7*/
/*imprime 8*/
/*imprime 9*/
/*imprime 9*/

/*pregunta  12*/
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
    }
}
/*imprime undefined*/ /*j no está en el primer for*/

/*pregunta  13*/
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
/*imprime 15*/

/*pregunta  14*/
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
/*imprime 15*/
/*imprime 15*/

/*pregunta  14*/
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
/*imprime 15*/
/*imprime 15*/