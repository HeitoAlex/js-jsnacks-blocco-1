// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const bodyElement = document.querySelector('body')

for (let i = 0; i < numberList.length; i++){
    
    if (numberList[i] % 2 === 1){
        const oddDivElement = document.createElement('div');
        oddDivElement.style.color = "red";
        oddDivElement.append(numberList[i]);
        bodyElement.appendChild(oddDivElement);
    } else {
        const evenDivElement = document.createElement('div');
        evenDivElement.style.color = "green";
        evenDivElement.append(numberList[i]);
        bodyElement.appendChild(evenDivElement);
    }
}