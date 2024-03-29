import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes";

const init = {
    tasks : [
        {
            id:Math.random(),
            action:"cuisine",
            isDone:true,
        },
        {
            id:Math.random(),
            action:"lecture",
            isDone:false,
        },
        {
            id:Math.random(),
            action:"sport",
            isDone:false,
        }
    ],
    filter: false,
}
const reducer = (state= init,{type,payload}) => {
    switch (type){
        case DELETE_TASK:
            return{
                ...state,tasks:state.tasks.filter(el => el.id!==payload)
            }
        case COMPLETE_TASK:
            return{
                ...state,tasks:state.tasks.map(el => el.id===payload?{...el,isDone:!el.isDone} : el)
            }
        case ADD_TASK:
            return{
                ...state,tasks:[...state.tasks,payload]
            }
        case EDIT_TASK:
            return{
                ...state,tasks:state.tasks.map(el => (el.id===payload.id? payload:el))
            }
        case FILTER_TASK:
            return{
                ...state,filter :!state.filter
            }
            default:
                return state;
    }
   
}
export default reducer;