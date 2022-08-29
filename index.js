import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());
server.use(express.json());
let sign = []
let tweets = []
const ola = sign.avatar
//let novotweets = tweets.filter(item => item === tweet )

// -------metodo GET--------------------------------
server.get('/tweets', function(req, res) {
  let [tweet] = tweets
  let [username] = sign
  let arraynovo = [{...tweet, ...username}]
  res.send(arraynovo);

});
//---------------------------------------------------



//------------METOD POST USUARIO------------------------
server.post('/sign-up', function(req, res) {
//req.body.id = sign.length + 1;


sign.push(req.body)
res.send('funcionado corretamente');
})
//-------------------------------------------------



//----------POST TWEET----------------------------------
server.post('/tweets', function(req, res) {
  //req.body.id = tweets.length + 1;
 const tweet = req.body.tweet

  tweets.push({tweet})
 
res.send('funcionado corretamente');
});
//-------------------------------------------------



server.listen(5000, function() {
  console.log('tudo ok')
});