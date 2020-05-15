var leftScoreboard = {
  "w" : 4,
  "p": 3,
  "b":2,
  "s":1
}


function counter(object, string){
  total = 0
  for (i in string){
    let letter = object[string[i]]
    if (letter != undefined){
      total += Number(letter)
    }
    else{}
  }
  return total
}


