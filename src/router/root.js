import { createBrowserRouter } from "react-router-dom";
import memberRouter from "./memberRouter";
import articleRouter from "./articleRouter";
import { Suspense, lazy } from "react";

const Loading = <div>Loading.....</div>;

const IntroPage = lazy(() => import("../pages/IntroPage"));

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><IntroPage/></Suspense>
    },
    {
        path: "members",
        children: memberRouter()
    },
    {
        path: "articles",
        children: articleRouter()
    }
])

export default root;