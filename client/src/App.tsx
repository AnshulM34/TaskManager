import React, { useState, useEffect } from 'react';
import { TaskManager } from './components/TaskManager/TaskManager';

const App = () => {
  return (
    <div data-testid="app">
      <TaskManager />
    </div>
  )
};

export default App;
