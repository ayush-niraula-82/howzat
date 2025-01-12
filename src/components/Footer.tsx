const Footer = () => {
  return (
    <>
      <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
          <ul className="menu">
            🥸 Developed By :{" "}
            <a
              href="https://github.com/AyushNiraula/"
              className="underline"
              target="_blank"
              style={{ color: "white" }}
            >
              Ayush Niraula
            </a>{" "}
            <br />
            🧑‍💻 Technology Used : React JS, Vite, TypeScript, TailwindCSS,
            React-Router, Redux
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
