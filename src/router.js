import StorePage from "./components/StorePage";
import Contact from "./components/Contact";
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail";


export const routes = [

  {path : '/store' , components:{
    default: StorePage,

    }},
  {path: '/contact' , component: Contact , children : [



    ]},
  {path: '' , component: Home},
  {path : '*' , component: StorePage},
  {path: '/product' , component: ProductDetail}



]
