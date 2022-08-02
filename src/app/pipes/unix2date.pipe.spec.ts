import { Unix2datePipe } from './unix2date.pipe';

describe('Unix2datePipe', () => {
  it('create an instance', () => {
    const pipe = new Unix2datePipe();
    expect(pipe).toBeTruthy();
  });
});
