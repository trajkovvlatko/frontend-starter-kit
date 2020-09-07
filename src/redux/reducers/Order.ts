interface IAction {
  type: string;
  productId: number;
}

export const ORDER_ADD = 'ORDER/ADD';
export const ORDER_REMOVE = 'ORDER/REMOVE';

const defaultStore: number[] = [];

export default function order(state = defaultStore, action: IAction) {
  switch (action.type) {
    case ORDER_ADD:
      return [...state, action.productId];
    case ORDER_REMOVE:
      return state.filter((s: number) => s !== action.productId);
    default:
      return state;
  }
}
