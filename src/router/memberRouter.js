import { Suspense, lazy } from "react";

const Loading = <div>Loading.....</div>;

const Login = lazy(() => import("../pages/member/LoginPage"));
const Signup = lazy(() => import("../pages/member/SignupPage"))

const memberRouter = () => {
    return [
        {
            path: "login",
            element: <Suspense fallback={Loading}><Login/></Suspense>
        },
        {
            path: "signup",
            element: <Suspense fallback={Loading}><Signup/></Suspense>
        }
    ]
}

export default memberRouter;