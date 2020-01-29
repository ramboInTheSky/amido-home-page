export const productionAPIs = Object.freeze({
  quote: '/.netlify/functions/quote',
  search: '/.netlify/functions/search',
  allSpaces: '/.netlify/functions/allspaces',
  searchByLabel: '/.netlify/functions/searchbylabel',
})

export const developmentAPIs = Object.freeze({
  quote: '/quote',
  search: '/search',
  allSpaces: '/allspaces',
  searchByLabel: '/searchbylabel',
})
console.log(process.env.NODE_ENV)
export default process.env.NODE_ENV === 'development' ? developmentAPIs : productionAPIs
