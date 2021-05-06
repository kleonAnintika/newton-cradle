class Bob {
    constructor(x, y, Radius) {
      var options = {
          'restitution':0.8,
          isStaic: false,
          'friction':1,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, Radius, options);
      this.x= x,
      this.y= y,
      this.Radius= Radius,
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.Radiua, this.Radius);
      pop();
    }
  };
  