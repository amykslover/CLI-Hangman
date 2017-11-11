var Person = function(firstName,lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.fullName = function() {
    return this.firstName + this.lastName;
  };
};

var newPerson = new Person('Amy', 'Slover');

console.log(newPerson);