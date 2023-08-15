const playlist = [
  'Miss Americana and the heartbreak prince',
  "Don't blame me",
  'Delicate',
  'Fearless',
  'Enchanted',
  'The archer',
  "Betty",
  "Shake it off"
];

function createListItems(arr){
  let html='';
  for (let i=0; i < arr.length; i++){
    html += `
      <li>${arr[i]}</li>
    `;
  }
  return html;
}

document.querySelector('main').innerHTML = `
  <h1></h1>
  <ol>
    ${createListItems(playlist)}
  </ol>
`;
