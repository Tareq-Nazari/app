import StorePage from "./components/StorePage";
import Contact from "./components/Contact";
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail";
import Accessories from "./components/Accessories";



export const routes = [

  {path : '/store' , components:{
    default: StorePage,

    }},
  {path : '/store/:id' , components: StorePage},
  {path: '/contact' , component: Contact , children : [



    ]},
  {path: '' , component: Home},
  {path : '*' , component: StorePage},
  {path: '/product' , component: ProductDetail},

  {path: '/accessories' , component: Accessories},




]
