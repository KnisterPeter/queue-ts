export class Queue {

  private concurrency: number;

  private workers: Promise<any>[] = [];

  private tasks: Function[] = [];

  private emptyCallback: Function;

  constructor(concurrency: number) {
    this.concurrency = concurrency;
    for (let i = 0; i < concurrency; i++) {
      this.workers[i] = Promise.resolve();
    }
  }

  public add(task: Function): void {
    if (this.isAvailable()) {
      this.schedule(task);
    } else {
      this.tasks.push(task);
    }
  }

  private schedule(task: Function): void {
    const worker = this.workers.pop();
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

  public isAvailable(): boolean {
    return this.workers.length > 0;
  }

  public isEmpty(): boolean {
    return this.tasks.length === 0 && this.workers.length === this.concurrency;
  }

  public onEmpty(emptyCallback: Function): void {
    this.emptyCallback = emptyCallback;
  }

}
