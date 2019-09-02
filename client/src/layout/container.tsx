import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Page, Toolbar, BackButton, BottomToolbar, Icon } from 'react-onsenui';

interface IProps extends RouteComponentProps {
  children?: React.ReactNode;
  title?: string;
}

const AppLayout: React.FC<IProps> = props => {
  const handleBackButton = (): void => {
    props.history.goBack();
  };

  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="left">
            <BackButton onClick={handleBackButton}>Haзад</BackButton>
          </div>
          <div className="center">{props.title}</div>
        </Toolbar>
      )}
      renderBottomToolbar={() => (
        <StyledBottomToolbar modifier="material">
          <Link to="/">
            <Icon icon="dollar" /> Добавить расходы
          </Link>
          <Link to="/income">
            <Icon icon="dollar" /> Добавить доходы
          </Link>
          <Link to="/report">
            <Icon icon="clipboard-list" /> Отчеты
          </Link>
        </StyledBottomToolbar>
      )}
      contentStyle={{ padding: 40 }}
    >
      <div> {props.children} </div>
    </Page>
  );
};

const StyledBottomToolbar = styled(BottomToolbar)`
  &.bottom-bar {
    display: flex;
    justify-content: space-evenly;

    a {
      font-size: 12px;
      text-align: center;
      text-decoration: none;
      &:hover {
        color: black;
      }
      ons-icon {
        display: block;
        font-size: 24px;
        margin-top: 2px;
      }
    }
  }
`;

export default withRouter(AppLayout);
