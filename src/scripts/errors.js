const error = {};

error.onerror = function(e){
  console.log(e.target);
};

module.exports = error;