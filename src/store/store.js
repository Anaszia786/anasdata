import { createStore, combineReducers } from "redux";
import { v4 } from "uuid";

// npm install react-toastify;

// npm install uuid

let puranData = {
    searched:'',
    orders:[],
    products:[
        {
            id:v4(),
            category:'MEN',
            img:'https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/10/LA.png?w=600&ssl=1',
            title:'Los Angeles White Zipper',
            price:1800
        },
        {
            id:v4(),
            category:'WOMEN',
            img:'https://images.olx.com.pk/thumbnails/415815020-240x180.webp',
            title:'Maroon Long Sweatshirt',
            price:2800
        },
        {
            id:v4(),
            category:'CHILD',            
            img:'https://images.olx.com.pk/thumbnails/415075770-800x600.webp',
            title:'Sakura White Zipper',
            price:3800
        },
        {
            id:v4(),
            category:'MEN',            
            img:'https://i0.wp.com/roshgallery.pk/wp-content/uploads/2023/10/LA.png?w=600&ssl=1',
            title:'Lilac Zipper Hoodie',
            price:7800
        },
        {
            id:v4(),
            category:'MEN',            
            img:'https://images.olx.com.pk/thumbnails/415827081-800x600.webp',
            title:'Bonjour juice',
            price:800
        }

    ]
}

function ProductSection(oldData=puranData, newData){

    oldData = {
        ...oldData,

    };

    switch(newData.type){

        case 'SEARCHED_PRODUCT':
            oldData.searched = newData.payload;
            break;

        case 'ADD_PRODUCT':
            oldData.products.push(newData.payload);
            break;

        case 'ADD_TO_CART':
            oldData.orders.push(newData.payload);
        break;
        
        case 'TOGGLE_LIKE':
            let item  = oldData.products.find(product=>product.id == newData.payload);
            item.liked = !item.liked
            console.log(item)
            break;

    }

    return oldData;

}

let puranAuthData = {
    loggedWalaUser:null,
    users:[]
}

function authSection(oldData=puranAuthData, newData){

    oldData = {
        ...oldData        
    };

    if(newData.type == "USER_ADDED"){
        oldData.users.push(newData.payload);
    }else if(newData.type == "USER_DELETED"){        
        oldData.users.splice(oldData.rowNumber, 1);
        oldData.rowNumber = -1;
    }else if(newData.type == "ROW_SELECTED"){
        oldData.rowNumber = newData.payload;
    }else if(newData.type == "USER_LOGGED"){
        oldData.loggedWalaUser = newData.payload;
    }else if(newData.type == "USER_LOGGED_OUT"){
        oldData.loggedWalaUser = null;
    }

    
    
    

    return oldData;
}

let allSections = combineReducers({ProductSection, authSection})

export let store = createStore(allSections);