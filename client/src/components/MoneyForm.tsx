import React, { Dispatch } from 'react';
import styled from 'styled-components';
import ICategory from '../types/Category';
import { Input, Select, Button, Card } from 'react-onsenui';

interface IProps {
  money?: string;
  category?: string;
  comment?: string;
  categoriesDic: ICategory[];
  setMoney: Dispatch<string>;
  setCategory: Dispatch<string>;
  setComment: Dispatch<string>;
  onSave: () => void;
}

const MoneyForm: React.FC<IProps> = props => {
  const {
    money,
    category,
    comment,
    categoriesDic,
    setMoney,
    setCategory,
    setComment,
    onSave
  } = props;
  return (
    <StyledCard style={{ textAlign: 'center' }}>
      <p>
        <Input
          modifier="material"
          placeholder="Деньги"
          value={money}
          type="number"
          onChange={event => {
            setMoney(event.target.value);
          }}
        />
      </p>
      <p>
        <Select
          modifier="material"
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          {categoriesDic.map(row => {
            return (
              <option key={row.id} value={row.id}>
                {row.name}
              </option>
            );
          })}
        </Select>
      </p>
      <p>
        <Input
          modifier="material"
          placeholder="Комментарий"
          value={comment}
          onChange={event => {
            setComment(event.target.value);
          }}
        />
      </p>
      <p>
        <Button onClick={onSave}>Add</Button>
      </p>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  ons-input,
  ons-select {
    width: 100%;
  }

  ons-button {
    width: 100px;
  }
`;

export default MoneyForm;
