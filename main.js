const newAdviceButton = document.querySelector('.newAdviceButton');
const adviceID = document.querySelector('.adviceID')
const advice = document.querySelector('.advice')

async function fetchAdvice(){
    const number = Math.ceil(Math.random() * 223)
    advice.textContent = "Loading New Advice"
     const response = await fetch(`https://api.adviceslip.com/advice/${number}`);
    const data = await response.json();
   return data.slip;
 

}
async function insertNewAdvice(){
    const adviceInfo = await fetchAdvice();
    console.log(adviceInfo)

    adviceID.textContent = adviceInfo.id
    advice.textContent = adviceInfo.advice
}

newAdviceButton.addEventListener('click', insertNewAdvice);