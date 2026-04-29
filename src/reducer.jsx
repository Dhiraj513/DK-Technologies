export const reducer = (state, action) => {
  if (action.type === "UPDATE_HOMEPAGE") {
    return {
      ...state,
      name: action.payload.name,
      Image: action.payload.Image,
    };
  }

  if (action.type === "UPDATE_ABOUTPAGE") {
    return {
      ...state,
      name: action.payload.name,
      Image: action.payload.Image,
    };
  }
    if (action.type === "GET_SERVICES") {
    return { ...state, services: action.payload };
  }

  return state;
};