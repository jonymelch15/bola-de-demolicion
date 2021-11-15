class rope{
	constructor(body1,point1)
	{
		
		var options={
			bodyA:body1,
		
			pointB:point1,
            stiffness: 1.2, 
            length: 250
		}
		//console.log(opciones);
        this.pointB=point1;
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB;
        push();
		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
	}

}