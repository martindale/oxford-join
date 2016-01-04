function oxfordJoin(array) {
  if (!(array instanceof Array)) {
    throw new Error('You must provide an array.');
  }

  var string = '';
  if (array.length >= 3) {
    string = array.slice(0, -1).join(', ') + ', and ' + array[array.length-1];
  } else if (array.length == 2) {
    string = array.join(' and ');
  } else {
    string = array.join();
  }
  return string;
}

module.exports = oxfordJoin;
