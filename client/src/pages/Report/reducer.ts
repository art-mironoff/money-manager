import { REPORT_GET_LIST, REPORT_REMOVE_ROW, ReportActions } from './types';
import IRow from '../../types/ListRow';

interface IState {
  data: IRow[];
}

const initialState = {
  data: []
};

export default function(state: IState = initialState, action: ReportActions) {
  switch (action.type) {
    case REPORT_GET_LIST: {
      return { ...state, data: action.data };
    }

    case REPORT_REMOVE_ROW: {
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.id)
      };
    }

    default: {
      return state;
    }
  }
}
