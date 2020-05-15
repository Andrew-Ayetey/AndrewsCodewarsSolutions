var leftScoreboard = {
  "w" : 4,
  "p": 3,
  "b":2,
  "s":1
}

var rightScoreboard = {
  "m" : 4,
  "q" : 3,
  "d" : 2,
  "z" : 1
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

function alphabetWars(string){
  let rightScore = counter(rightScoreboard, string)
  let leftScore = counter(leftScoreboard, string)
  if (rightScore > leftScore){
    return "Right side wins!"
  }
  else if (leftScore > rightScore){
    return "Left side wins!"
  }
  else {return "Let's fight again!"}
}

