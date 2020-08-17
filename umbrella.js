class Umbrella{
    constructor(x, y, r){
        var options = {
            'friction':1.0,
            isStatic:true
        } 
        this.body = Bodies.circle(x, y, r, options);
        this.r = r; 
        this.image = loadImage("image");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
      image(pos.x, pos.y, this.r);
      }
      
}