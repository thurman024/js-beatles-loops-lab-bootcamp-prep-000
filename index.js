function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (let i=0; i<musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts) {
  for (let i=0; i<facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}