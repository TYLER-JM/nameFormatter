const nameInverter = function(name) {
  return name.trim().split(" ").reverse().join(", ");
};

module.exports = nameInverter;
