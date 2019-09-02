const express = require('express'),
  cors = require('cors'),
  config = require('./config');
const app = express();

const apiRoutes = express.Router();

apiRoutes.post('/addExpense', (req, res) => {
  res.json({
    success: true
  });
});

apiRoutes.post('/addIncome', (req, res) => {
  res.json({
    success: true
  });
});

apiRoutes.get('/getList', (req, res) =>
  res.json({
    list: [
      {
        id: 0,
        category: 'Автомобиль',
        money: '100',
        type: 'expense',
        comment: 'Бензин'
      },
      {
        id: 1,
        category: 'Зарплата',
        money: '10000',
        type: 'income',
        comment: ''
      }
    ]
  })
);

apiRoutes.delete('/removeRow/:id', (req, res) => {
  res.json({
    success: true
  });
});

apiRoutes.all('/*', req => {
  throw new GeneralError({ message: 'Page not found.', status: 404 });
});

app.use(cors());

// Set url for API group routes
app.use('/api', apiRoutes);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);
