export const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "SET_CATEGORY": // Changed action type to SET_CATEGORY
      return { ...state, selectedCategory: action.payload }; // Updated selectedCategory
    case "FILTER":
      switch (action.payload) {
        case "showEntireInventory":
          return { ...state, showEntireInventory: !state.showEntireInventory };
        case "showFastDeliveryOnly":
          return {
            ...state,
            showFastDeliveryOnly: !state.showFastDeliveryOnly
          };
        default:
          console.log("inner switch is acting up...");
          break;
      }
      break;
    default:
      console.log("something is wrong with reducer function");
      break;
  }
};
