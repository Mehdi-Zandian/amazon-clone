export const initState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // clone basket
      let newBasket = [...state.basket];
      // find index of target product
      const index = newBasket.findIndex((item) => item.id === action.id);
      // when its found, remove it...
      if (index >= 0) newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      };

      break;
    default:
      return state;
  }
}
export default reducer;
