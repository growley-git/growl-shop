import moment from 'moment'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      moment: (date, format) => moment(date).format(format),
      currency: (amount, format = 'USD') => {
        const value = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: format,
        })
        return value.format(amount)
      }
    }
  }
})
