const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/user', (req, res) => {
  connection.query('SELECT * from user', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/user/name', (req, res) => {
  connection.query('SELECT name from user', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/user/birthday', (req, res) => {
  connection.query('SELECT birthday from user', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/user/idsup', (req, res) => {
  connection.query('SELECT id from user where id > 3', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/user/namesm', (req, res) => {
  connection.query('SELECT name from user where name like "m%"', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/user/idas', (req, res) => {
  connection.query('SELECT id from user order by id desc', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des films');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/user/postuser', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO user SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/api/user/:id', (req, res) => {
  const iduser= req.params.id;
  const {is_human} = req.body;
  connection.query('UPDATE user SET is_human = ? WHERE id = ?', [is_human, iduser], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/api/user/ishuman/:id', (req, res) => {
  const iduser= req.params.id;
  connection.query('UPDATE user SET is_human = NOT is_human WHERE id = ?', [iduser], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete('/api/user/delete/:id', (req, res) => {
  const iduser = req.params.id;
  connection.query('DELETE FROM user WHERE id = ?', [iduser], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

app.delete('/api/user/deleteuser', (req, res) => {
  connection.query('DELETE FROM user WHERE `is_human` = false', err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});