//******************************Local storage ma data kesay save karna********************************************* */
// import React, { useEffect, useState } from 'react'

// export const  App = () => {
//     let storedNames=JSON.parse(localStorage.getItem("newName"));
//     let [names, setNames] = useState(storedNames || []);
//     useEffect(() => {
//         setNames(storedNames);
//       }, [storedNames]);
      

//     function addName (){
//         let name=prompt("enter Names")
//         if (name){
//         setNames(prevNames=>[...prevNames, name]);
//         localStorage.setItem("newName",JSON.stringify([...names, name]));
        
//     }    

//     }
//   return (  
//     <div>
//     <ol>
//         {names.map(function(name){
//             return <li>{name}</li>
//         })}
//     </ol>
//     <div><button  onClick={addName}>Add users</button></div>
//   </div>
//   )
// }

