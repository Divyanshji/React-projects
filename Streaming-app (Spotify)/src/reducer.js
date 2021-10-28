export const initialState = {
    user :null,
    playlist: [],
    playing : false,
    item : null,
    // token: "BQBNbMmtHHJmuHZC71G0wyH9BoF7Q9474y-0TbqoBarQ4nhhJVXdInCB9qlpSy3c0rAsc72u3ZActqAAQhe4kPUcencEp7qbYa53KNjHBaCeRupeak1TKLYZKFNyFSbquYWkx0leg1ibEPi1xW4S-EnqiUYiUey7YQryRiYQJZ54ACPc",
};

const reducer = (state,action) =>{
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return{
                ...state, user:action.user,
            };
        case "SET_TOKEN" :
            return{
                ...state,
                token : action.token,
            }
        case "SET_PLAYLISTS" :
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY" :
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
        return state;
    }
}

export default reducer;