import { Provider,useSelector,useDispatch } from "react-redux";
import meraStore from "./store/store"
import {BrowserRouter,Routes} from "react-router-dom"
import "./App.css"
function Child(){
    
    let data=useSelector((store)=>{
        return store
    })
        let dispatch=useDispatch();
        const addusers =()=>{
            let name=prompt("Name Enter kary")
            dispatch({
                type:"Name_add_kia",
                name
            })
            
        }
        
        return <div>

        <button onClick={addusers}>Add Users</button>
            <ol>
            {
                data.main.map((obj,index)=>{
                    return <li id="one">{obj.name}<button onClick={()=>{
                        let newname=prompt("Update name likho")
                        dispatch({
                            type:"Update kia",
                            newname,
                            index
                        })
                    }}>Update</button><button onClick={()=>{
                        dispatch({
                            type:"Delete kia",
                            index
                        })
                    }}>Delete</button></li>
                })
            }
            
            </ol>
            </div>
        
    }
    
    export default ()=>{
    
    return <div>

        <BrowserRouter>
            <Child></Child>
        </BrowserRouter>
    </div>
}
