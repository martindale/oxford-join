function oxfordJoin(array) {
  if (!(array instanceof Array)) {
    array = _.toArray(array).map(function(item) {
      return item.name;
    });
  }

  var string = '';
  if (array.length <= 1) {
    string = array.join();
  } else {
    string = array.slice(0, -1).join(', ') + ', and ' + array[array.length-1];
  }
  return string;
}

module.exports = oxfordJoin;
