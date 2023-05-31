// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
// }

// Usage: Use a for loop when you know how many times you want the loop to run (for example, when you're looping through elements in an array)


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//     }

//     return gifts;
// }

// wrapGifts(gifts);


function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return messages;
}
// const gifts = ['teddy bear', 'drone', 'doll'];
// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--);
    }
}
