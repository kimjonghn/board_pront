/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import ViewPost from "./pages/viewpost/ViewPost";
import Write from "./pages/write/Write";
import Modify from "./pages/modify/Modify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/view/:boardId" element={<ViewPost/>}/>
      <Route path="/modify/:boardId" element={<Modify/>}/>

    </Routes>  
  );
}

export default App;
