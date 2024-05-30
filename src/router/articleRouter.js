import { Suspense, lazy } from "react";

const Loading = <div>Loading.....</div>;

const Articles = lazy(() =>import("../pages/article/ArticlesPage"));

const articleRouter = () => {
    return [
        {
            path: "",
            element: <Suspense fallback={Loading}><Articles/></Suspense>
        }
    ]
}

export default articleRouter;