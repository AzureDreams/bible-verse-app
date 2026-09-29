// MILESTONE 1: show today's date in #date ()
const dateElement = document.querySelector('#date');//target date element so i can use js on it
const today = new Date();//create new date objects that pulls date and time from browser
// take current date object and format it
const formatted = today.toLocaleDateString('en-US', {
  weekday: 'long',
  month:'long',
  day: 'numeric',
  year:'numeric'
});
dateElement.textContent = formatted; //change date elements text to read the formatted date
console.log(dateElement);

// MILESTONE 2: fetch a verse and display it
async function getVerse() {
  const response = await fetch('https://bible-api.com/john+3:16'); // fetch the verse from api 
  const data = await response.json(); // take the raw data from api and turn it(parse) into a js object 
  document.querySelector('#verse').textContent = data.text; // take the verse data and render on page
  document.querySelector('#reference').textContent = data.reference; // take the refrence data and render on page;

  
}

// MILESTONE 3: pick the verse based on today's date
// ( keep a small array of references, use the date to choose one)

// MILESTONE 4: handle loading + errors
// (try/catch around  fetch)

// MILESTONE 5: wire up the buttons
// #new-verse -> fetch a different verse
// #copy -> copy verse text to clipboard ( navigator.clipboard)

getVerse();
