import Localizer from './Localizer'

export default {
  methods: {
    setLanguage (userLanguage, langData) {
      Localizer.setLanguage(userLanguage, langData)
    },
    translate (key) {
      return Localizer.translate(key)
    }
  }
}
