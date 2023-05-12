export function ageCalculator (dayOfBirth, monthOfBirth, yearOfBirth) {
  const currentDate = new Date()

  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth() + 1 // Los meses van de 0 a 11
  const currentYear = currentDate.getFullYear()

  let yearsOld = currentYear - yearOfBirth
  let monthsOld = currentMonth - monthOfBirth
  let daysOld = currentDay - dayOfBirth

  // Ajustar la edad si el día actual es anterior al día de nacimiento
  if (monthsOld < 0 || (monthsOld === 0 && daysOld < 0)) {
    yearsOld--
    if (monthsOld < 0) {
      monthsOld += 12
    }
    if (daysOld < 0) {
      const lastDayPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate()
      daysOld += lastDayPreviousMonth
    }
  }

  return { yearsOld, monthsOld, daysOld }
}
