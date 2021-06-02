//html components
gameCanvas = document.getElementById("snakeGame")
gameCtx = gameCanvas.getContext("2d")

class SnakeGame {
    constructor(canvas) {
        //handle key events
        const keyhandler = this.handleKeyPresses
        window.addEventListener("keydown", keyhandler, false)

        //canvas
        this.canv = canvas

        //initializing variables
        this.direction = [0, 0]
        this.squareSize = 25
        this.sideLength = 20
    }

    handleKeyPresses(e) {
        //change direction based on key pressed
        switch (e.keyCode) {
            case 39: 
                this.direction = [1, 0]
                this.drawSquare(1,2)
                break
            case 37: this.direction = [-1, 0]; break;
            case 38: this.direction = [0, -1]; break
            case 40: this.direction = [0, 1]; break
        }
    }

    drawSquare(x, y) {
        var trueX = x*this.squareSize
        var trueY = y*this.squareSize

        this.canv.fillRect(trueX, trueY, this.squareSize, this.squareSize)
    }


}

const game = new SnakeGame(gameCtx)