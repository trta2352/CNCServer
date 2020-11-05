const fetch = require('node-fetch');
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'doVc8uKAmYKIeGNOx1h1sjKcc',
  consumer_secret:      'YQFzsZNvUfzCgD68QD9xmAzdv2ZD4Ty1B42gXadFnN2uJxtYlW',
  access_token:  '1324036892988448768-Eb6gpHzcSNEOkBzI7gbO6FpDfOntJs', 
  access_token_secret:  'F9L5CPOKMGSaOoLjDRrNsgKYQuHCJwflcKPaRWVWJLzlR',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

module.exports = SupportFun = {
  findLatestsTweet: async function (){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow', 
      headers: {
        "Authorization": 'Bearer AAAAAAAAAAAAAAAAAAAAAFa9JQEAAAAAPr8ojki0m0Lb%2BPXi9fIye0HnfTw%3DHNU6gFIvYO0Eg1JednRO8aFoUIhEMrKkOs5BUg2oo5YiYU8rXs', 
      }, 
    };
    
    return await  fetch("https://api.twitter.com/2/tweets/search/recent?query=from:258856900&tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld&expansions=author_id,referenced_tweets.id&user.fields=description,created_at", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        let filtered = result.data.filter((val) => val.lang == "sl");
        console.log(filtered);

        return filtered;
      })
    .catch(error => console.log('error', error));
  }, 
  retweed: async function (tweetID){
  
    await T.post('statuses/update', { status: "Vau, to je pa res odlično. @" + 'JJansaSDS', in_reply_to_status_id: tweetID}, function (err, data, response) {
      console.log(err)
      console.log(data)
      console.log(response)
    })
  }, 
}
