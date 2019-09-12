import * as express from 'express';
import { addExpense } from './controllers/expense';
import { addIncome } from './controllers/income';
import { getList, removeRow } from './controllers/list';

export default function(app: express.Application) {
  const apiRoutes = express.Router();

  apiRoutes.post('/addExpense', addExpense);
  apiRoutes.post('/addIncome', addIncome);
  apiRoutes.get('/list', getList);
  apiRoutes.delete('/list/:id', removeRow);

  apiRoutes.all('/*', (req: express.Request, res: express.Response) => {
    res.status(404).json({
      error: 'Handler not found'
    });
  });

  // Set url for API group routes
  app.use('/api', apiRoutes);
}
