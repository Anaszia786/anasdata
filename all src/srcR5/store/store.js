import { createStore, combineReducers } from "redux";
import { v4  } from 'uuid';

let initialProducts = {
    orders:[],
    searched:'',
    products:[
    {
        id:v4(),
        title:"Hoodie",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=430%2C430&ssl=1",
        price:100
    },
    {
        id:v4(),
        title:"Zipper",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=430%2C430&ssl=1",
        price:140
    },
    {
        id:v4(),
        title:"Pants",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=430%2C430&ssl=1",
        price:640
    },
    {
        id:v4(),
        title:"Zipper 2",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=430%2C430&ssl=1",
        price:60
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

    }else if(newData.type == 'ADD_TO_CART'){
        
        olData.orders.push(newData.payload);

    }

    


    }catch(e){
        console.log(e.message)
    }


    

    return olData;

}

let initialAuthData = {
    users:[
        {
            name:'ali@gmail.com',
            password:'123'
        }
    ],
    loggedUser:null,

}

function authSection(olData = initialAuthData, newData){

    olData = {...olData};

    if(newData.type == 'USER_CREATED'){
        olData.users.push(newData.payload);
    }
    else if(newData.type == 'USER_LOGIN_HOGYA'){
        olData.loggedUser = newData.payload;
    }else if(newData.type == 'USER_LOGGED_OUT'){
        olData.loggedUser = null;
    }

    

    

    return olData;
}

let allSections = combineReducers({ProductSection, authSection})

export let store = createStore(allSections);