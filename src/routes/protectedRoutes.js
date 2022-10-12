import { Sell, ProcessSale, RegisterSuccess, BvnDetails } from "../pages"


export const protectedRoutes = [ 
    {
        path: '/sell',
        element: <Sell/>
    },
    {
        path: '/process',
        element: <ProcessSale />
    },
    // {
    //     path: '/',
    //     element: < />
    // },
    {
        path: '/account-info',
        element: <BvnDetails />
    },
    {
        path: '/register-success',
        element: <RegisterSuccess />
    },
]
