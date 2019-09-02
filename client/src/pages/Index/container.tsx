import React, { useState } from 'react';
import styled from 'styled-components';
import { addExpense } from '../../actions';
import ICategory from '../../types/Category';
import AppLayout from '../../layout/container';
import MoneyForm from '../../components/MoneyForm';

const IndexPage: React.FC = () => {
  const [money, setMoney] = useState<string>('');
  const [category, setCategory] = useState<string>('0');
  const [comment, setComment] = useState<string>();

  const categories: ICategory[] = [
    {
      id: 0,
      name: 'Продукты'
    },
    {
      id: 1,
      name: 'Обеды, перекусы'
    },
    {
      id: 2,
      name: 'Проезд'
    },
    {
      id: 3,
      name: 'Автомобиль'
    },
    {
      id: 4,
      name: 'Коммуналка, Интернет, Связь'
    },
    {
      id: 5,
      name: 'Аптека, Лечение'
    },
    {
      id: 6,
      name: 'Одежда'
    },
    {
      id: 7,
      name: 'Подарки'
    },
    {
      id: 8,
      name: 'Отдых'
    },
    {
      id: 9,
      name: 'Ремонт'
    },
    {
      id: 10,
      name: 'Отложили в Банк'
    }
  ];

  const handleAdd = (): void => {
    if (!money || !category) {
      alert('Все поля должны быть заполнены!');
    }
    addExpense(money, category, comment);
  };

  return (
    <AppLayout title="Добавить расходы">
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
    background-color: ${props => props.theme.expenseColor};
  }
`;

export default IndexPage;
