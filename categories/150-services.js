const domains = [
  'alipay.com',
  'amtrak.com',
  'android.com',
  'antigate.com',
  'apple.com',
  'audible.com',
  'bbsconstruction.ca',
  'bitgo.com',
  'booking.com',
  'card-data.com',
  'chase.com',
  'coccoc.com',
  'coinbase.com',
  'digitalocean.com',
  'docusign.net',
  'dreamhost.com',
  'dropbox.com',
  'duckduckgo.com',
  'entelo.com',
  'ethermine.org',
  'fastmail.com',
  'fc2.com',
  'fitbit.com',
  'flattr.net',
  'getaround.com',
  'getfinal.com',
  'gitlab.com',
  'hvaerminip.no',
  'icloud.com',
  'icoconvert.com',
  'ifttt.com',
  'instacart.com',
  'ipchicken.com',
  'ipv6-test.com',
  'keybase.io',
  'librato.com',
  'live.com',
  'mail.ru',
  'microsoft.com',
  'microsoftonline.com',
  'mlab.com',
  'nanopool.org',
  'netflix.com',
  'newrelic.com',
  'nicovideo.jp',
  'office.com',
  'ok.ru',
  'okcoin.com',
  'pagerduty.com',
  'paypal.com',
  'presents.social',
  'prometheus.io',
  'roomserviceparty.com',
  'royalbank.com',
  'ryver.com',
  'simplenote.com',
  'solanolabs.com',
  'soso.com',
  'steampowered.com',
  'storytel.no',
  'superhuman.com',
  'tdsecurities.com',
  'test-ipv6.com',
  'thecse.com',
  'toptal.com',
  'trakt.tv',
  'trycaviar.com',
  'upwork.com',
  'usefixie.com',
  'wpengine.com',
  'yelp.com',
  'zendesk.com'
]

module.exports = {
  retrieve: function (cb) {
    cb(null, domains)
  },

  build: function (cb) {
    const transformedList = domains.map((item) => { return `'${item}'` }).join(', ')
    const rule = {
      condition: `(new Set([ ${transformedList} ])).has(SLD)`,
      consequent: null,
      description: 'exclude services'
    }
    cb(null, rule)
  }
}
