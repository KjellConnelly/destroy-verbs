const verbs = require('./verbs.js')

class DestroyVerbs {
  static rand(inputOptions) {
    const options = {
      tense:inputOptions.tense || 'present',
      ignore:inputOptions.ignore || [],
    }
    let randomIndex = DestroyVerbs.getRandomIndex()
    while ((verbs[randomIndex][options.tense].length == "") || options.ignore.includes(verbs[randomIndex].present)) {
      randomIndex = DestroyVerbs.getRandomIndex()
    }
    return verbs[randomIndex][options.tense]
  }

  static getRandomIndex() {
    return Math.floor(Math.random()*verbs.length)
  }
}

module.exports = DestroyVerbs
