const kolobokCharacters = ['дедушка', 'заяц', 'лиса', 'ёжик']
const newyearCharacters = ['Дед Мороз', 'Снегурочка', 'Волк']

function kolobok(character) {
  switch (character) {
    case 'дедушка':
      return 'Я от дедушки ушёл'
    case 'заяц':
      return 'Я от зайца ушел'
    case 'лиса':
      return 'Меня съели!'
    default:
      return 'Такого персонажа в сказке не было!'
  }
}

function newYear(character) {
  switch (character) {
    case 'Дед Мороз':
    case 'Снегурочка':
      return `${character}! ${character}! ${character}!`
    default:
      return 'Такого персонажа в сказке не было!'
  }
}

kolobokCharacters.forEach(character => {
  console.log(`Герой: ${character}, результат: ${kolobok(character)}`)
})

console.log()

newyearCharacters.forEach(character => {
  console.log(`Герой: ${character}, результат: ${newYear(character)}`)
})
