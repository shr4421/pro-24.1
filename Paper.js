class Paper {

constructor(x,y,radius){

    var options={

        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    
    }
    this.body=Bodies.circle(x,y,radius/2,options);
    this.radius=radius;
    this.x=x;
    this.y=y;
    World.add(world,this.body);

}

display(){

    var Paperpos=this.body.position;

    push();
    translate(Paperpos.x,Paperpos.y);
    rectMode(CENTER);
     fill("#C71585");
     ellipse(0,0,this.radius,this.radius);
    pop();

}



}