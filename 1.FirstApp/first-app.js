// console.log("Hello NodeJS");

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncFunction = async () => {
    console.log('a');
    console.log('b');

    await delay(3000);
    console.log('c');

    await delay(0);
    console.log('d');

    console.log('e');
}

asyncFunction();