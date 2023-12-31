import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { AddProducts } from "./pages/AdminProductActions/AddProduct";



const routes = [
    {
        path: '/products',
        component: AddProducts,
        exact: true,
    },
    {
        path: '/',
        component: ProductsPage,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/signup',
        component: Signup,
        exact: true,
    },
];

export default routes;