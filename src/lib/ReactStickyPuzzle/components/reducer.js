export const initialState = {
  items: {},
};

export const TYPE = {
  SET_STICKY_ITEM: "SET_STICKY_ITEM",
};

export const actionSetStickyItem = (payload) => ({
  type: TYPE.SET_STICKY_ITEM,
  payload,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.SET_STICKY_ITEM:
      const { key, value } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [key]: {
            ...state.items[key],
            ...value,
          },
        },
      };
    default:
      return state;
  }
};
