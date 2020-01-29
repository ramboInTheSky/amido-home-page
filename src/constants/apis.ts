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
console.log(process.env.NODE_ENV)
export default process.env.NODE_ENV === 'development' ? developmentAPIs : productionAPIs
