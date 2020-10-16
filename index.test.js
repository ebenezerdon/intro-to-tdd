const { calculateAge, updateDomWithAge } = require('./index')

test(`calculates a user's age`, () => {
  expect(calculateAge(2015, 2020)).toBe(5)
})

test(`displays the user's age on form submit`, () => {
  document.body.innerHTML = `
    <form class="age-form">
      <input type="number" class="year-of-birth" value=1993>
      <div class="mt-2">
        <button type="submit" class="btn btn-primary">Tell me</button>
      </div>
    </form>
    <h3 class="result"></h3>
  `

  updateDomWithAge({preventDefault: () => {}})
  const resultElement = document.querySelector('.result')
  expect(resultElement.innerText).toBe(`You are 27 years old!`)
})
