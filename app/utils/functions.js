export const toUpperCaseLetter = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

export const returnARandomNumber = () => {
  return Math.ceil(Math.random(1) * 10)
}
