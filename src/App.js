import Main from "./components/main/HomeMain";
import ReadMoreMain from "./components/main/ReadMoreMain";
import FavoriteMain from "./components/main/FavoriteMain";
import PersonalMain from "./components/main/PersonalMain";
import Read2MoreMain from "./components/main/Read2MoreMain";
import Read3MoreMain from "./components/main/Read3MoreMain";
import Read4MoreMain from "./components/main/Read4MoreMain";
import Read5MoreMain from "./components/main/Read5MoreMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
      path: "/PersonalPage",
      element: <PersonalMain/>
    },
    {
      path: "/FavoritePage",
      element: <FavoriteMain />
    },
    {
      path: "/ReadMore1",
      element: <ReadMoreMain />
    },
    {
      path: "/ReadMore2",
      element: <Read2MoreMain />
    },
    {
      path: "/ReadMore3",
      element: <Read3MoreMain />
    },
    {
      path: "/ReadMore4",
      element: <Read4MoreMain />
    },
    {
      path: "/ReadMore5",
      element: <Read5MoreMain />
    },
  ])
  return <RouterProvider router={router} />
}

// function App(){
//   return(
//     <>
//     <
//     </>
//   )
// }
export default App;
