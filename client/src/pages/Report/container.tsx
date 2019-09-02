import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components';
import { AppState } from '../../store';
import { ReportActions } from './types';
import IListRow from '../../types/ListRow';
import { getList, removeRow } from './actions';
import AppLayout from '../../layout/container';
import { List, ListItem, Button } from 'react-onsenui';

interface IProps {
  dispatch: ThunkDispatch<any, any, ReportActions>;
  report: {
    data: IListRow[];
  };
}

const ReportPage: React.FC<IProps> = props => {
  const { dispatch, report } = props;

  useEffect(() => {
    dispatch(getList());
  }, []);

  const handleRemove = (id: number): void => {
    dispatch(removeRow(id));
  };

  return (
    <AppLayout title="Отчёт">
      <List
        dataSource={report.data}
        renderRow={(row, index) => (
          <StyledListItem
            key={row.id}
            modifier={
              index === report.data.length - 1 ? 'longdivider' : undefined
            }
          >
            <span className={row.type}>
              {row.type === 'expense' ? '-' : '+'}
              {row.money}
            </span>
            - {row.category} - {row.comment}
            <Button
              className="remove-btn"
              modifier="quiet"
              onClick={() => {
                handleRemove(row.id);
              }}
            >
              Remove
            </Button>
          </StyledListItem>
        )}
      />
    </AppLayout>
  );
};

const StyledListItem = styled(ListItem)`
  .expense {
    color: ${props => props.theme.expenseColor};
  }
  .income {
    color: ${props => props.theme.incomeColor};
  }
  .remove-btn {
    cursor: pointer;
  }
`;

interface LinkStateProps {
  report: {
    data: IListRow[];
  };
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  report: state.report
});

export default connect(mapStateToProps)(ReportPage);
