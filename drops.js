class Drop{
    constructor(x, y, r){
        var options = {
            'friction':1.0
        } 
        this.body = Bodies.circle(x, y, r, options);
        this.r = r; 
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
    ellipse(pos.x, pos.y, this.r);
    }
    update(){
        if(this.body.positionY > height){
            Matter.Body.setPositon(this.rain, {x:random(0, 200), y:random(0, 400)})
        }
    }
  };
