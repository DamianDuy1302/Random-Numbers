const init = {
    'quantity': 100,
    'min': 0,
    'max': 10000,
}

export const quantityReducer = (state=100, action) =>{
    switch(action.type){
        case("quantity"):
            return action.value
    }
    return state
}

