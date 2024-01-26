

const Home = () => {
  return (
    <>
      {/* Class Routine / Schedule System */}
      <section className="course">
        <h1>Class Routine / Schedule System</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="course-col">
            <h3>No of professors created so far.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Itaque voluptatibus sit quia hic aliquam nam! Doloremque cumque placeat, 
               repudiandae soluta exercitationem minus libero magnam, aspernatur, 
               quidem dolor ex aut quibusdam!
            </p>
          </div>
          <div className="course-col">
            <h3>No of users created so far.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Itaque voluptatibus sit quia hic aliquam nam! Doloremque cumque placeat, 
               repudiandae soluta exercitationem minus libero magnam, aspernatur, 
               quidem dolor ex aut quibusdam!
            </p>
          </div>
          <div className="course-col">
            <h3>No of routines created.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Itaque voluptatibus sit quia hic aliquam nam! Doloremque cumque placeat, 
               repudiandae soluta exercitationem minus libero magnam, aspernatur, 
               quidem dolor ex aut quibusdam!
            </p>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-col">
            <img src="./images/london.png" alt="" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="./images/newyork.png" alt="" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src="./images/washington.png" alt="" />
            <div className="layer">
              <h3>TBILISI</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
