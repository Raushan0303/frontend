const Dashboard = () => {
  return (
    <div>
      {/* <header>
        <div className="logosec">
          <div className="logo">Dashboard</div>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
              className="icn srchicn"
              alt="search-icon"
            />
          </div>
        </div>

        <div className="message">
          <div className="dp">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header> */}

      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option option1">
                <h3> Dashboard</h3>
              </div>

              <div className="option2 nav-option">
                <h3> Teacher</h3>
              </div>

              <div className="nav-option option3">
                <h3> Class</h3>
              </div>

              <div className="nav-option option4">
                <h3> Subject</h3>
              </div>

              <div className="nav-option option5">
                <h3> Routines</h3>
              </div>

              <div className="nav-option option6">

                <h3> Settings</h3>
              </div>

              <div className="nav-option logout">
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                className="icn srchicn"
                alt="search-button"
              />
            </div>
          </div>
          <div className="box-container">
          </div>
          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">Recent Articles</h1>
              <button className="view">Edit</button>
            </div>
            <div className="report-body">
              <div className="report-topic-heading">
                <h3 className="t-op">S.No.</h3>
                <h3 className="t-op">Teacher Name</h3>
                <h3 className="t-op">Department</h3>
                <h3 className="t-op">Action</h3>
              </div>
              <div className="items">
                <div className="item1">
                  <h3 className="t-op-nextlvl">73</h3>
                  <h3 className="t-op-nextlvl">Article</h3>
                  <h3 className="t-op-nextlvl">ECE</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                <div className="item1">
                  <h3 className="t-op-nextlvl">Article 71</h3>
                  <h3 className="t-op-nextlvl">1.1k</h3>
                  <h3 className="t-op-nextlvl">150</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>

                <div className="item1"> 
							<h3 className="t-op-nextlvl">Article 71</h3> 
							<h3 className="t-op-nextlvl">1.1k</h3> 
							<h3 className="t-op-nextlvl">150</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

						<div className="item1"> 
							<h3 className="t-op-nextlvl">Article 70</h3> 
							<h3 className="t-op-nextlvl">1.2k</h3> 
							<h3 className="t-op-nextlvl">420</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

						<div className="item1"> 
							<h3 className="t-op-nextlvl">Article 69</h3> 
							<h3 className="t-op-nextlvl">2.6k</h3> 
							<h3 className="t-op-nextlvl">190</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

						<div className="item1"> 
							<h3 className="t-op-nextlvl">Article 68</h3> 
							<h3 className="t-op-nextlvl">1.9k</h3> 
							<h3 className="t-op-nextlvl">390</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

						<div className="item1"> 
							<h3 className="t-op-nextlvl">Article 67</h3> 
							<h3 className="t-op-nextlvl">1.2k</h3> 
							<h3 className="t-op-nextlvl">580</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

						<div className="item1"> 
							<h3 className="t-op-nextlvl">Article 66</h3> 
							<h3 className="t-op-nextlvl">3.6k</h3> 
							<h3 className="t-op-nextlvl">160</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

						<div className="item1"> 
							<h3 className="t-op-nextlvl">Article 65</h3> 
							<h3 className="t-op-nextlvl">1.3k</h3> 
							<h3 className="t-op-nextlvl">220</h3> 
							<h3 className="t-op-nextlvl label-tag">Published</h3> 
						</div> 

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
