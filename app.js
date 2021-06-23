const DOMAIN = "https://api.openbrewerydb.org/breweries?by_state=";

const searQuries = [];

let text = document.querySelector ('#search')
let input = document.querySelector('#blank')
text.addEventListener('click', storeText)

let article = document.querySelector('aritcle')

function storeText() {
  getState(input)
  console.log(input)
}

async function getState(input) {
  try {
    const response = await axios.get(`${DOMAIN}s=${input.value}`);
    let breweryList = response.data.Search;
    console.log(breweryList);
    let i = 0;
    while (breweryList.length > i) {
      console.log(breweryList)
      let breweryDiv = document.createElement('div')
      ariticle.append(breweryDiv)
      breweryDiv.classList.add('brewery')
      breweryDiv.textContent = breweryList(i).Name
    }

  } catch (error) {
    console.error(error)
  }
}