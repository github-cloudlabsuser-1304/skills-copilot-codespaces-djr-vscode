//  function to covert Celsius
// to Fahrenheit
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  console.log(message);
}
// function to covert Fahrenheit
// to Celsius
function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
  console.log(message);
}
// Get command-line arguments
const args = process.argv.slice(2);
const celsius = parseFloat(args[0]);
const fahrenheit = parseFloat(args[1]);

if (!isNaN(celsius)) {
  cToF(celsius);
} else {
  console.error("Invalid Celsius input. Please provide a valid number.");
}

if (!isNaN(fahrenheit)) {
  fToC(fahrenheit);
} else {
  console.error("Invalid Fahrenheit input. Please provide a valid number.");
}