class hexagon{
    constructor() {
    var options = {
    restitution:1,
    density:1,
              
        }
        polygon_img=loadImage("polygon.png")
     this.polygon = Bodies.circle(50,100,20,options);
     
     World.add(world, this.polygon);
      }
      display(){
        imageMode(CENTER);
        push();
        image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);
        pop();
      }
}