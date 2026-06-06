import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overlay from "./components/Overlay.jsx";
import Content from "./components/Content.jsx";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const animEnd = () => setShowContent(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showContent ? (
                <Content />
              ) : (
                <Overlay onFinish={() => animEnd()} />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
