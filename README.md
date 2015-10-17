# jshint

> **Exhibit.js builder plugin**
>
> Lints JavaScript with JSHint.
> 
> ```sh
> $ npm install -D exhibit-builder-jshint
> ```
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

```js
  .use('jshint', options)
```

This scans JavaScript with JSHint and reports any errors found.


### Options

> **`include`** (string/array/function) — default: `'**/*.js'`

Chooses which files should be linted. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/docs/glob-convention.md).

> **`reporter`** (string/object) — default: `'jshint-stylish'` (included)

The name of a JSHint reporter module (or an actual loaded reporter object with a `reporter` method). You'll need to have installed it (except for [jshint-stylish](https://github.com/sindresorhus/jshint-stylish), which is bundled.)

> **`jshintrc`** (boolean) — default: `true`

Whether or not to look for a `.jshintrc` file as config.

> **`config`** (object) — default: `undefined`

Any additional [JSHint options](http://jshint.com/docs/options). These override any options from a `.jshintrc` file.

> **`fail`** (boolean) — default: `false`

Set this to `true` if you want lint errors to fail the build.

---

## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-jshint
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-jshint.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-jshint
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-jshint.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-jshint
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-jshint.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-jshint#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-jshint.svg?style=flat-square

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-jshint#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-jshint.svg?style=flat-square
