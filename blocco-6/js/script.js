// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const numberList = [1,2,3,4,5,6]
let somma = 0

for (let i = 0; i < numberList.length; i++){
    if (i % 2 === 1){
        somma += numberList[i]
    }
}