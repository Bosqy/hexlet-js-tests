import capitalize from '../src/capitalize.js';

if (capitalize(undefined) !== null) {
  throw new Error('Функция работает неверно!');
};

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');
