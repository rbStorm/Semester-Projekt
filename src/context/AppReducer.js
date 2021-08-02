
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
    switch(action.type) {
        
        case 'LOGIN':
            return{
                ...state,
                user:[action.payload]
            }
            

        case 'LOGOUT':
            return{
                ...state,
                user:{}
            }    
        default: return state;
    }
}