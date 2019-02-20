# queue-ts

[![GitHub license](https://img.shields.io/github/license/KnisterPeter/queue-ts.svg)]()
[![Travis](https://img.shields.io/travis/KnisterPeter/queue-ts.svg)](https://travis-ci.org/KnisterPeter/queue-ts)
[![codecov](https://codecov.io/gh/KnisterPeter/queue-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/KnisterPeter/queue-ts)
[![npm](https://img.shields.io/npm/v/queue-ts.svg)](https://www.npmjs.com/package/queue-ts)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![renovate badge](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)

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
