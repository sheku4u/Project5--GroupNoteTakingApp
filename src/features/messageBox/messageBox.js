import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    msgBox:[{id:1,text:"my first msg "}]
}

export const messageSlice = createSlice({
    name:"MessageState",
    initialState,
    reducers:{
        addMsg: (state,action)=>{
            const msg = {
                id: nanoid(),
                text: action.payload
            }
            state.msgBox.push(msg)
        }
    }
})

export const {addMsg} = messageSlice.actions
export default messageSlice.reducer