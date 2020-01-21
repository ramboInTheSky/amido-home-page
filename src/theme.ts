export type Theme = {
  [key: string]: string
}

export const theme: Theme = {
  gutter: '1rem',
  resultLineHeight: '2rem',
  searchBoxHeight: '45rem',
  borderRadius: '0.5rem'
}

export const remToNumber = (rem: string) => {
  const number = rem.split('rem')[0]
  return parseFloat(number) * parseFloat(getComputedStyle(document.documentElement).fontSize)
}
export default theme
