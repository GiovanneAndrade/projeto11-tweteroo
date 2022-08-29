import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());
server.use(express.json());
let sign = []
let tweets = []
const salvartweet = []
let tweetnovo = []  

// -------metodo GET--------------------------------
server.get('/tweets', function(req, res) {
   const fil = tweets.reverse();
  const filnovo = fil.filter((item,index )=> {
    if (index < 3 ){
      return item
    }
  })  
  

  res.send(filnovo.reverse());

});
//---------------------------------------------------



//------------METOD POST USUARIO------------------------
server.post('/sign-up', function(req, res) {
//req.body.id = sign.length + 1;


sign.push(req.body)
res.send('ok');
})
//-------------------------------------------------



//----------POST TWEET----------------------------------
server.post('/tweets', function(req, res) {
  //req.body.id = tweets.length + 1;
 const tweet = req.body.tweet
  let [username, avatar] = sign
  
    let tweetusername = {...{tweet}, ...username,  ...avatar}
  
 
  if(!username){
    return res.send('faça login')
  }else{
    tweets.push(tweetusername)
  }

  salvartweet.push(req.body)

res.send('ok');
});
//-------------------------------------------------



server.listen(5000, function() {
  console.log('tudo ok')
});