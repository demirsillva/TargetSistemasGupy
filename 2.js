function verifyFibonacci(num){
    let a = 0, b = 1, c = 0;
    let sequence = [a, b];
   
    if(num === a || num === b) {
        console.log(`A sequência de Fibonacci até ${num} é: ${sequence.join(', ')}`);
        console.log(`${num} pertence à sequência de Fibonacci.`);
        return;
    }

    while(c <= num){
        c = a + b;
        if(c > num) break;
        sequence.push(c);
        if(c === num) {
            console.log(`A sequência de Fibonacci até ${num} é: ${sequence.join(', ')}`);
            console.log(`${num} pertence à sequência de Fibonacci.`);
            return;
        }
        a = b;
        b = c;
    }   
    console.log(`A sequência de Fibonacci até ${num} é: ${sequence.join(', ')}`);
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}

verifyFibonacci(34)
