let joe_family_age = new Map([
  ["joes_age", 21],
  ["mamas_age", 69],
]);

// value then key is passed.... in case of forEacj

joe_family_age.forEach((value, key) => {
  console.log(`${key} is ${value} years.`);
});

// get a value of a particular key...

console.log("Joes Age is", joe_family_age.get("joes_age"));

// check if a particular key exists in a Map
console.log(
  "DOES JOE's PAPAS age exist ?",
  joe_family_age.has("papas_age")
    ? "Yes"
    : "No. He was last seen at a local milk shop."
);

// delete a key
//joe_family_age.delete("<your_key>")
