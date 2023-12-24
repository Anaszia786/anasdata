import {createStore,combineReducers} from "redux"

function main(oldData=[],newData){
oldData=[...oldData]
if (newData.type=="Name_add_kia"){
    oldData.push({
        name:newData.name
        })
}else if (newData.type=="Update kia"){
    oldData[newData.index].name=newData.newname
}else if (newData.type=="Delete kia"){
    oldData.splice(newData.index,1)
}
return oldData;
}
function submain(oldData=[],newData){
    // oldData=[...oldData]
return oldData
}
let allsections=combineReducers({main,submain})
let store =createStore(allsections)
export default store;