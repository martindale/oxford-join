# oxford-join
[![Build Status](https://img.shields.io/travis/martindale/oxford-join.svg?branch=master&style=flat-square)](https://travis-ci.org/martindale/oxford-join)
[![Coverage Status](https://img.shields.io/coveralls/martindale/oxford-join.svg?style=flat-square)](https://coveralls.io/r/martindale/oxford-join)
Join an array into a string, separated with an Oxford comma.

## Use
```js
var join = require('oxford-join');
var invitations = ['the strippers', 'JFK', 'Stalin'];
var text = 'We invited ' + join(invitations) + '.';
> 'We invited the strippers, JFK, and Stalin.'.
```

## Contributions
We'll happily accept pull requests and improvements.  We'd love to achieve 100% test coverage!
