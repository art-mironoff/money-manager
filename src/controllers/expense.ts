import { Request, Response, NextFunction } from 'express';
import models from '../models/index';

export const addExpense = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, money, comment } = req.body;
    const row = new models.Row({
      category,
      money: Number(money),
      type: 'expense',
      comment
    });
    await row.save();
    return res.json({
      success: true
    });
  } catch (err) {
    next(err);
  }
};
