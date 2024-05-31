let joe = {
  NAME: "JOE MAMA",
  MOTHER_NAME: "MAMA JOE",
  FATHER_NAME: "PAPA JOE",
  AGE: 21,
  shitPost: function () {
    console.log(
      `Real Shitposting by ${this.NAME} son of ${this.MOTHER_NAME} and ${this.FATHER_NAME}`
    );
  },
};

joe.shitPost();
