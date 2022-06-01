const keys = document.querySelectorAll('.key');
const WHITE_KEYS = ['a','b','c','d','e','f','g'];
const BLACK_KEYS = ['h','j','k','l','m'];

keys.forEach((key)=>{
    key.addEventListener('click', ()=>{playNote(key)})
})

function playNote(key){
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended',()=>{
        key.classList.remove('active');
    })
}
document.addEventListener('keydown',(event)=>{
    const key = event.key;
    const whitekeys = document.querySelectorAll('.key.white');
    const blackkeys = document.querySelectorAll('.key.black');

    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex > -1){
        playNote(whitekeys[whiteKeyIndex])
    }
    if(blackKeyIndex > -1){
        playNote(blackkeys[blackKeyIndex])
    }


})




// const WHITE_KEYS = ['a','b','c','d','e','f','g']
// const BLACK_KEYS = ['h','k','l','n','u']

// const keys = document.querySelectorAll('.key');
// const whitekeys = document.querySelectorAll('.key.white');
// const blackkeys = document.querySelectorAll('.key.black');

// keys.forEach( key =>{
//     key.addEventListener('click', ()=> playNote(key))
// })

// function playNote(key){
//     const noteAudio = document.getElementById(key.dataset.note);
//     noteAudio.currentTime = 0;
//     noteAudio.play();
//     key.classList.add("active");
//     noteAudio.addEventListener('ended',()=>{
//         key.classList.remove('active');
//     })
// }

// document.addEventListener('keydown', event=>{
//     const key = event.key;
//     const whiteKeyIndex = WHITE_KEYS.indexOf(key);
//     const blackKeyIndex = BLACK_KEYS.indexOf(key);

//     if(whiteKeyIndex > -1){
//         playNote(whitekeys[whiteKeyIndex])
//     }
//     if(blackKeyIndex > -1){
//         playNote(blackkeys[blackKeyIndex])
//     }

// })