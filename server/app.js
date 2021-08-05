const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//create connection
const db = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '0524139fairy',
  database  : 'DB_Rental'
})

//Connect 
db.connect((err) => {
  if(err) {
    console.log("[mysql error]",err);
  }
  console.log('MySQL Connected...');
})

//Register
app.post("/register", (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO tb_users (name, email, username, password) VALUES (?,?,?,?)",
    [name, email, username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

//Login
app.post("/login", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM tb_users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if(err) {
        res.send({ err: err });
      } 
      
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username and password combination!" });
      }
    }
    
  );
});

//Transaction
app.get("/transaction", (req, res) => {
  db.query(`SELECT *, tb_customer.name AS customer_name_rental, tb_rental.price AS rental_price FROM tb_rental
  INNER JOIN tb_users ON tb_rental.users_id = tb_users.id
  INNER JOIN tb_customer ON tb_rental.customer_id = tb_customer.id
  INNER JOIN tb_motor ON tb_rental.motor_id = tb_motor.id
  INNER JOIN tb_vehicle_type ON tb_motor.vehicle_type_id = tb_vehicle_type.id
  `, (err, results, fields) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});

//addTransactionForm
app.post("/addTransactionForm", (req, res) => {
  const transactionNumber = req.body.transactionNumber;
  const transactionDate = req.body.transactionDate;
  const userName = req.body.userName;
  const customerName = req.body.customerName;
  const motorName = req.body.motorName;
  const rentDuration = req.body.rentDuration;
  const price = req.body.price;

  db.query(
    `INSERT INTO tb_rental 
    (transaction_number, transaction_date, users_id, customer_id, motor_id, rent_duration, price) 
    VALUES (?,?,?,?,?,?,?)`,
    [transactionNumber, transactionDate, userName, customerName, motorName, rentDuration, price],
    (err, result) => {
      console.log(err);
    }
  );

  res.send(200, { message: 'ok' });
});

//user select
app.get("/userSelect", (req,res) => {
  db.query("SELECT * FROM tb_users", (err, results, fields) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});

//customer select
app.get("/customerSelect", (req, res) => {
  db.query("SELECT * FROM tb_customer", (err, results, fields) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
})

//motor select
app.get("/motorSelect", (req, res) => {
  db.query("SELECT * FROM tb_motor", (err, results, fields) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
})

app.listen('3000', () => {
  console.log('server started on port 3000')
});

