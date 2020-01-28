export const productionAPIs = Object.freeze({
  search: '/.netlify/functions/search',
  allSpaces: '/.netlify/functions/allspaces',
  searchByLabel: '/.netlify/functions/searchbylabel',
})

export const developmentAPIs = Object.freeze({
  search: '/search.json',
  allSpaces: '/allspaces.json',
  searchByLabel: '/searchbylabel.json',
})

export default productionAPIs
