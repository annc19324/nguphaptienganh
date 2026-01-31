import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { TOPICS } from './data/grammarData';

function App() {
  const [hasAccess, setHasAccess] = useState(false);
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(340);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const findTopic = (id, topics) => {
    for (const topic of topics) {
      if (topic.id === id) return topic;
      if (topic.children) {
        const found = findTopic(id, topic.children);
        if (found) return found;
      }
    }
    return null;
  };

  const activeTopic = findTopic(activeTopicId, TOPICS) || TOPICS[0];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar
        topics={TOPICS}
        activeTopicId={activeTopicId}
        onSelectTopic={setActiveTopicId}
        hasAccess={hasAccess}
        onUnlock={setHasAccess}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        width={sidebarWidth}
        setWidth={setSidebarWidth}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="main-content-importer">
        <MainContent
          topic={activeTopic}
          hasAccess={hasAccess}
          toggleSidebar={toggleSidebar}
          onSelectTopic={setActiveTopicId}
        />
      </div>

      <style>{`
        .main-content-importer {
          flex: 1;
          height: 100vh;
          overflow: hidden;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .main-content-importer {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
