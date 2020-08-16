class Boy extends BaseClass {
    constructor(x,y){
      super(x,y,20,50);
      this.image = loadImage("boy.png");
    }
  
    display() {
      super.display();
    }
  }