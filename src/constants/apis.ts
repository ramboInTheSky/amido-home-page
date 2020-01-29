export const productionAPIs = Object.freeze({
  search: '/.netlify/functions/search',
  allSpaces: '/.netlify/functions/allspaces',
  searchByLabel: '/.netlify/functions/searchbylabel',
})

export const developmentAPIs = Object.freeze({
  search: '/search',
  allSpaces: '/allspaces',
  searchByLabel: '/searchbylabel',
})

export default developmentAPIs
