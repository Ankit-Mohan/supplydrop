class Log
{
    constructor (x,y,height,width)
    {
        var options = 
        {
          restitution : 0.0,
          friction : 100000000000.0

        }

    this.body = Bodies.rectangle(x,y,height,width,options);

    World.add(world,this.body);
    this.width =width;
    this.height=height;
    }
display()
{
    var pos = this.body.position;
    push();
    translate (pos.x,pos.y);
    rectMode (CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
}

}