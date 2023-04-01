let playIcon = document.querySelectorAll('i');
let audioElems = document.querySelectorAll('audio');
let pauseAll = document.querySelector('.pauseAll');
// playIcon.forEach((icon) => {
//     icon.addEventListener('click', () => {
//         console.log(icon.nextElementSibling);
//         audioElems.forEach( function(audio) {
//             audio.pause()
//         });
//         console.log(audioElems);
//         icon.nextElementSibling.play();
//     })
// });
let musicName;
playIcon.forEach( function(icon) {
    icon.addEventListener('click', function() {
        musicName = icon.dataset.name;
        audioElems.forEach(function(audio){
            if(audio.dataset.name === musicName) {
                // if we like to pla it from first
                audio.currentTime  = 0;
                audio.play();
            }
            else{
                audio.pause();
            }
        })
    })
})


// pause all in a sec
pauseAll.addEventListener('click', function() {
    audioElems.forEach(function(audio) {
        audio.pause();
    })
})