const twitterService = require('../services/twitterService.js')

describe('Get active date function', () => {
  it('Null active status', async () => {
    let result = await twitterService.findLatestsTweet()

    expect(result).not.toBe(null); 

    let result2 = await twitterService.retweed(result[2].id)

    expect(result2).not.toBe(null); 
  });

 
})
