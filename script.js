const stupneFahrenheita = Number(prompt("zadej počet stupňů Fahrenheita"))
let prevodnastupneCelsia = 5*(stupneFahrenheita - 32)/9
prevodnastupneCelsia = Math.round(prevodnastupneCelsia)


document.body.innerHTML = "<p>stupně Fahrenheita: " + stupneFahrenheita + "</p>"
document.body.innerHTML += "<p>stupně Celsia: " + prevodnastupneCelsia + "</p>"




