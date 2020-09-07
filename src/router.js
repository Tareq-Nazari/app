
import newStore from "./components/Dashboard/Store/newStore"
import productEditPage from "./components/Dashboard/Store/productEditPage"
import StorePage from "./components/StorePage";
import Contact from "./components/Contact";
import Home from "./components/Home"
import ProductDetail from "./components/ProductDetail";
import EditStore from "./components/Dashboard/Store/EditStore";
import Skin from "./components/Dashboard/Store/Skin";
import AddProduct from "./components/Dashboard/Store/AddProduct";
import EditProduct from "./components/Dashboard/Store/EditProduct";
import StoreInfo from "./components/Dashboard/Store/StoreInfo";
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
import AdminStoreEditHeaderPic from "./components/Dashboard/Admin/stores/editHeaderPic";
import AdminStoreEditProfilePic from "./components/Dashboard/Admin/stores/editProfilePic";
import AdminAllProduct from "./components/Dashboard/Admin/products/all";
import AdminProductDetail from "./components/Dashboard/Admin/products/detail";
import AdminProductEdit from "./components/Dashboard/Admin/products/edit";
import AdminProductEditPic from "./components/Dashboard/Admin/products/editPic";
import AdminCreateProduct from "./components/Dashboard/Admin/products/create";
import AdminAllCategoryProduct from "./components/Dashboard/Admin/categories/product/all";
import AdminAddCategoryProduct from "./components/Dashboard/Admin/categories/product/add";
import AdminAllCategoryStore from "./components/Dashboard/Admin/categories/store/all";
import AdminAddCategoryStore from "./components/Dashboard/Admin/categories/store/add";
import AdminAllFactors from "./components/Dashboard/Admin/factors/all";
import AdminAllUsers from "./components/Dashboard/Admin/users/all";
import AdminDetailUsers from "./components/Dashboard/Admin/users/detail";
import AdminEditUsers from "./components/Dashboard/Admin/users/edit";
import AdminEditUsersPic from "./components/Dashboard/Admin/users/editPic";
import AdminAddUsers from "./components/Dashboard/Admin/users/add";
import AdminProfileShow from "./components/Dashboard/Admin/profile/show";
import AdminProfileEdit from "./components/Dashboard/Admin/profile/edit";
import AdminProfileEditPic from "./components/Dashboard/Admin/profile/editPic";
import Sginup from "./components/Sginup";
import * as auth from './services/auth_service';
import {getScope, isLoggedIn} from "./services/auth_service";
import Products from "./components/Products"



export const routes =[
  {path: '/stores' , component: Stores},
  {path: '/products' , component: Products},
  {path: '/contact' , component: Contact , children : [


    ]},

  {path: '/storePage' , component : StorePage},
  {path: '/signup' , component: Sginup},
  {path: '/search' , component: Search},

  {path : '*' , component: Home},
  {path: '/product/:id' , component: ProductDetail},
  {path: '/login' , component: Login,beforeEnter: (to,from,next)=>{
      if (!auth.isLoggedIn()) {
        next()
      }else {
        next('/home')
      }
    }},

  {path: '/shoppingcart' , component: ShoppingCart},
  {path: '/category/:id' , component: category},
  {path: '/shopregister' , component: ShopRegister},




  {path : '/dashboard/store/' , component: newStore , children: [
      {path: '' , component: EditStore},
      {path: 'skin',component: Skin},
      {path: 'addproduct',component: AddProduct},
      {path: 'editproduct',component: EditProduct},
      {path: 'editproduct/:id' , component: productEditPage},
      {path: 'storenfo' , component: StoreInfo}


    ],
  beforeEnter: (to , from , next) => {

     if (auth.isLoggedIn()) {
       next()
     }else  {
       next('/login')
     }
  }},




  {path: '/dashboard/user/' , component: UserDashboard,beforeEnter: (to,from ,next) => {
    if (isLoggedIn()) {
      next()
    } else next('/login')
    }},


  //Admin dashboard routes
  {path: '/dashboard/admin/',component: AdminHome,
  children: [
    {path: 'store/all',component: AdminAllStore},
    {path: 'store/detail',component: AdminStoreDetail},
    {path: 'store/edit',component: AdminStoreEdit},
    {path: 'store/edit_profile_pic',component: AdminStoreEditProfilePic},
    {path: 'store/edit_header_pic',component: AdminStoreEditHeaderPic},
    {path: 'store/create',component: AdminCreateStore},
    {path: 'product/all',component: AdminAllProduct},
    {path: 'product/detail',component: AdminProductDetail},
    {path: 'product/edit',component: AdminProductEdit},
    {path: 'product/editPic',component: AdminProductEditPic},
    {path: 'home/store/create',component: AdminCreateStore},
    {path: 'product/create',component: AdminCreateProduct},
    {path: 'storeCategory/create',component: AdminAddCategoryStore},
    {path: 'storeCategory/all',component: AdminAllCategoryStore},
    {path: 'productCategory/create',component: AdminAddCategoryProduct},
    {path: 'productCategory/all',component: AdminAllCategoryProduct},
    {path: 'factors/all',component: AdminAllFactors},
    {path: 'users/all',component: AdminAllUsers},
    {path: 'user/edit',component: AdminEditUsers},
    {path: 'user/edit_pic',component: AdminEditUsersPic},
    {path: 'user/detail',component: AdminDetailUsers},
    {path: 'user/add',component: AdminAddUsers},
    {path: 'profile/show',component: AdminProfileShow},
    {path: 'profile/edit',component: AdminProfileEdit},
    {path: 'profile/editPic',component: AdminProfileEditPic},
    ],
  // ],beforeEnter: (to,from,next) => {
  //     if(auth.isLoggedIn() )  {
  //
  //       next()
  //     } else {
  //      next('/login')
  //     }

},

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
