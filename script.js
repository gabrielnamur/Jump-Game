const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jumpMario = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {
    
    console.log('loop')
    
    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
   
    if(pipePosition <= 30 &&  pipePosition > 0 && marioPosition < 70) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;    

        pipe.style.animation = 'none';
        pipe.style.left = `${marioPosition}px`; 
        
        mario.src = 'https://pngimg.com/uploads/game_over/game_over_PNG57.png';
        mario.style.width = '250px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', function(key){
    if(key.code == 'Space'){
        jumpMario()
    }
});
