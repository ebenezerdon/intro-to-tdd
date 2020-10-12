const calculateAge = yearOfBirth => {
  const currentYear = new Date().getFullYear()
  const age = currentYear - yearOfBirth
  return age
}

const updateDomWithAge = event => {
  event.preventDefault()
  const yearOfBirth = document.querySelector('.year-of-birth').value
  const userAge = calculateAge(yearOfBirth)

  const resultElement = document.querySelector('.result')
  resultElement.innerText = `You are ${userAge} years old!`
}

module.exports = { calculateAge, updateDomWithAge }
