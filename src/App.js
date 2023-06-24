import Main from "./components/main/HomeMain";
import ReadMoreMain from "./components/main/ReadMoreMain";
import FavoriteMain from "./components/main/FavoriteMain";
import PersonalMain from "./components/main/PersonalMain";
import Registr from "./components/registr/Registr";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageSection from "./components/readMorePage/PageMore1/PageSection";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/PersonalPage" element={<PersonalMain />} />
        <Route path="/FavoritePage" element={<FavoriteMain />} />
        <Route path="/ReadMore/:postId" element={<ReadMoreMain />} />
      </Routes>
    </Router>
  );
}

export default App;
