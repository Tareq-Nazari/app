

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
import AdminStoreEdit from "./components/Dashboard/Admin/stores/edit";
import AdminAllProduct from "./components/Dashboard/Admin/products/all";
import AdminProductDetail from "./components/Dashboard/Admin/products/detail";
import AdminProductEdit from "./components/Dashboard/Admin/products/edit";
import AdminCreateProduct from "./components/Dashboard/Admin/products/create";
import AdminAllCategoryProduct from "./components/Dashboard/Admin/categories/product/all";
import AdminAddCategoryProduct from "./components/Dashboard/Admin/categories/product/add";
import AdminAllCategoryStore from "./components/Dashboard/Admin/categories/store/all";
import AdminAddCategoryStore from "./components/Dashboard/Admin/categories/store/add";
import AdminAllFactors from "./components/Dashboard/Admin/factors/all";
import AdminAllUsers from "./components/Dashboard/Admin/users/all";
import AdminDetailUsers from "./components/Dashboard/Admin/users/detail";
import AdminEditUsers from "./components/Dashboard/Admin/users/edit";
import AdminAddUsers from "./components/Dashboard/Admin/users/add";
import AdminProfileShow from "./components/Dashboard/Admin/profile/show";
import AdminProfileEdit from "./components/Dashboard/Admin/profile/edit";
import Sginup from "./components/Sginup";
import * as auth from './services/auth_service';

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
  {path: '/login' , component: Login,beforeEnter: (to,from,next)=>{
      if (!auth.isLoggedIn()) {
        next()
      }else {
        next('/home')
      }
    }},
  {path: '/stores' ,
    component: Stores,
    beforeEnter: (to,from,next) => {
        auth.isLoggedIn() ? next():next('/login')
    }},
  {path: '/shoppingcart' , component: ShoppingCart},
  {path: '/category/:id' , component: category},
  {path: '/shopregister' , component: ShopRegister},
  {path : '/dashboard/store/:id/edit' , component: EditStore},
  {path: '/dashboard/store/:id/edit/skin',component: Skin},
  {path: '/dashboard/store/:id/edit/addproduct',component: AddProduct},
  {path: '/dashboard/store/:id/edit/editproduct',component: EditProduct},
  {path: '/dashboard/store/:id/edit/addproduct/:p_id',component: AddProduct},



  {path: '/dashboard/user' , component: UserDashboard},


  //Admin dashboard routes
  {path: '/dashboard/admin/',component: AdminHome,
  children: [
    {path: 'store/all',component: AdminAllStore},
    {path: 'store/detail',component: AdminStoreDetail},
    {path: 'store/edit',component: AdminStoreEdit},
    {path: 'store/create',component: AdminCreateStore},
    {path: 'product/all',component: AdminAllProduct},
    {path: 'product/detail',component: AdminProductDetail},
    {path: 'product/edit',component: AdminProductEdit},
    {path: 'home/store/create',component: AdminCreateStore},
    {path: 'product/create',component: AdminCreateProduct},
    {path: 'storeCategory/create',component: AdminAddCategoryStore},
    {path: 'storeCategory/all',component: AdminAllCategoryStore},
    {path: 'productCategory/create',component: AdminAddCategoryProduct},
    {path: 'productCategory/all',component: AdminAllCategoryProduct},
    {path: 'factors/all',component: AdminAllFactors},
    {path: 'users/all',component: AdminAllUsers},
    {path: 'user/edit',component: AdminEditUsers},
    {path: 'user/detail',component: AdminDetailUsers},
    {path: 'user/add',component: AdminAddUsers},
    {path: 'profile/show',component: AdminProfileShow},

    {path: 'profile/edit',component: AdminProfileEdit},
  ],beforeEnter: (to,from,next) => {
   if(auth.isLoggedIn())  {

     next()
   } else {
     next('/login')
   }
}},

    {path: 'profile/edit',component: AdminProfileEdit}
//   ],beforeEnter: (to,from,next) => {
//    if(auth.isLoggedIn() == 'admin')  {
//
//      next()
//    } else {
//      next('/login')
//    }
// }






]
