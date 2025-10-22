class gameObject {
    //This gets called when we do new gameObject
    //pass in the canvas object
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        this.width = 72;
        this.height = 84;
        //vx is Velocity on the X Axis
        this.vx = 10;
        //vy is Velocity on the Y Axis
        this.vy = 10;
        //Color of the object
        this.color = 'black'
        //Reference to the canvas
        this.canvas = canvas
    }

    //Renders he Object on the screen
    renderRect() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    //Moves the object
    move() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x > this.canvas.width - 50) {
            this.vx *= -1
        }
    
    
        if (this.x < 50) {
            this.vx *= -1
        }
    
    
        if (this.y > this.canvas.height - 50) {
            this.vy *= -1
        }
    
    
        if (this.y < 50) {
            this.vy *= -1
        }
    }

    //

}