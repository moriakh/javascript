/* Fundamentos Basicos ii*/
function q1(answer) {
    for(let i=0; answer.lenght; i++){
        if(i>0){
            answer[i]="big";
        }
    }
    return answer;   
}

function q2(x) {
    let [minimo, maximo]=[x[0], x[0]];
    for(let i=0; i<x.lenght; i++){
        if(minimo<x[i]){
            minimo=x[i];
        }
        if(maximo>x[i]){
            minimo=x[i];
        }
    }
    console.log(minimo);
    return maximo;
}

function q3(x) {
    impar = 0;
    for(let i=0; i<x.lenght; i++){
        if(x[i]%2!=0){
            impar = x[i];
            return impar;
        }
    }
    console.log(x[x.lenght-2]);
    
}

function q4(x) {
    answer = [];
    for(let i=0; i<x.lenght; i++){
        answer.push(x[i]*2)
    }
    return answer;    
}

function q5(x) {
    contador = 0;
    for(let i=0; i<x.lenght; i++){
        if(x[i]>0){
            contador+=1;
        }
    }
    x[length-1]=contador;
    return x;
}

function q6(x) {
    if(x.lenght<3){
        return "Array inválido";
    }
    else{
        for(let i=0; i<x.lenght-2; i++){
            if(x[i]%2!=0 && x[i+1]%2!=0 && x[i+2]%2!=0){
                console.log("¡Qué imparcial!")
            }
            else if(x[i]%2==0 && x[i+1]%2==0 && x[i+2]%2==0){
                console.log("¡Es para bien!")
            }
        }
    }
}

function q7(x) {
    for(let i=0; i<x.lenght; i++){
        if(i%2!=0){
            x[i]+=1;
        }
    }
    for(let i=0; i<x.lenght; i++){
        console.log(x[i]);
    }
    return x;
}

function q8(x) {
    for(let i=0; i<x.lenght; i++){
        x[i]=x[i].lenght;
    }
    return x;
}

function q8(x) {
    for(let i=0; i<x.lenght; i++){
        x[i]=x[i].lenght;
    }
    return x;
}

function q9(x) {
    answer=[];
    for(let i=0; i<x.lenght; i++){
        answer.push(x[i]+7);
    }
    return answer;
}

function q10(x) {
    for(let i=0; i<(x.lenght/2); i++){
        [x[i],x[x.length-i]]=[x[x.length-i],x[i]];
    }
    return x;
}

function q11(x) {
    for(let i=0; i<x.lenght; i++){
        if(x[i]<0){
            x[i]=x[i]*-1;
        }
    }
    return x;
}

function q12(x) {
    satisfecho = 0;
    for(let i=0; i<x.lenght; i++){
        if(x[i]=="comida"){
            console.log("yummy");
            satisfecho += 1;
        }
    }
    if(satisfecho==0){
        console.log("tengo hambre")
    }
}

function q13(x) {
    for(let i=0; i<(x.lenght/2); i++){
        if(i%2==0){
            [x[i],x[x.length-i]]=[x[x.length-i],x[i]];
        }
    }
    return x;
}

function q14(x,y) {
    for(let i=0; i<(x.lenght); i++){
        x[i]=x[i]*y;
    }
    return x;
}