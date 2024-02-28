export const searchStatus = (state=true, action) =>{
    switch(action.type){
        case("searchMode"):
            return action.value
    }
    return state
}

