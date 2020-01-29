export const getDataFromCache = (key: string) => {
  const localStorageData = localStorage.getItem(key)
  if (localStorageData) {
    const expiryDate = JSON.parse(localStorageData).expiry
    if (new Date() < expiryDate) {
      return JSON.parse(localStorageData).data
    }
  }
  console.log('accessing local storage')
  return null
}

export const updateCache = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify({ data, expiry: new Date().setHours(24, 0, 30, 0) }))
  console.log('writing on local storage')
}
