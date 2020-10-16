const calculateAge = (yearOfBirth, currentYear) => {
  const age = currentYear - yearOfBirth
  return age
}

const updateDomWithAge = event => {
  event.preventDefault()
  const currentYear = new Date().getFullYear()
  const yearOfBirth = document.querySelector('.year-of-birth').value
  const userAge = calculateAge(yearOfBirth, currentYear)

  const resultElement = document.querySelector('.result')
  resultElement.innerText = `You are ${userAge} years old!`
}

module.exports = { calculateAge, updateDomWithAge }
