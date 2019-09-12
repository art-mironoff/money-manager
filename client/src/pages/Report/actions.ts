import { Dispatch } from 'redux';
import { axiosInstance } from '../../utils';
import { REPORT_GET_LIST, REPORT_REMOVE_ROW, ReportActions } from './types';

export const getList = () => async (dispatch: Dispatch<ReportActions>) => {
  try {
    const res = await axiosInstance.get('/api/list');
    dispatch({ type: REPORT_GET_LIST, data: res.data.list });
  } catch (error) {
    console.error('Error: ', error);
  }
};

export const removeRow = (id: number) => async (
  dispatch: Dispatch<ReportActions>
) => {
  try {
    const res = await axiosInstance.delete(`/api/list/${id}`);
    if (res.data.success) {
      dispatch({ type: REPORT_REMOVE_ROW, id });
    }
  } catch (error) {}
};
