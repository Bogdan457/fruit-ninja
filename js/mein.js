// Главный фаил в котором я буду вызывать неопходимые функции и действия
function Start() {

sozdanieStartBlock();

startKnopka.onclick = nachat; 
    sozdanieTimerBlock();


    // startBlock.style.display = "none";
    // startBlock.style.display = ("start-block");
    

}

function nachat() {
	sozdanieBoll();
	sozdanieOchkiBlock();
    sozdanieLifesBlock();
    udalenieStartBlock();
    timerIgra();
}

Start()


function koniecIgra() {
	udalenieLifesBlock();
	udalenieStarsBlock();
	setTimeout(function() {
    ochistenieIgraPole();
    sozdanieKonecIgra();
	}, 200)

}
//функция для обратного отчета игры
function timerIgra() {
    var chasy = setInterval(function() {
    timerBlock.innerText = timerBlock.innerText - 1;
        if(timerBlock.innerText == 0) {
            clearInterval(chasy);
            console.dir(stars);
            koniecIgra();
        } 
    }, 1000);
}