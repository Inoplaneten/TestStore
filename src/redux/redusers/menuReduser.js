const TOGGLE_MENU_ViSIBLE = 'TOGGLE_MENU_ViSIBLE:';

const initialState = {
    isActive: false
}

const menu = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MENU_ViSIBLE:
            return {
                ...state,
                isActive: !state.isActive
            };
        default: 
            return state;
    }
}

export const setToggleMenuVisible = () => ({ type: TOGGLE_MENU_ViSIBLE })

export { menu };