import { createStore, combineReducers } from "redux";
import { v4  } from 'uuid';

let initialProducts = {
    searched:'',
    products:[
    {
        id:v4(),
        title:"Hoodie",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/12/red-bears.png?resize=700%2C700&ssl=1",
        price:100
    },
    {
        id:v4(),
        title:"Zipper",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/10/LA.png?w=600&ssl=1",
        price:200
    },
    {
        id:v4(),
        title:"Pants",
    img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/10/make-love.png?w=600&ssl=1",
        price:300
    },
    {
        id:v4(),
        title:"Zipper 2",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/09/lilac.png?w=600&ssl=1",
        price:400
    },
]
};

function ProductSection(olData = initialProducts, newData){

    try{

    olData = {
        ...olData,
        products:[...olData.products]
    };

    if(newData.type == 'ADD_PRODUCT'){
        olData.products.push(newData.payload);
    }else if(newData.type == 'SEARCH_PRODUCT'){
        olData.searched = newData.payload;
    }else if(newData.type == 'TOGGLE_LIKED_BTN'){
        
        let item = olData.products.find(product=>product.id == newData.id);
        item.abc = !item.abc;

    }

    }catch(e){
        console.log(e.message)
    }


    

    return olData;

}

let initialAuthData = {
    users:[]
}

function authSection(olData = initialAuthData, newData){

    olData = {...olData};

    if(newData.type == 'USER_CREATED'){
        olData.users.push(newData.payload);
    }else if(newData.type == 'User_delete_Kia'){
        olData.users.splice(newData.payload,1);
    }

    return olData;
}

let allSections = combineReducers({ProductSection, authSection})

export let store = createStore(allSections);