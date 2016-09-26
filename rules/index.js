module.exports = [
  {
    "condition": "(new Set([ 'baidu', 'bing', 'google', 'sogou', 'yahoo', 'yandex', 'youdao' ])).has(SLD.split('.')[0])",
    "consequent": null,
    "description": "exclude search engines"
  },
  {
    "condition": "(new Set([ 'githubusercontent', 'ssl-images-amazon', 'twimg', 'ytimg' ])).has(SLD.split('.')[0])",
    "consequent": null,
    "description": "exclude image stores"
  },
  {
    "condition": "(new Set([ 'github.io', 'githubusercontent.com', 's3.amazonaws.com' ])).has(TLD) || (new Set([ 'amazonaws.com', 'tumblr.com', 'wordpress.com' ])).has(SLD)",
    "consequent": null,
    "description": "exclude content stores"
  },
  {
    "condition": "(new Set([ 'baiducontent.com', 'googleusercontent.com', 'microsofttranslator.com' ])).has(SLD)",
    "consequent": null,
    "description": "exclude machine-translations"
  },
  {
    "condition": "(new Set([ 'bilibili', 'blogger', 'blogspot', 'craigslist', 'facebook', 'github', 'imgur', 'instagram', 'linkedin', 'livejournal', 'medium', 'pinterest', 'quora', 'slack', 'stackoverflow', 'twitter', 'vk', 'wikipedia', 'xvideos', 'youku', 'youtube' ])).has(SLD.split('.')[0])",
    "consequent": null,
    "description": "exclude platforms"
  },
  {
    "condition": "(new Set([ 'messenger', 'skype', 'whatsapp' ])).has(SLD.split('.')[0])",
    "consequent": null,
    "description": "exclude messaging application"
  },
  {
    "condition": "(new Set([ 't.co' ])).has(SLD)",
    "consequent": null,
    "description": "exclude redirection points"
  },
  {
    "condition": "/^campaign-archive[0-9]+.com$/.test(SLD)",
    "consequent": null,
    "description": "exclude campaign engines"
  },
  {
    "condition": "TLD === 'gov' || /^go.[a-z][a-z]$/.test(TLD) || /^gov.[a-z][a-z]$/.test(TLD)",
    "consequent": null,
    "description": "exclude all government sites"
  },
  {
    "condition": "(new Set([ 'brave.com' ])).has(SLD)",
    "consequent": null,
    "description": "res ipsa loquitur"
  },
  {
    "condition": "(new Set([ 'onclickads.net', 'outbrain.com', 'popads.net' ])).has(SLD)",
    "consequent": null,
    "description": "exclude add platforms"
  },
  {
    "condition": "(new Set([ 'diply.com', 'imdb.com' ])).has(SLD)",
    "consequent": null,
    "description": "exclude aggregators"
  },
  {
    "condition": "(new Set([ '360.cn', 'alibaba.com', 'aliexpress.com', 'amazon.co.jp', 'amazon.co.uk', 'amazon.com', 'amazon.de', 'amazon.in', 'ebay.com', 'jd.com', 'rakuten.co.jp', 'taobao.com', 'tmall.com' ])).has(SLD)",
    "consequent": null,
    "description": "exclude commerce sites"
  },
  {
    "condition": "(new Set([ '163.com', 'naver.com', 'pixnet.net', 'sohu.com' ])).has(SLD)",
    "consequent": null,
    "description": "exclude news platforms"
  },
  {
    "condition": "(new Set([ 'alipay.com', 'apple.com', 'booking.com', 'chase.com', 'coccoc.com', 'docusign.net', 'dropbox.com', 'fc2.com', 'live.com', 'mail.ru', 'microsoft.com', 'microsoftonline.com', 'netflix.com', 'nicovideo.jp', 'office.com', 'ok.ru', 'paypal.com', 'soso.com' ])).has(SLD)",
    "consequent": null,
    "description": "exclude services"
  },
  {
    "condition": true,
    "consequent": "SLD",
    "description": "the default rule"
  }
]
