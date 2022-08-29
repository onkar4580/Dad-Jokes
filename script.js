// promise method
// 2 condition => success => fail

//fetch('https://restcountries.com/v2/name/bhutan');

// GET https://icanhazdadjoke.com/ 

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector("#jokeBtn");


// const generateJoke = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })
// }



const generateJoke = async () => {

    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`)
    }
}
jokeBtn.addEventListener('click',generateJoke);
generateJoke();