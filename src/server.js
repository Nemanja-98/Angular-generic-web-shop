const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;
const products = require('./assets/products.ts');

const orders = require('./assets/orders.json');
const { response } = require('express');

let fs = require('fs').promises;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Routes begin *************************************************
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/users', async (req, res) => {
  const data = await fs.readFile('../users.json') 
  const users = JSON.parse(data);
  res.json(users); 
});

app.delete('/users/:username', async (req, res) => {
  const data = await fs.readFile('../users.json') 
  let users = JSON.parse(data);
  users = users.filter( el => el.username!=req.params.username);
  // console.log(users);
  // console.log(req.params);
  await fs.writeFile('../users.json', JSON.stringify(users));
  res.sendStatus(200); 
});

app.post('/register', async (req, res) => {

  const data = await fs.readFile('../users.json') 
  const users = JSON.parse(data); 
  console.log("parse", users);
  const exists = users.find(item => item.username === req.body.username);
  if (!exists) {
    users.push({
      id: Math.floor(Math.random() * 1000),
      username: req.body.username,
      password: req.body.password,
      address: req.body.address,
      phone: req.body.phone
    })
    await fs.writeFile('../users.json', JSON.stringify(users));
    res.sendStatus(200);
  } else {
    res.send({ message: "user already registered." });
  }
})

app.post('/login', async (req, res) => {
  try {
    console.log("nesto");
    const data = await fs.readFile('../users.json')
    //console.log("data",data);
    const users = JSON.parse(data);
    //console.log("users", users);
    const user = users.find((item) => item.username === req.body.username && item.password === req.body.password);
    //console.log("user", user);
    if (user) {
      res.send(user);
    } else {
      res.send({});
    }
  }
  catch (e) {
    console.log(e);
    res.send(500);
  }

})

// app.post('/orders', async (req, res) => {
//   fs.readFile('./assets/orders.json', 'utf8', function readFileCallback(err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       let obj = JSON.parse(data); //now it an object
//       //requested user data to be added
//       obj.Orders.push({
//         email: "someone@gmail.com",
//         username: 3,
//         items: [{
//           name: "Strawberries",
//           price: 2.54,
//           quantity: 1
//         },
//         ],
//         total: 50.3,
//       }); //add some data
//       json = JSON.stringify(obj); //convert it back to json
//       fs.writeFile('./assets/orders.json', json, 'utf8',); // write it back 
//     }
//   });

// })

/*routes end**************************************************/
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});