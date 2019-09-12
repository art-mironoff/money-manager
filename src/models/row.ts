import * as mongoose from 'mongoose';

const rowSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  money: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true
  },
  comment: {
    type: String
  }
});
const Row = mongoose.model('Row', rowSchema);
export default Row;
