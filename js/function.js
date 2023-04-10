// <div id="boll"></div>
// создаем шарик и добовляем в игровое поле
function sozdanieBoll() {
	// создаем блок div
        var boll = document.createElement("div");
	 var randomfruit = random(2);
    if(randomfruit == 1) {
        boll.style.background = "url('img/2.png') no-repeat";
        boll.style.width = "60px";
        boll.style.height = "60px";
        boll.style.backgroundSize = "50px";
    }
    if(randomfruit == 2) {
        boll.style.background = "url('img/3.png') no-repeat";
        boll.style.width = "60px";
        boll.style.height = "60px";
        boll.style.backgroundSize = "50px";
    }
    // выводим в консоль
    console.dir(boll);


    
    // 1 - left, 2 - right
    var napravlenie = random(2); 
     // функция для направления
    if(napravlenie == 1) {
        // шарик вылетает с лева
        boll.className = "boll left";
    } else {
        // // шарик вылетает с права
        boll.className = "boll right";
    }
    // функция клика по мячику
    boll.onmousemove = function() {
        // даем класс
    if(boll.className != 'boll ojidayet-udaleniya') {
        // рандомное число
    ochki = ochki + starsrandom(5);
    // меняем текст счета игры, текст будет из переменой i
    stars.innerText = ochki;
    // меняем шикрину шарика по top на 10 пикс
    boll.style.top = boll.offsetTop + 10 + "px";
    // менем местоположение шарика на 10 пикс вправо
    boll.style.right = boll.offsetRight + 10 + "px";
    // при каждом клики на шарик цвет меняеться на жолтый и на синий  
// if (boll.style.background == "yellow")
//     boll.style.background = "blue";
// else
//     boll.style.background = "yellow";

boll.style.opacity = "0";
     //удаляем шарик
     setTimeout(function() {
        // удаляем шарик
        boll.remove();

              var sushestvuetBoll = document.querySelector(".boll"); // element : null
              if(sushestvuetBoll == null) {
                    // сколько шариков я хочу сделать
        var colichestvoBoll = random(5);
        // текущее количество шариков
        var tekucheeColichestvoBoll = 0;
        while(tekucheeColichestvoBoll < colichestvoBoll) {
        // создаем шарик
        sozdanieBoll();
        tekucheeColichestvoBoll = tekucheeColichestvoBoll + 1;
        }

              }

     }, 200);
    }
     boll.className = 'boll ojidayet-udaleniya';
 }

setTimeout(function() {
    boll.style.top = random(600) + "px";
    boll.style.left = random(1050) + "px";
}, 200)

setTimeout(function() {
    // у шарика малинькая скорость
    boll.style.transition = "all 0s";
    // создаем переменную timerBoll
    var timerBoll = setInterval(function() {
        // создаем таймер который каждые 10 милисикунд опускал шарик вниз
        boll.style.top = boll.offsetTop + 1 + "px";
        // если шарик вышел за приделы поля
        if(boll.offsetTop > 650) {
            // удаляем шарик
            boll.remove();
            // создаем шарик
            sozdanieBoll();
            // уменшаем количество жизней
            colichestvoSpan = colichestvoSpan - 1;
            if(colichestvoSpan == 0) {
                // вызываем функцию конца игры
                koniecIgra();
            }
            // удаляем блок жизней
            udalenieLifesBlock();
            // создаем блок жизней
            sozdanieLifesBlock();
            // удаляем таймер
            clearInterval(timerBoll);
       }
    }, 10)
}, 1000)

    // добовляем элемент шарик в игровое поле
    igraPole.appendChild(boll);
}

// получить случайное число
function starsrandom(max) {
    // случайное число от 0 да максимума
    var stars = Math.random() * (max + 1);
    // округляем до целого числа
    stars = Math.floor(stars);
    console.log(stars);
    // return - вернуть рузультат
    return stars;
}

if(ochki == 15) {
    boll.remove();
    stars.remove();
    lifes.remove();
}



