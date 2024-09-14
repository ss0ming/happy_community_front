import { Suspense, lazy } from "react";

const Loading = <div>Loading.....</div>;

const Articles = lazy(() => import("../pages/article/ArticlesPage"));
const Article = lazy(() => import("../pages/article/ArticleDetailPage"))

const articleRouter = () => {
    return [
        {
            path: "",
            element: <Suspense fallback={Loading}><Articles/></Suspense>
        },
        {
            path: ":id",
            element: <Suspense fallback={Loading}><Article/></Suspense>
        }
    ]
}

export default articleRouter;