import IListRow from '../../types/ListRow';

export const REPORT_GET_LIST = 'REPORT_GET_LIST';
export const REPORT_REMOVE_ROW = 'REPORT_REMOVE_ROW';

export interface ReportGetListAction {
  type: typeof REPORT_GET_LIST;
  data: IListRow[];
}

export interface ReportRemoveRowAction {
  type: typeof REPORT_REMOVE_ROW;
  id: number;
}

export type ReportActions = ReportGetListAction | ReportRemoveRowAction;
