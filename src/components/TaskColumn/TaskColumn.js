import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import './TaskColumn.css';

// Import images
import todoImg from '../../assets/To-do.svg';
import inProgressImg from '../../assets/in-progress.svg';
import doneImg from '../../assets/Done.svg';
import backlogImg from '../../assets/Backlog.svg';
import cancelledImg from '../../assets/Cancelled.svg';
import urgentPriorityImg from '../../assets/SVG - Urgent Priority colour.svg';
import highPriorityImg from '../../assets/Img - High Priority.svg';
import lowPriorityImg from '../../assets/Img - Low Priority.svg';
import mediumPriorityImg from '../../assets/Img - Medium Priority.svg';
import noPriorityImg from '../../assets/No-priority.svg';
import plusIcon from '../../assets/add.svg'; // Your + icon
import threeDotsIcon from '../../assets/3 dot menu.svg'; // Your three dots icon

const TaskColumn = ({ title, tasks }) => {
  const getStatusImage = (title) => {
    switch (title) {
      case 'Todo':
        return todoImg;
      case 'In Progress':
        return inProgressImg;
      case 'Done':
        return doneImg;
      case 'Backlog':
        return backlogImg;
      case 'Cancelled':
        return cancelledImg;
      case 'Urgent':
        return urgentPriorityImg;
      case 'High':
        return highPriorityImg;
      case 'Low':
        return lowPriorityImg;
      case 'Medium':
        return mediumPriorityImg;
      case 'No priority':
        return noPriorityImg;
      default:
        return null;
    }
  };

  return (
    <div className="task-column">
      <div className="column-header">
        <div className="header-left">
          <img 
            src={getStatusImage(title)} 
            alt={`Status: ${title}`} 
            className="column-status-image" 
          />
          <h2>{title}</h2>
          <p>{tasks.length}</p>
        </div>
        <div className="header-right">
          <img src={plusIcon} alt="Add Task" className="add-icon" />
          <img src={threeDotsIcon} alt="Options" className="three-dots-icon" />
        </div>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskColumn;
