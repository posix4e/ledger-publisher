const platforms = [
  'bilibili',
  'blogger',
  'blogspot',
  'craigslist',
  'facebook',
  'github',
  'imgur',
  'instagram',
  'linkedin',
  'livejournal',
  'medium',
  'pinterest',
  'quora',
  'slack',
  'stackoverflow',
  'twitter',
  'vk',
  'xvideos',
  'youku',
  'youtube',
  'ello',
  'nextdoor'
]

module.exports = {
  retrieve: function (cb) {
    cb(null, platforms)
  },

  build: function (cb) {
    const transformedList = platforms.map((item) => { return `'${item}'` }).join(', ')
    const rule = {
      condition: `(new Set([ ${transformedList} ])).has(SLD.split('.')[0])`,
      consequent: null,
      description: 'exclude platforms'
    }
    cb(null, rule)
  }
}
