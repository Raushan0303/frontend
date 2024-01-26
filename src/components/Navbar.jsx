
export const Navbar = () => {
    const hideMenu = () => {
        // implement hideMenu logic
      };
    
      const showMenu = () => {
        // implement showMenu logic
      };
  return (
    <section className="header">
    <nav>
      <a href="index.html"><img src="../img/logo.png" alt="" /></a>
      <div className="nav-links" id="navLinks">
        <i className="fa-solid fa fa-xmark" onClick={hideMenu}></i>
        <ul>
          <li><a href="/">HOME</a></li>
          {/* <li><a href="./about.html">ABOUT</a></li> */}
          <li><a href="/scheduel">SCHEDULE</a></li>
          <li><a href="/login">Admin Login</a></li>
        </ul>
      </div>
      <i className="fa-solid fa fa-bars" onClick={showMenu}></i>
    </nav>
    <div className="text-box">
      <h1>Team Parallax</h1>
      <p>
        Making Website is now one of the easiest things in the world.<br /> You just
        need to learn HTML, CSS, Javascript, and you are good to go.
      </p>
      <a href="/scheduel" className="hero-btn">Search Your Routine Here</a>
    </div>
  </section>
);
}
