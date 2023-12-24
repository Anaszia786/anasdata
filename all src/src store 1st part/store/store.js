import { createStore, combineReducers } from "redux";

function teacherSection(){
    
    return [
        {
            name:'ali'
        },
        {
            name:'yahya'
        },
        {
            name:'aqsa'
        }
    ]

}

function studentSection(){

    return [
        {
            name:'student 1'
        },
        {
            name:'student 2'
        },
        {
            name:'student 3'
        }
    ]


}

let allSections = combineReducers({teacherSection, studentSection});

let store = createStore(allSections);

export default store