// tslint:disable-next-line:no-implicit-dependencies
import { assert } from 'chai';
import { Queue } from '../src/index';

describe('A queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue(2);
  });

  it('should be empty after creation', () => {
    assert.isTrue(queue.isEmpty());
  });

  it('should have available workers after creation', () => {
    assert.isTrue(queue.isAvailable());
  });

  it('should execute each task', (done: MochaDone) => {
    let n = 0;
    function inc(): void {
      n++;
      if (n === 4) {
        done();
      }
    }

    for (let i = 0; i < 4; i++) {
      queue.add(() => inc());
    }
  });

  it('should call back when done', (done: MochaDone) => {
    queue.onEmpty(() => {
      assert.isTrue(queue.isEmpty());
      done();
    });
    for (let i = 0; i < 2; i++) {
      queue.add(() => { /* noop */});
    }
  });
});
