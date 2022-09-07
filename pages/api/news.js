// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const api = 
{"status": "ok",
"totalResults": 4,
"articles": [
  {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "Nina Trentmann",
    "title": "Bed Bath & Beyond Names Interim CFO After Death of Gustavo Arnal - The Wall Street Journal",
    "description": "The struggling home-goods retailer named Laura Crossen to lead its finances, a move aimed at reassuring investors after the death by suicide of CFO Gustavo Arnal.",
    "url": "https://www.wsj.com/articles/bed-bath-beyond-names-laura-crossen-as-interim-cfo-11662471645",
    "urlToImage": "https://images.wsj.net/im-617137/social",
    "publishedAt": "2022-09-06T19:49:00Z",
    "content": "Struggling home-goods retailer Bed Bath &amp; Beyond Inc. on Tuesday named an interim executive to lead its finances, a move aimed at reassuring investors after the death of Chief Financial Officer G… [+483 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CNBC"
    },
    "author": "Lorie Konish",
    "title": "Social Security adds safety protocols to protect people facing long wait times in adverse conditions - CNBC",
    "description": "Some Social Security visitors have faced long wait times in unsafe conditions. That's led to safety upgrades, but one expert says a lack of funding is to blame.",
    "url": "https://www.cnbc.com/2022/09/06/social-security-adds-safety-protocols-as-visitors-face-long-wait-times.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106990505-1639683489257-gettyimages-1280325159-1006_32_fl200924260.jpeg?v=1660761009&w=1920&h=1080",
    "publishedAt": "2022-09-06T19:27:46Z",
    "content": "A Social Security Administration office in Sebring, Florida.\r\nThe agency's service difficulties date back to before the pandemic, said Maria Freese, senior legislative representative at the National … [+3597 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Benzinga"
    },
    "author": "Melanie Schaffer",
    "title": "Bitcoin ($BTC) – Bitcoin Takes The Lead, Drags Ethereum, Dogecoin Lower: What Happened? - Benzinga",
    "description": "Bitcoin (CRYPTO: BTC) began a sharp decline at 1 p.m. Tuesday and Dogecoin (CRYPTO: DOGE) followed suit.",
    "url": "https://www.benzinga.com/markets/cryptocurrency/22/09/28763149/bitcoin-takes-the-lead-drags-ethereum-dogecoin-lower-heres-what-happened",
    "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/09/06/shutterstock_1968480388.jpg?width=1200&height=800&fit=crop",
    "publishedAt": "2022-09-06T19:02:31Z",
    "content": "BitcoinBTC/USD began a sharp decline at 1 p.m. Tuesday and DogecoinDOGE/USD followed suit.\r\nOn Friday, Benzinga called out that a bullish or bearish break was likely to occur Tuesday because Bitcoin … [+4282 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Trump media deal suffers blow as SPAC fails to win extension - Reuters",
    "description": "The blank-check acquisition firm that agreed to merge with former U.S. President Donald Trump's social media company failed on Tuesday to secure enough shareholder support for a one-year extension to complete the deal.",
    "url": "https://www.reuters.com/markets/deals/trump-media-deal-suffers-blow-spac-fails-win-extension-2022-09-06/",
    "urlToImage": "https://www.reuters.com/resizer/LCqmyM9fHOQbFyiTATy4sfpYGtI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QDYNKN2AZJLSRPXO2NO2FU4ZIA.jpg",
    "publishedAt": "2022-09-06T18:40:00Z",
    "content": "Sept 6 (Reuters) - The blank-check acquisition firm that agreed to merge with former U.S. President Donald Trump's social media company failed on Tuesday to secure enough shareholder support for a on… [+4708 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Benzinga"
    },
    "author": "Melanie Schaffer",
    "title": "Bitcoin ($BTC) – Bitcoin Takes The Lead, Drags Ethereum, Dogecoin Lower: What Happened? - Benzinga",
    "description": "Bitcoin (CRYPTO: BTC) began a sharp decline at 1 p.m. Tuesday and Dogecoin (CRYPTO: DOGE) followed suit.",
    "url": "https://www.benzinga.com/markets/cryptocurrency/22/09/28763149/bitcoin-takes-the-lead-drags-ethereum-dogecoin-lower-heres-what-happened",
    "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/09/06/shutterstock_1968480388.jpg?width=1200&height=800&fit=crop",
    "publishedAt": "2022-09-06T19:02:31Z",
    "content": "BitcoinBTC/USD began a sharp decline at 1 p.m. Tuesday and DogecoinDOGE/USD followed suit.\r\nOn Friday, Benzinga called out that a bullish or bearish break was likely to occur Tuesday because Bitcoin … [+4282 chars]"
  },
  {
    "source": {
      "id": "reuters",
      "name": "Reuters"
    },
    "author": null,
    "title": "Trump media deal suffers blow as SPAC fails to win extension - Reuters",
    "description": "The blank-check acquisition firm that agreed to merge with former U.S. President Donald Trump's social media company failed on Tuesday to secure enough shareholder support for a one-year extension to complete the deal.",
    "url": "https://www.reuters.com/markets/deals/trump-media-deal-suffers-blow-spac-fails-win-extension-2022-09-06/",
    "urlToImage": "https://www.reuters.com/resizer/LCqmyM9fHOQbFyiTATy4sfpYGtI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QDYNKN2AZJLSRPXO2NO2FU4ZIA.jpg",
    "publishedAt": "2022-09-06T18:40:00Z",
    "content": "Sept 6 (Reuters) - The blank-check acquisition firm that agreed to merge with former U.S. President Donald Trump's social media company failed on Tuesday to secure enough shareholder support for a on… [+4708 chars]"
  },
]};

export default function handler(req, res) {
  res.status(200).json(api);
}
