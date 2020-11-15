class Dustbin {

    constructor(x,y){

        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.thickness=20;
        this.angle=0;

     var option ={
     isStatic:true
     }
        this.leftbody=Bodies.rectangle(this.x-100,this.y-50,20,100,option);
        this.rightbody=Bodies.rectangle(this.x+100,this.y-50,20,100,option);
        this.bottombody=Bodies.rectangle(this.x,this.y,200,20,option);
        
        Matter.Body.setAngle(this.leftbody,this.angle);
        Matter.Body.setAngle(this.rightbody,-1*this.angle);
        World.add(world,this.leftbody);
        World.add(world,this.rightbody);
        World.add(world,this.bottombody);
    }

    display(){

        var pos1=this.leftbody.position;
        var pos2=this.rightbody.position;
        var pos3=this.bottombody.position;

        push();
        translate(pos1.x,pos1.y);
        rotate(this.angle);
        rectMode(CENTER);
         fill("white");
         rect(0,0,this.thickness,this.height);
        pop();
    
        push();
        translate(pos2.x,pos2.y);
        rotate(-1*this.angle);
        rectMode(CENTER);
         fill("white");
         rect(0,0,this.thickness,this.height);
        pop();

        push();
        translate(pos3.x,pos3.y);
        rectMode(CENTER);
         fill("white");
         rect(0,0,this.width,this.thickness);
        pop();
      
    }
}