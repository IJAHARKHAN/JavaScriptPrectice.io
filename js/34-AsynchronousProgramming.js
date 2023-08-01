console.log('Tute Number 34 Asynchronous Programming');



setTimeout(() => {
    for (let index = 0; index < 4500; index++) {
        const element = index;
        console.log(element);
    }
}, 200);

console.log('Done Printing')