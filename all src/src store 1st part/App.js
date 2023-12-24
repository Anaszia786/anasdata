
// useState ki maqsad, UI ko update krna  h
import { Provider, useSelector } from "react-redux";
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
    // let dispatch = useDispatch();

    return <div>
        <ol>
            <>
                {
                    data.teacherSection.map((obj) => {
                        return <li>{obj.name}</li>
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

    // let dat = useSelector(store=>{
    //     return store.teacherSection;
    // })


    return <div>
        <BrowserRouter>

            {/* <Provider store={meraStore}> */}

                <Child></Child>
                <h1>asdsd</h1>


            {/* </Provider> */}
        </BrowserRouter>
    </div>;

};