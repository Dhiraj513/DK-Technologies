export const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            Image: action.payload.Image,
        };
    }
        if (action.type === "ABOUT_UPDATE") {
            return {
                ...state,
                name: action.payload.name,
                Image: action.payload.Image,
            };
    }
        
        return state;
    };