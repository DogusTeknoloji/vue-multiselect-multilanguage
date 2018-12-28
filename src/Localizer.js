export default class Localizer {
  static setLanguage (userLanguage, langData) {
    Localizer.userLanguage = userLanguage
    if (langData) {
      Localizer.langData = langData
    } else {
      Localizer.langData = require('../locale/' + Localizer.userLanguage + '.json')
    }
  }

  static translate (key) {
    if (!Localizer.langData) {
      Localizer.langData = require('../locale/' + Localizer.userLanguage + '.json')
    }
    return (Localizer.langData && Localizer.langData[key]) || key
  }
}

Localizer.userLanguage = 'en'
