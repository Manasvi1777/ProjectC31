class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution:0.4,
          friction:0.4,
          //isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=255;
    }
    display(){
      if (this.body.speed<5){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world, this.body);
     /*push();
     this.Visiblity = this.Visiblity - 5;
     fill(255,this.Visiblity);
     rect(this.body.position.x, this.body.position.y,width,height);
     pop();*/
      }
    }
  }