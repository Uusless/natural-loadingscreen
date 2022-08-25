console.log('Natural [LOADINGSCREEN] | Loading....')

// For the song this is changed in the src/mp3/ replace song.mp3 by the one you 
// want but it has to have the same name if you want to complicate your life and put 
// another name then change the location of the new Audio('src/mp3/song.mp3') and instead 
// of song.mp3 put the name of the mp3 of the song you have don't complicate your life just change your name from song to song :D

var song = new Audio('src/mp3/song.mp3')
var mth = Math.round(Math.random() * (5 - 1) + 1)
song.play()
song.volume = 0.65;



// NOT WORK THIS IS A UPDATE IN V 0 . 0 . 2
// V 0 . 0 . 2
// function random() {
//     mth
// }
// setTimeout(() => {
//     if (mth == 1) {
//         $('.information').html('dada')
//     }
// }, 3500);

// setInterval(function(){ 
//     random()
//     console.log(mth)
//     }, 
//   5000);

var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.-b').style.left = '0%';
        document.querySelector('.-b').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.-b').style.left = '0%';
        document.querySelector('.-b').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function(e) {
    (handlers[e.data.eventName] || function() {})(e.data);
});