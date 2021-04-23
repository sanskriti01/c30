class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
display(){
  console.log(this.body.speed);
  if((this.body.speed)<3){
    super.display();
  }
else{
//we have to remove the pig object from the world
World.remove(world,this.body);
push();
//pop();
this.Visibility = this.Visibility - 3;
tint(255,this.Visibility);
image (this.image,this.body.position.x-this.body.position.y,50,50)
pop();


}
}
};