// Variables
const button_play = document.getElementById("play")
const button_skip = document.getElementById("skip")
const button_previous = document.getElementById("previous")
const song_name = document.getElementById("namesong")
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
        document.getElementById('play').style.backgroundImage="url(/src/icon/pause.png)"
        giveInformations()
    } else {                                        //              BOUTON PLAY - PAUSE 
        button_play.value = "Play";
        sound.pause();
        document.getElementById('play').style.backgroundImage="url(/src/icon/play-button.svg)"
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
    giveInformations()
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
}

function giveInformations() {
    ID3.loadTags("filename.mp3", function() {
        var tags = ID3.getAllTags(sound);
        alert(tags.artist + " - " + tags.title + ", " + tags.album);
    });
}
