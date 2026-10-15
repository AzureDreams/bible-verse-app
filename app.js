const dateElement = document.querySelector('#date');//target date element so i can use js on it later
const today = new Date();//create new date object that pulls date and time from browser
// take current date object and  convert to a formatted string 
const formatted = today.toLocaleDateString('en-US', {
  weekday: 'long',
  month:'long',
  day: 'numeric',
  year:'numeric'
});
dateElement.textContent = formatted; //change date elements text to read the formatted date

//Fetch verse and display it /try and catch to handle errors
async function getVerse() {
  try{
  const response = await fetch('https://bible-api.com/' + verses[index]); // fetch the verse from api 
  const data = await response.json();// take the raw data from api and turn it(parse) into a js object 
document.querySelector('#verse').textContent = data.text; // take the verse data and render on page
  document.querySelector('#reference').textContent = data.reference;} // take the refrence data and render on page;
  catch(error){
    document.querySelector('#verse').textContent = 'An error has occured, please try again.';
  } 
  
  


}


const verses = ['john+3:16', 'psalms+23:1', 'romans+8:28', 'matthew+24:14','philippians+4:13'];// list of verse refrences
const index = today.getDate() % verses.length; //grab todays date by and use modulo to determine which verse gets picked




// MILESTONE 5: wire up the buttons
// #new-verse -> fetch a different verse
// #copy -> copy verse text to clipboard ( navigator.clipboard)

getVerse();