// получить случайное число
function random(max) {
    // случайное число от 0 да максимума
    var ran = 1 + Math.random() * (max + 1);
    // округляем до целого числа
    ran = Math.floor(ran);
    // return - вернуть рузультат
    return ran;
}


/*=====================================
функции для создания элементов игры
=======================================*/
/*
<div id="start-block">
<button id="start-knopka">Начать</button>
</div>
*/


function sozdanieStartBlock() {
    // создаем блок див <div id="start-block">
    startBlock = document.createElement("div");
    startBlock.id = "start-block";
    // создаем кнопку button <button id="start-knopka">Начать</button>
    startKnopka = document.createElement("button");
    startKnopka.id = "start-knopka";
    // startKnopka.innerText = "Начать";
    // добавляем кнопку в стартовый блок
    startBlock.appendChild(startKnopka);
    // добавляем стартовый блок в игровое поле
    igraPole.appendChild(startBlock);
 }
/*
<div id="stars">0</div>
*/
// создаем очки и добовляем в игровое поле
function sozdanieOchkiBlock() {
    // создаем блок div
    stars = document.createElement("div");
    // добевляем id 
    stars.id = "stars";
    stars.innerText = 0;
    // добовляем элемент очки в игровое поле
    igraPole.appendChild(stars);

}
/*
<div id="lifes">
    <span></span>
    <span></span>
    <span></span>
</div>
*/
function sozdanieLifesBlock() {
    lifes = document.createElement("div");
    lifes.id = "lifes";
    // текушее количкство жизней
    var tekucheeColichestvospan = 0;
    // цыкл жизней
     while(tekucheeColichestvospan < colichestvoSpan) {
            var span = document.createElement("span");
            lifes.appendChild(span);
        tekucheeColichestvospan =  tekucheeColichestvospan + 1;
        }
    igraPole.appendChild(lifes);
    console.dir(lifes);  

}

// <h2>Время: <span =id"timer">10<span></h2>
function sozdanieTimerBlock() {
    // создаем заголовок h2 с текстом "Время:";
    var h2 = document.createElement("h2");
    h2.innerText = "Time:";

    // в коробчку timerBlock добавляем тег span
    timerBlock = document.createElement("span");
    // прописываем span id="timer" и текст 10
    timerBlock.id = "temer";
    timerBlock.innerText = "10";
    // добовяем в заголовок h2 тег span
    h2.appendChild(timerBlock);
    // добовляем в информфционный блок заголовок с таймером
    infoBlock.appendChild(h2);
}

/*
<div id="konec-igra">
        <h2>Игра окончена!</h2>
        <h3>Вы набрали: 100 очков</h3>
    </div>
*/
function sozdanieKonecIgra() {
    // создаем блок <div id="konec-igra"></div>
    var konecIgra = document.createElement("div");
        konecIgra.id = "konec-igra";
    var img = document.createElement('div');
        img.id = 'game-over';
    var h3 = document.createElement("h3");
    h3.innerText = "Вы набрали: " + ochki + "очков";

    konecIgra.appendChild(h3);
    konecIgra.appendChild(img);
    igraPole.appendChild(konecIgra);
}

// Expected output: 0, 1 or 2

/*====================
Удаление элементов
======================*/
// удалять стортовый блок
function udalenieStartBlock() {
     // удалить выбраный блок
         startBlock.remove();
}

function udalenieLifesBlock() {
        lifes.remove();

        redLifes = document.createElement("div");
        redLifes.id = "red";
        // текушее количкство жизней
        var redLifesColl = 0;
        // цыкл жизней
         while(redLifesColl < collSpan) {
                var span = document.createElement("span");
                redLifes.appendChild(span);
            redLifesColl =  redLifesColl + 1;
            }
        igraPole.appendChild(redLifes);
        console.dir(redLifes);
}

function udalenieStarsBlock() {
        stars.remove();
}
function ochistenieIgraPole() {
    igraPole.innerText = "";
}
function igraBeforeAfter() {
    var div = document.getElementById('igra');
    div.className = 'new'; // задать класс
}
function udalenieTimerBlock() {
    h2.remove();
}