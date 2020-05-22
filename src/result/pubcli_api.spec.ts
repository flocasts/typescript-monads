import { Result, fail, ok, result } from './public_api'

describe('result api', () => {
  it('should export', () => {
    expect(fail(Error('Test'))).toBeInstanceOf(Result)
    expect(ok(1)).toBeInstanceOf(Result)
    expect(result(() => true, 1, Error('Test'))).toBeInstanceOf(Result)
  })
})
