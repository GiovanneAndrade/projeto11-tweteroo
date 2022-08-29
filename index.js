import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
let sign = []
let tweets = []
const salvartweet = []
 
server.get('/tweets', function(req, res) {
   const ultimosdez = tweets.slice(-10)
    res.send(ultimosdez.reverse());
});

server.post('/sign-up', function(req, res) {
  sign.push(req.body)
  res.send('ok');
})

server.post('/tweets', function(req, res) {
 const tweet = req.body.tweet
 let [username, avatar] = sign
 let tweetusername = {...{tweet}, ...username, ...avatar}
  if(!username){
    return res.send('faça login')
  }else{
    tweets.push(tweetusername)
  }
  salvartweet.push(req.body)
res.send('ok');
});

server.listen(5000, function() {
  console.log('tudo ok')
});