import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { TOPICS } from './data/grammarData';

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

const TopicWrapper = ({ hasAccess, toggleSidebar, onSelectTopic }) => {
  const { topicId } = useParams();
  const topic = findTopic(topicId, TOPICS); // || TOPICS[0]; removed fallback to be strict, or handle 404

  // If not found, maybe redirect to first? or Show 404? 
  // For now let's match behavior: if topicId is valid use it, else null -> MainContent handles null?
  // Current MainContent handles null topic by showing welcome.

  return (
    <MainContent
      topic={topic}
      hasAccess={hasAccess}
      toggleSidebar={toggleSidebar}
      onSelectTopic={onSelectTopic}
    />
  );
};



const AppContent = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(340);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();
  const location = useLocation(); // Now we can use location

  // Extract activeTopicId from location
  // Path: /topic/:id
  const match = location.pathname.match(/\/topic\/([^/]+)/);
  const activeTopicId = match ? match[1] : null;

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSelectTopic = (id) => {
    navigate(`/topic/${id}`);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar
        topics={TOPICS}
        activeTopicId={activeTopicId}
        onSelectTopic={handleSelectTopic}
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
        <Routes>
          {/* Redirect / to first topic or distinct welcome page? 
               User asked "update, tôi muốn mỗi topic là 1 rout khác nhau".
               Old app defaulted to TOPICS[0]. Let's keep a default redirect or welcome.
               Let's show MainContent with no topic (Welcome screen) on /.
           */}
          <Route path="/" element={<MainContent topic={null} toggleSidebar={toggleSidebar} />} />
          <Route path="/topic/:topicId" element={
            <TopicWrapper
              hasAccess={hasAccess}
              toggleSidebar={toggleSidebar}
              onSelectTopic={handleSelectTopic}
            />
          } />
        </Routes>
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

export default AppContent;
