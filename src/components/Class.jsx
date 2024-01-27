import React, { useState, useEffect } from "react";
import axios from "axios";

const Class = () => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassYear, setNewClassYear] = useState("");

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API}/class/get-class`
      );
      setClasses(response.data.Class);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleAddClass = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/class/create-class`,
        {
          name: newClassName,
          year: newClassYear,
        }
      );

      console.log("Class added successfully:", response.data);

      // Fetch updated class list after adding a new class
      fetchClasses();

      // Clear input fields after successful submission
      setNewClassName("");
      setNewClassYear("");
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  const handleDeleteClass = async (classId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_API}/class/delete-class/${classId}`
      );

      console.log("Class deleted successfully:", response.data);

      // Fetch updated class list after deleting a class
      fetchClasses();
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  return (
    <div>
      <div className="main-container">
      <div className="navcontainer">
      <nav className="nav">
        <div className="nav-upper-options">
          <div className="nav-option option1">
            <h3> Dashboard</h3>
          </div>

          <div className="option2 nav-option">
            <a href="/teacher"><h3> Teacher</h3></a>
          </div>

          <div className="nav-option option3">
            <a href="/class"><h3> Class</h3></a>
          </div>

          <div className="nav-option option4">
            <a href="/subjects"><h3> Subject</h3></a>
          </div>

          <div className="nav-option option5">
            <a href="/routines"><h3> Routines</h3></a>
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
          <h1 className="recent-Articles">Classes List</h1>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">semester</h3>
            <h3 className="t-op">year</h3>
            <h3 className="t-op">Action</h3>
          </div>
        <div className="items">
          {classes.map((classItem) => (
            <div className="item1" key={classItem._id}>
              <h3 className="t-op-nextlvl">{classItem.name}</h3>
              <h3 className="t-op-nextlvl">{classItem.year}</h3>
              <button
                className="t-op-nextlvl label-tag"
                onClick={() => handleDeleteClass(classItem._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        </div>
        <div className="adding">
          <h3>Add New Class:</h3>
          <input
            type="text"
            placeholder="Name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            value={newClassYear}
            onChange={(e) => setNewClassYear(e.target.value)}
          />
          <button onClick={handleAddClass}>Add Class</button>
        </div>
      </div>
    </div>
</div>
</div>
  );
 
};

export default Class;


