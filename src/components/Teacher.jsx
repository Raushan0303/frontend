import React, { useState, useEffect } from "react";
import axios from "axios";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacherName, setNewTeacherName] = useState("");
  const [newTeacherDep, setNewTeacherDep] = useState("");

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API}/teacher/get-teacher`
      );
      setTeachers(response.data.teacher);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleAddTeacher = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/teacher/create-teacher`,
        {
          name: newTeacherName,
          dep: newTeacherDep,
        }
      );

      console.log("Teacher added successfully:", response.data);

      // Fetch updated teacher list after adding a new teacher
      fetchTeachers();

      // Clear input fields after successful submission
      setNewTeacherName("");
      setNewTeacherDep("");
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };


  const handleDeleteTeacher = async (teacherId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_API}/teacher/delete-teacher/${teacherId}`
      );

      console.log("Teacher deleted successfully:", response.data);

      // Fetch updated teacher list after deleting a teacher
      fetchTeachers();
    } catch (error) {
      console.error("Error deleting teacher:", error);
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
          <h1 className="recent-Articles">Teachers List</h1>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Teacher Name</h3>
            <h3 className="t-op">Department</h3>
            <h3 className="t-op">Action</h3>
          </div>
          <div className="items">
            {teachers.map((teacher) => (
              <div className="item1" key={teacher._id}>
                <h3 className="t-op-nextlvl">{teacher.name}</h3>
                <h3 className="t-op-nextlvl">{teacher.dep}</h3>
                    <button
                className="t-op-nextlvl label-tag"
                onClick={() => handleDeleteTeacher(teacher._id)}
              >
                Delete
              </button>
              </div>
            ))}
          </div>
        </div>
        <div className="adding">
          <h3>Add New Teacher:</h3>
          <input
            type="text"
            placeholder="Name"
            value={newTeacherName}
            onChange={(e) => setNewTeacherName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Department"
            value={newTeacherDep}
            onChange={(e) => setNewTeacherDep(e.target.value)}
          />
          <button onClick={handleAddTeacher}>Add Teacher</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Teacher;