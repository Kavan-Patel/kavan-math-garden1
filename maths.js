var answer;
var score = 0;
var backgroundImages = [];
function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}
function checkAnswer(params) {
    const prediction = predictImage();
    console.log(`prediction: ${prediction} , Actual value:${answer}`);
    if (prediction == answer) {
        score++;
        if(score<=6)
        {
            console.log(`Correct score ${score}`);
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }
        else{
            alert("Well Done! Your garden is full of bloom! Want to start again?");
            score=0;
            backgroundImages=[];
            document.body.style.backgroundImage = backgroundImages;
        }
        
    }
    else {
        if (score != 0) { score--; }
        console.log(`Wrong score ${score}`);
        alert('OOps! check your number and try to write cleaner next time !!');
        setTimeout(function () {
           backgroundImages.pop(); 
           document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }
}
