# destroy-verbs

This package is useful for randomly generating certain verbs such as 'destroy' or 'demolish' for text based games.

## Install
`npm i damage-verbs --save`

## Usage

```javascript
  const dv = require('destroy-verbs')
  const heroName = "Lancelot"

  function defeatEnemy(enemyName) {
    alert(heroName + " " + dv.rand({tense:'past'}) + " " + enemyName + " with a swipe of his sword.")
  }

  defeatEnemy("the Demagorgon")
  // "Lancelot obliterated the Demagorgon with a swipe of his sword.
```

### dv.rand(options)
| key | required | type | extras |
|-----|----------|------|--------|
|tense|    ✓     |string|Must be `past`, `present`, or `ing` |
|ignore|         |array of strings|ignore certain 'present' strings, although it'll ignore all tenses for that word. Just make sure to input an array of present tense strings. ie: `["destroy","decimate"]` |

For example:
```javascript
// You may not want certain verbs from the list to show up. By putting destroy (the present tense form of the word), destroy, destroyed, and destroying will not show up.
const verbsToIgnore = ["destroy","decimate"]
for (let i = 0; i < 10; i++) {
  const verb = dv.rand({
    tense:'ing',
    ignore:verbsToIgnore
  })
  console.log(verb)
}
```

## Other
Feel free to add other tenses and/or verbs as pull requests. I'm just adding the sort of text I need for my current project and thought someone else, or even I, may need to use this sort of class again in the future.
