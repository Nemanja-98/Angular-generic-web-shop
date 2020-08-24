const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
const products = require('./assets/products.ts');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Routes begin *************************************************
app.get('/products', (req, res) => {
  res.json(products);
});



// app.post('/register', async (req, res) => {
//   try {
//       const {email, password} = req.body;

//       if (!email || !password) {
//           res.status(400).json(`Missing ${!email ? "email" : 'password'}!`)
//       }

//       //const hash = await bcrypt.hash(password, 10);
//       //await db('users').insert({email: email, hash: hash});

//       // const token = jwt.sign({email: email}, 'superScretthing')
//       //res.status(200).json({token: token});
//   } catch(e) {
//       // console.log(e); // Uncomment if needed for debug
//       // If a SQLITE_CONSTRAINT has been violated aka. row with that email already exists. You can read more: https://www.sqlite.org/c3ref/c_abort.html
//       if(e.errno === 19) {
//           res.status(400).json('A user with that email already exists!');
//       } else {
//           res.status(400).json('Something broke!');
//       }
//   }
// });



// app.post('/login', async (req, res) => {
//   try {
//       const {email, password} = req.body;

//       if (!email || !password) {
//           res.status(400).json(`Missing ${!email ? "email" : 'password'}!`)
//       }

//       // const user = await db('users').first('*').where({email: email});

//       if(user) {
//          // const validPass = await bcrypt.compare(password, user.hash);
//           if(validPass) {
//               // const token = jwt.sign({email: email}, 'superScretthing');
//               // res.status(200).json({token: token});
//           } else {
//               res.status(401).json('Wrong password!');
//           }
//       } else {
//           res.status(404).json('User not found!');
//       }

//   } catch(e) {
//       // console.log(e); // Uncomment if needed for debug
//       res.status(400).json('Something broke!');
//   }
// });

/*routes end**************************************************/
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});