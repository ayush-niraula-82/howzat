import { Link } from "react-router";

const Sidebar = () => {
  return (
    <>
      {/* <section id="sidebar">
                <div className="inner">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/match">Match</Link></li>
                            <li><Link to="/ranking">Ranking</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </section> */}

      {/* <section id="sidebar" className="w-64 h-full bg-gray-800 text-white shadow-lg">
  <div className="inner p-6">
    <nav>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/match" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Match
          </Link>
        </li>
        <li>
          <Link to="/ranking" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Ranking
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</section> */}

      {/* <section id="sidebar" className="w-full lg:w-64 h-full bg-gray-800 text-white shadow-lg">
  <div className="inner p-6">
    <nav>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/match" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Match
          </Link>
        </li>
        <li>
          <Link to="/ranking" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Ranking
          </Link>
        </li>
        <li>
          <Link to="/stats" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Stats
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</section> */}

      <section
        id="sidebar"
        className="w-full lg:w-64 h-full bg-gray-800 text-white shadow-lg flex flex-col lg:block"
      >
        <div className="inner p-4">
          <nav>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link
                  to="/"
                  className="font-semibold hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/match"
                  className="font-semibold hover:text-blue-400 transition-colors"
                >
                  Match
                </Link>
              </li>
              <li>
                <Link
                  to="/ranking"
                  className="font-semibold hover:text-blue-400 transition-colors"
                >
                  Ranking
                </Link>
              </li>
              <li>
                <Link
                  to="/stats"
                  className="font-semibold hover:text-blue-400 transition-colors"
                >
                  Stats
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-semibold hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
