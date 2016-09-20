const rules = require('../categories')
const tap = require('tap')
const _ = require('underscore')

tap.ok(rules.modules().length > 0, 'returns list of modules')

rules.modules().forEach(function (module) {
  const m = require('../categories/' + module)
  tap.ok(m.retrieve, 'retrieve function available for ' + module)
  tap.ok(m.build, 'build function available for ' + module)
})

const topLevelIndex = require('../index')
tap.ok(_.isFunction(topLevelIndex.getRules, 'all function exposed'))

tap.end()
