// src/components/TaskBoard/TaskBoard.js

import React, { useState, useEffect } from 'react';
import TaskColumn from '../TaskColumn/TaskColumn';

const TaskBoard = ({ groupBy, sortBy }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTasks(data.tickets);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const groupTasks = () => {
    switch (groupBy) {
      case 'status':
        return groupByStatus();
      case 'user':
        return groupByUser();
      case 'priority':
        return groupByPriority();
      default:
        return groupByStatus();
    }
  };

  const groupByStatus = () => {
    const grouped = {
      Todo: [],
      'In Progress': [],
      Done: [],
      Backlog: [],
      Cancelled: [],
    };
    tasks.forEach((task) => grouped[task.status]?.push(task));
    return grouped;
  };

  const groupByUser = () => {
    const grouped = {};
    tasks.forEach((task) => {
      if (!grouped[task.userId]) grouped[task.userId] = [];
      grouped[task.userId].push(task);
    });
    return grouped;
  };

  const groupByPriority = () => {
    const grouped = {
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
      'No priority': [],
    };
    tasks.forEach((task) => {
      switch (task.priority) {
        case 4:
          grouped['Urgent'].push(task);
          break;
        case 3:
          grouped['High'].push(task);
          break;
        case 2:
          grouped['Medium'].push(task);
          break;
        case 1:
          grouped['Low'].push(task);
          break;
        case 0:
        default:
          grouped['No priority'].push(task);
      }
    });
    return grouped;
  };

  const sortTasks = (tasks) => {
    if (sortBy === 'priority') {
      return tasks.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      return tasks.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading tasks: {error.message}</p>;

  const groupedTasks = groupTasks();

  return (
    <div className="task-board">
      {Object.keys(groupedTasks).map((group) => (
        <TaskColumn key={group} title={group} tasks={sortTasks(groupedTasks[group])} />
      ))}
    </div>
  );
  
};

export default TaskBoard;
