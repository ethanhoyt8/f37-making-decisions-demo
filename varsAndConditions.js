let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack < anakinAttack) {
  console.log('Anakin has a better attack than Obiwan')  
} else if (anakinAttack < obiwanAttack) {
    console.log('Obiwan has a better attack than Anakin')
} else {
    console.log('Anakin and Obiwan have the same attack')
}

let obiwanHealth = 100
let obiwanDefense = 0

//check to see if obiwan can survive an attack from anakin
//if he can, health to be decreased by anakins attack and then his new health logged
//otherwise, obiwan was slain by anakin

if (obiwanHealth >= anakinAttack) {
  //obiwanHealth = obiwanHealth -anakinAttack, this is the same as below
  obiwanHealth -= anakinAttack
  console.log('Obiwans health is now' + obiwanHealth)
} else {
  console.log('Obiwan was slain by Anakin')
}

 obiwanDefense += 30

 let coinFlip = `heads`

// if (coinFlip === `heads`) {
//   console.log(`The fight continues`)
// } else {
//   console.log('Anakin flees from Obiwan')
// }

for(let i = 0; i < 5; i++){
  if (obiwanHealth > anakinAttack - obiwanDefense) {
    obiwanHealth -= (anakinAttack - obiwanDefense)
    console.log('Obiwans health is now' + obiwanHealth)
  } else {
    console.log('Obiwan was slain by Anakin')
  }
}
  
while(obiwanHealth > 0) {
  obiwanHealth -= (anakinAttack - obiwanDefense)
  console.log(`Obiwans health is now at ${obiwanHealth}`)
  if(obiwanHealth <= 0){
    console.log('Obiwan is part of the living force now.')
  }
}