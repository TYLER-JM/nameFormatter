const nameInverter = function(name) {
  return name.trim().split(" ").reverse().join(", ");
};

console.log(nameInverter("john prine"));

module.exports = nameInverter;
