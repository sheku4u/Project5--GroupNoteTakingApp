import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    grpName : [{id:1,text: "My React Grp"}]
}
// 
export const listnameSlice = createSlice({
    name:"GroupName",
    initialState,
    reducers:{
        addGrp: (state,action)=>{
            const group = {
                id: nanoid(),
                text: action.payload,
                
            }
            state.grpName.push(group)
        },
        
    }
})

export const {addGrp} = listnameSlice.actions

export default listnameSlice.reducer