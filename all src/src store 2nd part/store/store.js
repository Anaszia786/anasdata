import { createStore, combineReducers } from "redux";

function teacherSection(oldData =[], newData){
    
    // oldData = [oldData];

    if(newData.type == "NAME_ADD_KIA"){
        oldData.push({
            name:newData.name
        })

        // a = [{name:'ali'}]
        // a[0].name = 'rameez'

    }
    // else if(newData.type == "USER_DELETE_KARA"){
    //     oldData.splice(newData.index, 1);
    // }else if(newData.type == "USER_UPDATE_KARA"){
    //     oldData[newData.index].name = newData.newName;
    // }

    

    return oldData

}

function studentSection(oldData =[], newData){

    oldData = [...oldData];

    return oldData


}

let allSections = combineReducers({teacherSection, studentSection});

let store = createStore(allSections);

export default store