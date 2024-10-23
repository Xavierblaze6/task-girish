// src/App.js

import React, { useState, useEffect } from 'react';
import TaskBoard from './components/TaskBoard/TaskBoard';
import './App.css';

// Import display image from the assets folder
import displayIcon from './assets/Display.svg'; // Image for dropdown symbol

const App = () => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [showControls, setShowControls] = useState(false); // New state to toggle controls visibility

  // Save the state to localStorage for persistence
  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  // Function to toggle the display of controls
  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <div className="App">
      <div className="header">
        {/* Display dropdown button */}
        <div className="dropdown">
          <button onClick={toggleControls} className="dropdown-button">
            Display
            <img src={displayIcon} alt="Display icon" className="dropdown-icon" />
          </button>

          {/* Conditionally render dropdown options */}
          {showControls && (
            <div className="dropdown-content">
              <div className="group-by">
                <label htmlFor="groupBy">Group by: </label>
                <select
                  id="groupBy"
                  value={groupBy}
                  onChange={(e) => setGroupBy(e.target.value)}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              <div className="sort-by">
                <label htmlFor="sortBy">Sort by: </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Task board will always be displayed */}
      <TaskBoard groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
