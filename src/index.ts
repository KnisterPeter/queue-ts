export type Fn = (...args: any[]) => any;

export class Queue {

  private readonly concurrency: number;

  private readonly workers: Promise<any>[] = [];

  private readonly tasks: Fn[] = [];

  private emptyCallback: Fn;

  constructor(concurrency: number) {
    this.concurrency = concurrency;
    for (let i = 0; i < concurrency; i++) {
      this.workers[i] = Promise.resolve();
    }
  }

  public isAvailable(): boolean {
    return this.workers.length > 0;
  }

  public isEmpty(): boolean {
    return this.tasks.length === 0 && this.workers.length === this.concurrency;
  }

  public onEmpty(emptyCallback: Fn): void {
    this.emptyCallback = emptyCallback;
  }

  public add(task: Fn): void {
    if (this.isAvailable()) {
      this.schedule(task);
    } else {
      this.tasks.push(task);
    }
  }

  private schedule(task: Fn): void {
    const worker = this.workers.pop();
    // tslint:disable-next-line:no-floating-promises
    worker.then(() => {
      return task();
    }).then(() => {
      this.workers.push(worker);
      if (this.tasks.length > 0) {
        this.schedule(this.tasks.pop());
      } else if (this.isEmpty() && this.emptyCallback) {
        this.emptyCallback();
      }
    });
  }

}
