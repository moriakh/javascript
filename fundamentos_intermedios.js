function q1(x) {
    if(x<0){
        return "El nro es negativo"
    }
    let answer = 0;
    for(let i=1; i==x; i++){
        answer+=i;
    }
    return answer;
}

function q2(x) {
    if(x<0){
        return "El nro es negativo"
    }
    let answer = 1;
    for(let i=1; i==x; i++){
        answer=answer*i;
    }
    return answer;
}

function q3(x) {
/* las instrucciones son poco claras*/
    if(x<0){
        return "El nro es negativo"
    }
    let answer = 0;
    for(let i=1; i==x; i++){
        answer=answer+i;
    }
    return answer;
}

function q4(x) {
    /* las instrucciones son poco claras*/
    if(x.lenght<2){
        return null;
        }
    return x[x.lenght-2];
}

function q5(x,y) {
    return x[x.lenght-(y+1)];
}

function q6(x) {
    let temp = x[0];
    for(let i=1; i<x.lenght; i++){
        if(temp<x[i]){
            temp=x[i];
        }
    }
    let answer = x[0];
    for(let i=1; i<x.lenght; i++){
        if(answer<x[i] && answer<temp){
            answer=x[i];
        }
    }
    return answer;
}

function q7(x) {
    answer = [];
    for(let i=0; i<x.lenght; i++){
        answer.push(x[i]);
        answer.push(x[i]);
    }
    return answer;
}