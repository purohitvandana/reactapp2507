// function Cake(props){
//     console.log("..............." , props)
//     return (
//         <div class="card col-3" style={{width: "14rem"}}>
//             <img style={{height:"18rem"}} src={props.data.image} class="card-img-top" alt="..." />
//              <div class="card-body">
//                 <h5 class="card-title">{props.data.name}</h5>
//                 <p className="card-text">{props.data.price}</p>
//             </div>
//         </div>
//     )
// }

// export default Cake

import {useContext} from "react"
import {MyContext} from "./Home"
function Cake(props){
    const context1 = useContext(MyContext)
    console.log("..............." , props , context1)
    function showDetails(event){
        props.history.push('/cake/'+props.data.cakeid)
    }
    return (
        <div onClick={showDetails} class="card col-3" style={{width: "14rem"}}>
            <img style={{height:"18rem"}} src={props.data.image} class="card-img-top" alt="..." />
             <div class="card-body">
                <h5 class="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.price}</p>
            </div>
        </div>
    )
}

export default Cake