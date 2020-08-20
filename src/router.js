

import StorePage from "./components/StorePage";
import Contact from "./components/Contact";
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail";
import EditStore from "./components/Dashboard/Store/EditStore";
import Skin from "./components/Dashboard/Store/Skin";
import AddProduct from "./components/Dashboard/Store/AddProduct";
import EditProduct from "./components/Dashboard/Store/EditProduct";
import category from "./components/category";
import ShopRegister from "./components/ShopRegister";
import Login from "./components/Login";
import Stores from "./components/Stores";
import Search from "./components/Search";
import AdminHome from "./components/Dashboard/Admin/AdminHome";
import AdminCreateStore from "./components/Dashboard/Admin/stores/create.vue";
import ShoppingCart from "./components/ShoppingCart";
import UserDashboard from "./components/Dashboard/user/UserDashboard";
import AdminAllStore from "./components/Dashboard/Admin/stores/all";
import AdminStoreDetail from "./components/Dashboard/Admin/stores/detail";
<<<<<<< HEAD
import AdminStoreEdit from "./components/Dashboard/Admin/stores/edit";
=======
import Sginup from "./components/Sginup";
>>>>>>> 973a5dbb142fcd2f00792cb655eed56fe211714a
export const routes = [

  {path : '/store' , components:{
    default: StorePage,

    }},
  {path : '/store/:id' , components: StorePage},
  {path: '/contact' , component: Contact , children : [


    ]},
  {path: '/signup' , component: Sginup},
  {path: '/search' , component: Search},
  {path: '' , component: Home},
  {path : '*' , component: StorePage},
  {path: '/product/:id' , component: ProductDetail},
  {path: '/login' , component: Login},
  {path: '/stores' , component: Stores},
  {path: '/category/:id' , component: category},
  {path: '/shopregister' , component: ShopRegister},
  {path : '/dashboard/store/:id/edit' , component: EditStore},
  {path: '/dashboard/store/:id/edit/skin',component: Skin},
  {path: '/dashboard/store/:id/edit/addproduct',component: AddProduct},
  {path: '/dashboard/store/:id/edit/editproduct',component: EditProduct},
  {path: '/dashboard/store/:id/edit/addproduct/:p_id',component: AddProduct},
  {path: '/dashboard/admin/home',component: AdminHome},
  {path: '/dashboard/admin/store/create',component: AdminCreateStore},
  {path: '/shoppingcart' , component: ShoppingCart},
  {path: '/dashboard/user' , component: UserDashboard},
  {path: '/dashboard/admin/store/all',component: AdminAllStore},
  {path: '/dashboard/admin/store/detail/:store_id',component: AdminStoreDetail},
  {path: '/dashboard/admin/store/edit',component: AdminStoreEdit}




]
