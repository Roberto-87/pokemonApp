export const toUpperCaseLetter = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

export const validationStr = (value) => {
  const regexString = /^[A-Za-z]+$/
  return regexString.test(value)
}
