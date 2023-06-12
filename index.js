let feet=199
function scuberGreetingForFeet(feet){ 
  if (feet <= 400) {
    return `This one is on me`
  } else if (feet >= 2000) {
    return `I will gladly take your thirty bucks`
  } else if (feet >= 2500) {
    return `no can do!`
  }
}

let city = `NYC`
function ternaryCheckCity(city){
  return ( city=`NYC` ? `OK Sounds good` : `No Go !`)
}

let tip=`generous`
let gratitude
function switchOnCharmFromTip(tip){
  switch (tip) {
    case `generous` :
      gratitude = `Thank you so much`;
      break
      case `not generous` :
        gratitude = `Thank you`;
        break
        default:
          gratitude = `Thanks for everything. Bye!`;

  }
} 

console.log (ternaryCheckCity(`NYC`))
console.log(scuberGreetingForFeet(2000))
console.log(switchOnCharmFromTip(`generous`))