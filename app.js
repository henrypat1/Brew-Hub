// const DOMAIN = "https://api.openbrewerydb.org/breweries?by_state=";


const form = document.querySelector('form')
const breweryData = document.querySelector('#brewery-data')

// function reload() {
//   location.reload()
// }
function removeResulsts(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  removeResulsts(breweryData)
  const input = document.querySelector('#state-input').value
  console.log(input)
  getState(input)
})


async function getState(state) {
  try {
    const DOMAIN = `https://api.openbrewerydb.org/breweries?by_state=${state}`;
    const response = await axios.get(DOMAIN);
    
    response.data.forEach((brewery) => {
      console.log(brewery)
      const breweryName = document.createElement('h1')
      const breweryStreet = document.createElement('h3')
      const breweryPhone = document.createElement('h3')
      const brewerySite = document.createElement('h3')
      const type = document.createElement('h3')
      breweryName.textContent = brewery.name
      breweryStreet.textContent = brewery.street
      breweryPhone.textContent = brewery.phone
      brewerySite.textContent = brewery.website_url
      type.textContent = brewery.brewery_type
      breweryData.append(breweryName)
      breweryData.append(breweryStreet)
      breweryData.append(breweryPhone)
      breweryData.append(brewerySite)
      breweryData.append(type)
      
    })

  } catch (error) {
    console.error(error)
  }
  
}

