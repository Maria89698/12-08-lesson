const p = new Promise(promiseCb);
console.log(p);

const promise = new Promise((resolve, reject) => {
    const isFullfilled = Math.random()>0.5;
    console.log(isFullfilled);

    if (isFullfilled) {
        resolve('Проміс виконався успішно!')
    }
        reject('Проміс виконався з помилкою')
});

console.log(promise);

promise.then((result) => {
    console.log(result);
})

let pokemon;
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(res => res.json())
.then(result => {
    refs.container.textContent = result.name;
})

const arr = [2, 4, 6, 8, 10];
function getArr(numbers) {
    numbers.every((number) => {
        return number%2 === 0;
    })
}