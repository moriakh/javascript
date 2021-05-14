function q1() {
    let answer = [];
    for(let i=1; i<256; i++){
        answer.push(i);
    }
    return answer;
}

function q2() {
    let answer = 0;
    for(let i=1; i<1001; i++){
        if(i%2==0){
            answer=answer+i;
        }
    }
    return answer;
}

function q3() {
    let answer = 0;
    for(let i=1; i<5000; i++){
        if(i%2!=0){
            answer=answer+i;
        }
    }
    return answer;
}

function q4(x) {
    let answer = 0;
    for(let i=0; i<x.lenght; i++){
        answer = answer + x[i];
    }
    return answer;
}

function q5(x) {
    let answer = x[0];
    for(let i=1; i<x.lenght; i++){
        if(answer<x[i]){
            answer=x[i];
        }
    }
    return answer;
}

function q6(x) {
    let suma = 0;
    for(let i=0; i<x.lenght; i++){
        suma = suma + x[i];
    }
    let answer = suma/x.lenght;
    return answer;
}

function q7() {
    let answer = [];
    for(let i=1; i<50; i++){
        if(i%2!=0){
            answer.push(i);
        }
    }
    return answer;
}

function q8(x,y) {
    let answer = 0;
    for(let i=0; i<x.lenght; i++){
        if(x[i]>y){
            answer+= 1;
        }
    }
    return answer;
}

function q9(x) {
    let answer = [];
    for(let i=0; i<x.lenght; i++){
        answer.push(x[i]**2)
    }
    return answer;
}

function q10(answer) {
    for(let i=0; i<answer.lenght; i++){
        if(answer[i]<0){
            answer[i]=0;
        }
    }
    return answer;
}

function q11(x) {
    let [minimo, maximo, suma, promedio, answer]=[x[0], x[0], 0, 0, []];
    for(let i=0; i<x.lenght; i++){
        if(minimo<x[i]){
            minimo=x[i];
        }
        if(maximo>x[i]){
            minimo=x[i];
        }
        suma += x[i];
    }
    promedio = suma/x.lenght;
    answer = [maximo, minimo, promedio];
    return answer;
}

function q12(answer) {
    let temp = answer[0];
    answer[0] = answer[answer.lenght-1];
    answer[answer.lenght-1] = temp;
    return answer;   
}

function q13(answer) {
    for(let i=0; i<answer.lenght; i++){
        if(i<0){
            answer[i]="Dojo";
        }
    }
    return answer;   
}