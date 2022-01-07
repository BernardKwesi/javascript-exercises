const ftoc = function(fahren) {
    let celcius = (fahren -32) *(5/9);
    celcius = Math.round(celcius *10)/10;
    return celcius;
};

const ctof = function(celcius) {
  let fahren = (celcius * (9/5))+32;
  fahren = Math.round(fahren *10)/10;
  return fahren;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
