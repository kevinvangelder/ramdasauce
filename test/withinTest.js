import test from 'ava'
import RS from '../lib/'

const is200s = RS.within(200, 299)

test('within', (t) => {
  t.true(is200s(200))
  t.true(is200s(200.1))
  t.true(is200s(299))
  t.false(is200s(199))
  t.false(is200s(299.1))
  t.false(is200s(300))
  t.false(is200s(null))
  t.false(RS.within(null, null, null))
})
