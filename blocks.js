class Block{
    constructor(x, y, width, height) {
        var options = {
         'restitution':0.4,
         
                   
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
 
        World.add(world, this.body);
        
    }
      display(){
        console.log(this.body.speed);

        var pos= this.body.position;
        push();
        stroke("orange");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);

        pop();
      }  
}