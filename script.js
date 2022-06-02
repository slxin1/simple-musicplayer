// Variables
const button_play = document.getElementById("play")
const button_skip = document.getElementById("skip")
const button_previous = document.getElementById("previous")
const loger = document.getElementById("loger")
let playlist = ["src/ballwoyou.mp3", "src/mariotypebeat.mp3", "src/craveyoubaba.mp3", "src/spacecadet.mp3"];
let sound = new Audio(playlist[0])
let number = 0
let can = 0


// Actions 
button_play.addEventListener('click', btnplay);
button_skip.addEventListener('click', btnskip);
button_previous.addEventListener('click', btnprevious);
// sound.addEventListener('ended', btnskip);


// Fonctions
function initialisation() {
    sound.pause()
    sound.currentTime = 0;
}
function btnplay() {
    if (button_play.value === 'Play') {
        sound.play()
        button_play.value = "Pause";
        loger.textContent = "Action effectué : Play"
    } else {                                        //              BOUTON PLAY - PAUSE 
        button_play.value = "Play";
        sound.pause();
        loger.textContent = "Action effectué : Pause"
    }
}

function btnskip() {
    initialisation();
    //if (sound === playlist[0]) {
        //sound = new Audio(playlist[1])
        //sound.play();
        //console.log(playlist)
    //} else {                                              version pas très fonctionnelle.
        //sound = new Audio(playlist[0])
        //sound.play();
        //console.log(playlist)
    //}
    if (number == playlist.length) {
        button_play.value = "Play";
        number = 0
        can = 0
        console.log(can)
    } else {
        can = 1
        console.log(can)
        ++number
    }

sound = new Audio(playlist[number])                     // BOUTON SKIP - Fonctionnel.

    if (can == 1) {
        sound.play();
    } else if(can == 0) {
        sound.pause();
    }

    console.log(number)
    loger.textContent = "Action effectué : Skip";
    }


function btnprevious() {
    initialisation();
    // sound = new Audio(playlist[1])
    // sound.play();                            // Ancienne Version - non fonctionnelle.
    // console.log(sound)
    if (number == 0) {
        number = playlist.length
        sound.play()
    } else {                                    // BOUTON RETOUR - Fonctionnel.
    number -= 1
    sound = new Audio(playlist[number])
    sound.play()
    }

    loger.textContent = "Action effectué : Previous"
}