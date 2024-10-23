// src/components/TaskCard/TaskCard.js

import React from 'react';
import './TaskCard.css';

// Import the images from the assets folder
import urgentImg from '../../assets/SVG - Urgent Priority colour.svg';
import highImg from '../../assets/Img - High Priority.svg';
import mediumImg from '../../assets/Img - Medium Priority.svg';
import lowImg from '../../assets/Img - Low Priority.svg';
import noPriorityImg from '../../assets/No-priority.svg';

import todoImg from '../../assets/To-do.svg';
import inProgressImg from '../../assets/in-progress.svg';
import doneImg from '../../assets/Done.svg';
import backlogImg from '../../assets/Backlog.svg';
import cancelledImg from '../../assets/Cancelled.svg';

const TaskCard = ({ task }) => {
  // Function to return the correct priority image
  const getPriorityImage = (priority) => {
    switch (priority) {
      case 4:
        return urgentImg;
      case 3:
        return highImg;
      case 2:
        return mediumImg;
      case 1:
        return lowImg;
      case 0:
      default:
        return noPriorityImg;
    }
  };

  // Function to return the correct status image
  const getStatusImage = (status) => {
    switch (status) {
      case 'Todo':
        return todoImg;
      case 'In progress':
        return inProgressImg;
      case 'Done':
        return doneImg;
      case 'Backlog':
        return backlogImg;
      case 'Cancelled':
        return cancelledImg;
      default:
        return '';
    }
  };

  return (
    <div className="task-card">
      <div className="task-card-content">
        <img 
          src={getPriorityImage(task.priority)} 
          alt={`Priority: ${task.priority}`} 
          className="priority-image" 
        />
        <img 
          src={getStatusImage(task.status)} 
          alt={`Status: ${task.status}`} 
          className="status-image" 
        />
        <div className="task-details">
          <h3>{task.title}</h3>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          {/* Feature Request Box */}
          <div className="feature-request-box">Feature Request</div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
