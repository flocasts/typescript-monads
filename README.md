<h1 align="center" style="border-bottom: none;">📚 typescript-monads</h1>
<h3 align="center">Better TypeScript Control Flow</h3>
<p align="center">
  <a href="https://circleci.com/gh/patrickmichalina/typescript-monads">
    <img alt="circeci" src="https://circleci.com/gh/patrickmichalina/typescript-monads.svg?style=shield">
  </a>
  <a href="https://codeclimate.com/github/patrickmichalina/typescript-monads/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/f40c9fff2927e49c3ea2/test_coverage" />
  </a>
  <a href="https://codeclimate.com/github/patrickmichalina/typescript-monads/maintainability">
    <img alt="codeclimate" src="https://api.codeclimate.com/v1/badges/f40c9fff2927e49c3ea2/maintainability">
  </a>
</p>
<p align="center">
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://www.npmjs.com/package/typescript-monads">
    <img alt="npm latest version" src="https://img.shields.io/npm/v/typescript-monads/latest.svg">
  </a>
</p>

**typescript-monads** helps you write safer code by using abstractions over messy control flow and state.

# Installation
You can use this library in the browser, node, or a bundler

## Node or as a module
```bash
npm install typescript-monads
```

## Browser
```html
<head>
 <script src="https://unpkg.com/typescript-monads"></script>
 <!-- or use a specific version to avoid a redirect --> 
 <script src="https://unpkg.com/typescript-monads@4.1.0/index.min.js"></script>
</head>
```

```js
var someRemoteValue;
typescriptMonads.maybe(someRemoteValue).tapSome(console.log)
```

# Example Usage

* [Maybe](#maybe)
* [List](#list)
* [Either](#either)
* [Reader](#reader)
* [Result](#result)

# Maybe
```ts
import { maybe } from 'typescript-monads'

// safely map values
let maybeVisitedBeforeXTimes: number | undefined = 50

const priceWithDiscountForLoyalty = maybe(maybeVisitedBeforeXTimes)
  .match({
    some: visits => 15.00 - visits * 0.1,
    none: () => 15.00
  })

// handle multiple maybe conditions together
const canRideCoaster = getAge() // Maybe<number>
  .map(age => getTicket(age)) // Maybe<Ticket>
  .match({
    some: ticket => ticket.canRide('coaster1'),
    none: () => false
  })

// operations with side-effects
maybe(process.env.DB_URL)
  .tap({
    some: dbUrl => {
      // value exists, can connect
    },
    none: () => console.info('no url provided, could not connect to the database')
  })
```

## List
TODO

## Either
TODO

## Reader
TODO

## Result
TODO
