export default interface IListRow {
  id: number;
  category: string;
  money: string;
  type: 'expense' | 'income';
  comment: string;
}
