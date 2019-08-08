import { Type } from './actions';

const initialState = {
  numberPage: 1,
  mainUrl: 'https://pokeapi.co/api/v2',
  type: 'ability',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return { ...state, numberPage: state.numberPage + action.payload };

    case Type.DECREMENT:
      return { ...state, numberPage: state.numberPage - action.payload };

    default:
      return state;
  }
};
export default rootReducer;
