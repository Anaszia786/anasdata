import { createStore, combineReducers } from "redux";
import { v4  } from 'uuid';

let initialProducts = {
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
        price:100
    },
    {
        id:v4(),
        title:"Pants",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=430%2C430&ssl=1",
        price:100
    },
    {
        id:v4(),
        title:"Zipper 2",
        img:"https://i0.wp.com/roshgallery.pk/wp-content/uploads/2022/01/SWEATSHIRT-orignal-1.jpg?resize=430%2C430&ssl=1",
        price:100
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

function authSection(olData, newData){

    return [];
}

let allSections = combineReducers({ProductSection, authSection})

export let store = createStore(allSections);