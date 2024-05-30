import { createBrowserRouter } from "react-router-dom";
import memberRouter from "./memberRouter";
import articleRouter from "./articleRouter";

const root = createBrowserRouter([
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