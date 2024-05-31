
class JumpyMammals {
  eat() {
    console.log("I eat !");
  }
}




class Rabbit extends JumpyMammals {
  color = "Red";
  weight = 21;
}



class Kangaroo extends JumpyMammals {
  colors = "Red";
  weights = 21;
}



const h = new Kangaroo();

h.eat();