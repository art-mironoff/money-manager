import React, { useState } from 'react';
import styled from 'styled-components';
import { addIncome } from '../../actions';
import ICategory from '../../types/Category';
import AppLayout from '../../layout/container';
import MoneyForm from '../../components/MoneyForm';

const IncomesPage: React.FC = () => {
  const [money, setMoney] = useState<string>('');
  const [category, setCategory] = useState<string>('0');
  const [comment, setComment] = useState<string>();

  const categories: ICategory[] = [
    {
      id: 0,
      name: 'Зарплата'
    },
    {
      id: 1,
      name: 'Другое'
    }
  ];

  const handleAdd = (): void => {
    if (!money || !category) {
      alert('Все поля должны быть заполнены!');
    }
    addIncome(money, category, comment);
  };

  return (
    <AppLayout title="Добавить доходы">
      <StyledPage>
        <MoneyForm
          money={money}
          category={category}
          comment={comment}
          categoriesDic={categories}
          setMoney={setMoney}
          setCategory={setCategory}
          setComment={setComment}
          onSave={handleAdd}
        />
      </StyledPage>
    </AppLayout>
  );
};

const StyledPage = styled.div`
  ons-button {
    background-color: ${props => props.theme.incomeColor};
  }
`;

export default IncomesPage;
