# immutable-array.push

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`immutable-array.push` provides a function that returns the concatenation of an immutable array with an item.

## Install

``` bash
$ npm install immutable-array.push --save
```

## Usage
``` javascript
const ImmutableArray = {
    of: require('immutable-array.of'),
    push: require('immutable-array.push')
}

const a = ImmutableArray.of([1, 2, 3, 4, 5]) // {array: [1, 2, 3, 4, 5], length: 5}
const b = ImmutableArray.push(6, a) // {array: [1, 2, 3, 4, 5, 6], length: 6}
a // {array: [1, 2, 3, 4, 5, 6], length: 5}
```

## Other related libraries
- [immutable-array.of]()
- [immutable-array.every]()
- [immutable-array.reduce]()
- [immutable-array.findIndexFrom]()

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/immutable-array.push.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/immutable-array.push
  [3]: https://badge.fury.io/js/immutable-array.push.svg
  [4]: https://badge.fury.io/js/immutable-array.push
  [5]: https://coveralls.io/repos/github/xgbuils/immutable-array.push/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/immutable-array.push?branch=master
  [7]: https://david-dm.org/xgbuils/immutable-array.push.svg
  [8]: https://david-dm.org/xgbuils/immutable-array.push
