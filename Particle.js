class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0,
            friction: 10000005,
            density: 225
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color("white");
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(pos.x,pos.y);
       
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}
