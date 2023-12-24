import { useParams } from "react-router-dom"
import YouTube from "react-youtube"

export default()=>{
    let params = useParams();
    return <div>
        {/* <h1>{params.a1}</h1> */}
        <YouTube videoId={params.some}>
            {/* <h1>{params.some}</h1> */}
        </YouTube>
    </div>
}