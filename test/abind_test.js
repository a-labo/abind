/**
 * Test case for abind.
 * Runs with mocha.
 */
'use strict'

const abind = require('../lib/abind.js')
const assert = require('assert')
const co = require('co')

describe('abind', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Abind', () => co(function * () {

    class Talker {
      constructor (name) {
        const s = this
        s.name = name
        abind(s)
      }

      sayHi () {
        const s = this
        return `Hi, i'm ${s.name}`
      }
    }

    let { sayHi } = new Talker('Tom')
    assert.equal(sayHi(), "Hi, i'm Tom")
  }))
})

/* global describe, before, after, it */
