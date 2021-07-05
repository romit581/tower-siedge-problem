class Slingshot{
    constructor(bodyA,pointB){
      var options={
     bodyA:bodyA,
     pointB:pointB,
     stiffnes:1.2,
     length:200,
      }
      
      this.pointB=pointB
      this.sling=Constraint.create(options)
      World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    display(){
      if (this.sling.bodyA){
    var pA=this.sling.bodyA.position
    var pB=this.pointB
   line(pA.x,pA.y,pB.x+20,pB.y+100)
      }
    }
  }