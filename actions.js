document.addEventListener('keydown', event => {
    if (event.keyCode === 37) { // left
        playerMove(-1);
    } else if (event.keyCode === 39) { // right
        playerMove(1);
    } else if (event.keyCode === 40) { // down
        playerDrop();
    } else if (event.keyCode === 81) { // Q (counter-clockwise rotation)
        playerRotate(-1);
    } else if (event.keyCode === 87) { // W (clockwise rotation)
        playerRotate(1);
    }
});