function writeCards(namesArray, eventName) {
    const cards = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const cardMessage = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      cards.push(cardMessage);
     
    }
  
    return cards;
  }
  const namesArray = ['Charlie', 'Samip', 'Ali'];
const eventName = 'birthday';

const cards = writeCards(namesArray, eventName);

console.log(cards);

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}


countDown(10);