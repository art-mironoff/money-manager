import { axiosInstance } from './utils';

export const addExpense = async (
  money: string,
  category: string,
  comment = ''
) => {
  try {
    const res = await axiosInstance.post('/api/addExpense', {
      money,
      category,
      comment
    });
    debugger;
  } catch (error) {
    console.error('Error: ', error);
  }
};

export const addIncome = async (
  money: string,
  category: string,
  comment = ''
) => {
  try {
    const res = await axiosInstance.post('/api/addIncome', {
      money,
      category,
      comment
    });
    debugger;
  } catch (error) {
    console.error('Error: ', error);
  }
};
