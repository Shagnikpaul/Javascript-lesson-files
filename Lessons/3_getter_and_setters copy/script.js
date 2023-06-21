class Animal {
  type = "Hex";
  constructor(age)
  {
    this._age = age;
    this._weight = 21;  // this _ is used to define that the property is protected and should not be changed...
  }
  get age()
  {
    return (this._age + "hp"); // this allows to add some logic to the return part....
  }

  set weight(w)
  {
    w = 213;
  }
}


let h = new Animal(21);
// h._age = 123; // this enforces overrite 
h.weight = 56;
console.log("W = ", h.weight);
console.log(h.age);