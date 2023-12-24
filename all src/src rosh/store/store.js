import {createStore,combineReducers} from "redux"
import {v4} from "uuid" 
let initialProducts={
 details:[],
 signup:[],
 Lusers:null,
 searched:"",
 products:[
    {
     id:v4(),
     name:"Zipper1",
     img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=700%2C700&ssl=1",
     Price:100
    },
    {
        id:v4(),
        name:"Zipper2",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/10/BRATZ.png?w=600&ssl=1",
        Price:100
    },
    {
        id:v4(),
        name:"Zipper3",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/09/Grey.png?w=600&ssl=1",
        Price:100
    },
    ]
}
function ProductSection(oldData=initialProducts,newData){
    
oldData={
    ...oldData,
    products:[...oldData.products]
}
if (newData.type=="Add_Product"){
    oldData.products.push(newData.payload)
}else if (newData.type=="Search_Kia"){
    oldData.searched = newData.payload;
}else if (newData.type=="Like_butn"){
    let items=oldData.products.find(product=>product.id==newData.payload)
    items.abc=!items.abc
}else if (newData.type=="Delete_User"){
    oldData.Lusers.splice(newData.payload,1) 
}else if (newData.type=="Cart_items"){
    oldData.details.push(newData.payload) 
}else if (newData.type=="signup_kia"){
    oldData.signup.push(newData.payload) 
}else if (newData.type=="user_login"){
    oldData.Lusers=newData.payload
}else if (newData.type=="Logout"){
    oldData.Lusers=null;
}

return oldData
}
let allSections=combineReducers({ProductSection})
export let store= createStore(allSections)
