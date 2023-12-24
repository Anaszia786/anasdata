
// useState ki maqsad, UI ko update krna  h
import { useSelector, useDispatch } from "react-redux";
import meraStore from "./store/store";
import { BrowserRouter } from "react-router-dom";


function Child() {
    // useSelector redux store 
    // se data mngwana keliye
    let data = useSelector((store) => {
        return store
    })

    // useDispatch() redux store
    // tak data lekar jaane keliye
    let dispatch = useDispatch();

    const addData = ()=>{

        let name = prompt('enter name');
        
        dispatch({
            type:"NAME_ADD_KIA",
            name
        })
    }

    return <div>
        <button onClick={addData}>Add data</button>
        <ol>
            <>
                {
                    data.teacherSection.map((obj, index) => {
                        return <li>{obj.name} <button onClick={()=>{

                            dispatch({
                                type:"USER_DELETE_KARA",
                                index
                            });

                        }}>Delete</button>
                        
                        <button onClick={()=>{

                            let newName =  prompt("Ente rnew name")

                            dispatch({
                                type:"USER_UPDATE_KARA",
                                newName,
                                index
                            });

                            }}>Update</button>
                        
                         </li>
                    })
                }
                {
                    data.studentSection.map((obj)=>{
                        return <li>{obj.name}</li>
                    })
                }
            </>

        </ol>
    </div>
}

export default () => {
    return <div>
        <BrowserRouter>

            {/* <Provider store={meraStore}>/ */}

                <Child></Child>


            {/* </Provider> */}
        </BrowserRouter>
    </div>;

};