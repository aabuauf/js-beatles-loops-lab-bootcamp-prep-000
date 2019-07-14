// add solution here
function theBeatlesPlay(musArray,instArray){
  var array =[]
  for (var counter = 0 ; counter < musArray.length ;counter++){
   array.push( musArray[counter] + " plays "+instArray[counter])
  }
  return array
}

function johnLennonFacts(array){
 var index = 0
  while (index<array.length){
   array[index] = array[index] + "!"
  }
  return array
}