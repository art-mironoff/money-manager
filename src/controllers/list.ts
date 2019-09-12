import { Request, Response, NextFunction } from 'express';
import models from '../models/index';

export const getList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rows = await models.Row.find({});
    res.json({
      list: rows
    });
  } catch (err) {
    next(err);
  }
};

export const removeRow = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const row = await models.Row.findById(id);
    row.remove();
    res.json({
      success: true
    });
  } catch (err) {
    next(err);
  }
};
