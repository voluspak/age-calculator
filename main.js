import { ageCalculator } from './ageCalculator'

const form = document.querySelector('.birthDateForm')

function handleSubmit (event) {
  event.preventDefault()

  const summaryData = new FormData(event.target)

  const dayOfBirth = summaryData.get('day')
  const monthOfBirth = summaryData.get('month')
  const yearOfBirth = summaryData.get('year')

  const { daysOld, monthsOld, yearsOld } = ageCalculator(dayOfBirth, monthOfBirth, yearOfBirth)

  const yearsDisplay = document.querySelector('.yearsDisplay')
  const monthsDisplay = document.querySelector('.monthsDisplay')
  const daysDisplay = document.querySelector('.daysDisplay')

  yearsDisplay.innerText = `${yearsOld}`
  monthsDisplay.innerText = `${monthsOld}`
  daysDisplay.innerText = `${daysOld}`
}
form.addEventListener('submit', handleSubmit)
