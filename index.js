function iterativeLog(array) {
  array.forEach(function(element,i) {
    console.log( `${i}: ${element}` )
  })
}

function iterate(callback) {
  var array = [0,1,2,3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
