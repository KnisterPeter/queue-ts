import { Queue } from '../src/index';

describe('A queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue(2);
  });

  it('should be empty after creation', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should have available workers after creation', () => {
    expect(queue.isAvailable()).toBeTruthy();
  });

  it('should execute each task', (done: jest.DoneCallback) => {
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

  it('should call back when done', (done: jest.DoneCallback) => {
    queue.onEmpty(() => {
      expect(queue.isEmpty()).toBeTruthy();
      done();
    });
    for (let i = 0; i < 2; i++) {
      queue.add(() => { /* noop */});
    }
  });
});
