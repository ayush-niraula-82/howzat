// import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/tailwind.css";
import "./assets/css/main.css";
import "./assets/css/custom.css";
import "react-toastify/dist/ReactToastify.css";

import { Contact, Footer, Home, Match, Sidebar, Two } from "./components";
import { Route, Routes } from "react-router";
import MatchDetails from "./components/MatchDetails";
import MatchTable from "./components/MatchTable";
import Ranking from "./components/Ranking";
import { ToastContainer } from "react-toastify";
import Stats from "./components/Stats";
import StatDetails from "./components/StatDetails";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div id="wrapper" className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match" element={<Match />} />
            <Route path="/two" element={<Two />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/match/:matchType" element={<MatchDetails />} />
            <Route
              path="/match/:matchType/:seriesID"
              element={<MatchTable />}
            />
            <Route path="/stats" element={<Stats />} />
            <Route path="/stats/:statsType" element={<StatDetails />} />

          </Routes>
        </div>

        {/* Footer */}
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
