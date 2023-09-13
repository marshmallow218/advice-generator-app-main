const adviceId = document.getElementById('advice-id');
const adviceTxt = document.getElementById('advice-text');
const adviceBtn = document.getElementById('generate-btn');
const url = "https://api.adviceslip.com/advice";

window.onload = getAdvice();

async function getAdvice() {
    const res = await fetch(url);
    const { slip: { id, advice } } = await res.json();
    adviceId.innerText = id;
    adviceTxt.innerText = advice;
}

adviceBtn.addEventListener('click', getAdvice)
;