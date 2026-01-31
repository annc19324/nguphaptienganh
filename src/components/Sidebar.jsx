import React, { useState, useCallback, useEffect } from 'react';
import { Lock, Unlock, BookOpen, ChevronRight, ChevronDown, GraduationCap, Sun, Moon, XCircle, Facebook } from 'lucide-react';

const Sidebar = ({
  topics,
  activeTopicId,
  onSelectTopic,
  hasAccess,
  onUnlock,
  isOpen,
  toggleSidebar,
  width,
  setWidth,
  theme,
  onToggleTheme
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Zeanokai@1') {
      onUnlock(true);
      setError(false);
      setPassword('');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        const newWidth = mouseMoveEvent.clientX;
        if (newWidth > 250 && newWidth < 500) {
          setWidth(newWidth);
        }
      }
    },
    [isResizing, setWidth]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      style={{ width: isOpen && window.innerWidth <= 768 ? '85%' : width }}
    >
      <div className="sidebar-header">
        <div className="brand">
          {/* <GraduationCap size={28} color="var(--primary)" /> */}
          <img src="/annc19324.png" alt="Logo" className="logo" style={{ width: '20px', height: '20px' }} />
          <h2>DemoGrammar</h2>
        </div>
        <div className="header-actions">
          <button className="icon-btn theme-toggle" onClick={onToggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="icon-btn mobile-only close-sidebar" onClick={toggleSidebar}>
            <XCircle size={20} />
          </button>
        </div>
      </div>

      <div className="access-panel animate-fade">
        <div className="access-header">
          {hasAccess ? <Unlock size={16} color="var(--success)" /> : <Lock size={16} color="var(--text-muted)" />}
          <span>{hasAccess ? 'Đã kích hoạt bản đầy đủ' : 'Kích hoạt Pro'}</span>
        </div>

        {!hasAccess ? (
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Nhập mã kích hoạt..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`input-field ${error ? 'error' : ''}`}
              style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
            />
          </form>
        ) : (
          <div className="access-status">
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              Bạn đang sử dụng quyền truy cập đầy đủ.
            </p>
            <button
              className="logout-btn"
              onClick={() => onUnlock(false)}
              style={{
                width: '100%',
                padding: '6px',
                fontSize: '0.8rem',
                background: 'rgba(239, 68, 68, 0.1)',
                color: 'var(--error)',
                border: '1px solid var(--error)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Đăng xuất / Khóa Key
            </button>
          </div>
        )}
      </div>

      <div className="topics-list">
        {topics.map((topic) => (
          <React.Fragment key={topic.id}>
            <div
              className={`topic-item ${activeTopicId === topic.id ? 'active' : ''}`}
              onClick={() => {
                onSelectTopic(topic.id);
                if (topic.children) {
                  toggleTopic(topic.id);
                } else {
                  if (window.innerWidth <= 768) toggleSidebar();
                }
              }}
            >
              <div className="item-content">
                <BookOpen size={16} className="icon" />
                <span className="title">{topic.title}</span>
              </div>
              {topic.children && (
                expandedTopics[topic.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />
              )}
            </div>

            {topic.children && expandedTopics[topic.id] && (
              <div className="sub-topics-list">
                {topic.children.map((child) => (
                  <div
                    key={child.id}
                    className={`topic-item sub-item ${activeTopicId === child.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTopic(child.id);
                      if (window.innerWidth <= 768) toggleSidebar();
                    }}
                  >
                    <span className="title">{child.title}</span>
                    {activeTopicId === child.id && <ChevronRight size={14} />}
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="sidebar-footer">
        <a
          href="https://facebook.com/annc19324"
          target="_blank"
          rel="noopener noreferrer"
          className="fb-link"
        >
          <Facebook size={18} />
          <span>Báo lỗi đáp án / Trợ giúp</span>
        </a>
      </div>

      <div
        className={`resize-handle ${isResizing ? 'resizing' : ''}`}
        onMouseDown={startResizing}
        style={{
          position: 'absolute',
          right: '-4px',
          top: 0,
          bottom: 0,
          width: '8px',
          cursor: 'col-resize',
          zIndex: 10,
          background: isResizing ? 'var(--primary)' : 'transparent',
          opacity: 0.2
        }}
      />
    </div>
  );
};

export default Sidebar;
