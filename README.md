# queue-ts

[![Greenkeeper badge](https://badges.greenkeeper.io/KnisterPeter/queue-ts.svg)](https://greenkeeper.io/)

[![GitHub license](https://img.shields.io/github/license/KnisterPeter/queue-ts.svg)]()
[![Travis](https://img.shields.io/travis/KnisterPeter/queue-ts.svg)](https://travis-ci.org/KnisterPeter/queue-ts)
[![Coveralls branch](https://img.shields.io/coveralls/KnisterPeter/queue-ts/master.svg)](https://coveralls.io/github/KnisterPeter/queue-ts)
[![David](https://img.shields.io/david/KnisterPeter/queue-ts.svg)](https://david-dm.org/KnisterPeter/queue-ts)
[![David](https://img.shields.io/david/dev/KnisterPeter/queue-ts.svg)](https://david-dm.org/KnisterPeter/queue-ts#info=devDependencies&view=table)
[![npm](https://img.shields.io/npm/v/queue-ts.svg)](https://www.npmjs.com/package/queue-ts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A promise based worker queue with limited concurrency.

## Usage

```js
// Create a queue with two worker threads
const queue = new Queue(2);
queue.onEmpty(() => {
  console.log('done');
});

// Adding tasks to do
queue.add(function task1() {});
queue.add(function task2() {});
queue.add(function task3() {});
queue.add(function task4() {});
queue.add(function task5() {});
```

The scheduled tasks will be executed but at most `queue.concurrency` task will be executed in parallel.
