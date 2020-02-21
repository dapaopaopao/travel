let defaultCity = "北京"

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { 1 }

export default {
  city: defaultCity
}