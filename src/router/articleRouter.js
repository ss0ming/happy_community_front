import { Suspense, lazy } from "react";

const Loading = <div>Loading.....</div>;

const Articles = lazy(() => import("../pages/article/ArticlesPage"));
const Article = lazy(() => import("../pages/article/ArticleDetailPage"));
const ArticleEdit = lazy(() => import("../pages/article/ArticleEditPage"));
const ArticleAdd = lazy(() => import("../pages/article/ArticleAddPage"));

const articleRouter = () => {
    return [
        {
            path: "",
            element: <Suspense fallback={Loading}><Articles/></Suspense>
        },
        {
            path: "register",
            element: <Suspense fallback={Loading}><ArticleAdd/></Suspense>
        },
        {
            path: ":id",
            element: <Suspense fallback={Loading}><Article/></Suspense>
        },
        {
            path: ":id/edit",
            element: <Suspense fallback={Loading}><ArticleEdit></ArticleEdit></Suspense>
        }
    ]
}

export default articleRouter;