import { createBrowserRouter } from "react-router-dom";
import memberRouter from "./memberRouter";

const root = createBrowserRouter([
    {
        path: "member",
        children: memberRouter()
    }
])

export default root;