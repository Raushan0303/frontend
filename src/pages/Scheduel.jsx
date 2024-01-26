import {useState} from 'react'

const Scheduel = () => {
    const semesters = [
        { id: "sem-1", name: "First Year (1st sem)" },
        { id: "sem-2", name: "First Year (2nd sem)" },
        { id: "sem-3", name: "Second Year (3rd sem)" },
        { id: "sem-4", name: "Second Year (4th sem)" },
        { id: "sem-5", name: "Third Year (5th sem)" },
        { id: "sem-6", name: "Third Year (6th sem)" },
        { id: "sem-7", name: "Fourth Year (7th sem)" },
        { id: "sem-8", name: "Fourth Year (8th sem)" }
      ];
    
      const branches = [
        { id: "cse", name: "Computer Science Engineering" },
        { id: "cse-ai", name: "Computer Science Engineering (AI)" },
        { id: "ece", name: "Electronics and Communication Engineering" },
        { id: "ee", name: "Electrical Engineering" },
        { id: "ce", name: "Civil Engineering" },
        { id: "me", name: "Mechanical Engineering" }
      ];

      const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  // Function to handle button click
  const handleSearch = () => {
    // Do something with selectedYear and selectedBranch
    console.log("Selected Year:", selectedYear);
    console.log("Selected Branch:", selectedBranch);
  };
    
  return (
    <div style={{height: "100vh",width: "100%"}} className="course">
      {/* Year (Semester) Dropdown */}
      <div className="dropdown">
        <label htmlFor="year-select">Select Year (Semester)</label>
        <select
          id="year-select"
          onChange={(e) => setSelectedYear(JSON.parse(e.target.value))}
          value={JSON.stringify(selectedYear)}
        >
          {semesters.map((semester) => (
            <option key={semester.id} value={JSON.stringify(semester)}>
              {semester.name}
            </option>
          ))}
        </select>
      </div>

      {/* Branch Dropdown */}
      <div className="dropdown">
        <label htmlFor="branch-select">Select Branch</label>
        <select
          id="branch-select"
          onChange={(e) => setSelectedBranch(JSON.parse(e.target.value))}
          value={JSON.stringify(selectedBranch)}
        >
          {branches.map((branch) => (
            <option key={branch.id} value={JSON.stringify(branch)}>
              {branch.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button className="search-btn button" onClick={handleSearch}>
        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
        </svg>
        Search
      </button>
      <br />
    </div>
  );
};

export default Scheduel;
