
export const reducer = (state, action) => {

    // if (action.payload === 'add') {
    //     return state + 1;
    // }


    // if (action.payload === 'del') {
    //     return state - 1;
    // }

    // return state;


    switch (action.payload) {
        case 'add': {
            return state + 1;
        }
        case 'del': {
            return state - 1;
        }

        default: {
            return state;
        }

    }

}