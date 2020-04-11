ObjectID = require('mongodb').ObjectID

module.exports = function (app, db) {

  app.post('/new', (req, res) => { 
    console.log(req.body)
    db.collection('transactions').insertOne({...req.body, status: "pending"}, (err, results) => {
      if (err) {
        res.send({ 'error': 'An error has occured: ' + err })
      } else {
        res.send({ success: true, data: results.ops[0] });
      }
    })
  });

  app.post('/request', (req, res) => {
    transactions = []
    db.collection('transactions')
    .find({ "hospitalId": req.body.hospitalId })
    .forEach(s => {
      if(s.status === "pending"){
        transactions.push(s)
      }
    })
    .then(r => res.send({ data: true, transactions }))
  })

  app.post('/accept', (req, res) => {
    db.collection('transactions')
    .update({ _id: new ObjectID(req.body.transactionId)}, { $set: { status: "accepted" } })
    .then(r => res.send({ success: true }))
  })
};
