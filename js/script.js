let audioElems = document.querySelectorAll('audio');
let playerBtns = document.querySelectorAll('.icon');
let pauseAllBtn = document.querySelector('.pauseAll');
let musicName;


pauseAllBtn.addEventListener('click', pausellHandler)
playerBtns.forEach((icon) => {
    icon.addEventListener('click', musicPlayHandler);
})

function musicPlayHandler(event) {
    musicName = event.target.dataset.name;
    audioElems.forEach((audio) => {
        if (audio.dataset.name === musicName) {
            audio.play();
        }
        else {
            audio.pause()
        }
    })
}

function pausellHandler() {
    audioElems.forEach((audio) => {
        audio.pause();
    })
}
