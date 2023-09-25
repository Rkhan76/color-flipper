const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const rbg = generateRandomRbg();
    document.body.style.backgroundColor = rbg;
    color.textContent = rbg;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function generateRandomRbg(){
    let rbg = "#";
    for(let i=0; i<6;i++){
        const random = getRandomNumber();
        rbg += hex[random];
    }
    console.log(rbg);

    return rbg;
    
}