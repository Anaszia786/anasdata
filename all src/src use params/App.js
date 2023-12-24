import YouTube from "react-youtube"
import './App.css'
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import Player from "./components/player/player";

// function Hello(){
//         let a1 = useParams()
//     return <div>
//     <h1>{a1.province}</h1>
//     <h1>{a1.capital}</h1>
//     <h1>{a1.uni}</h1>
//         </div>
    
// }

function VideoPlayer({videos}){

    // let some = useParams();
    // some.roll
    // some.a1

    return <div className="flex">
    {
        videos.map((videoKiId)=>{
            return  <Link to={"/watch/"+videoKiId}>
                        <div>
                            <img src={"https://i.ytimg.com/vi/"+videoKiId+"/1.jpg"} />
                        </div>
                    </Link> 
        })
    }
    </div>
}

export default()=>{

    let videos = [
        "Lln8Prk5VZ4",
        "7AhjLVO2o_Q",
        "TmxYlA26Jr4",
        "RxwjXlM8-Fo"
    ];

    return <div>
        <BrowserRouter>
        <Routes>
            {/* <Route path="/result/:roll/:a1" element={<VideoPlayer vidos={videos} />} />                       */}
            <Route path="/" element={<VideoPlayer videos={videos} />} />
            <Route path="/watch/:some" element={<Player />} />
        </Routes>    
        </BrowserRouter>
    </div>

}