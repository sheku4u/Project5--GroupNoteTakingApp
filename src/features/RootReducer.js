import {combineSlices} from '@reduxjs/toolkit'
import listnameReducer from './listname/listnameSlice'
import messageBoxReducer from './messageBox/messageBox'

const rootReducer = combineSlices({
    grpName:listnameReducer,
    msgBox : messageBoxReducer

})
export default rootReducer
