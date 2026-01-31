import React, { useState } from 'react';
import { Menu, CheckCircle, XCircle, RotateCcw, Eye, EyeOff, GraduationCap, ChevronRight, BookOpen, PenTool, Lightbulb } from 'lucide-react';

const MainContent = ({ topic, hasAccess, toggleSidebar, onSelectTopic }) => {
  if (!topic) return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <BookOpen size={64} color="var(--primary)" />
        <h2>Vui lòng chọn một chuyên đề bên trái để bắt đầu học</h2>
        <p>Học ngữ pháp tiếng Anh toàn diện với hàng ngàn bài tập chi tiết.</p>
        <button className="cta-button mobile-only" onClick={toggleSidebar}>
          Mở danh sách chuyên đề
        </button>
      </div>
    </div>
  );

  const hasSections = topic.sections && topic.sections.length > 0;
  const hasChildren = topic.children && topic.children.length > 0;

  return (
    <div className="main-content">
      <div className="top-bar">
        <button className="menu-btn mobile-only" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <h1 className="topic-title">{topic.title}</h1>
      </div>

      <div className="content-container animate-slide-up">
        {hasSections ? (
          topic.sections.map((section, index) => (
            <Section key={index} section={section} hasAccess={hasAccess} />
          ))
        ) : hasChildren ? (
          <div className="directory-screen">
            <div className="directory-header">
              <div className="topic-badge">Chuyên đề mục lục</div>
              <h2>Nội dung chuyên đề</h2>
              <p>Chọn một bài học hoặc bài tập dưới đây để bắt đầu học</p>
            </div>
            <div className="directory-grid">
              {topic.children.map((child, idx) => (
                <div
                  key={child.id}
                  className="directory-card animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => {
                    onSelectTopic(child.id);
                    if (window.innerWidth <= 768) toggleSidebar();
                  }}
                >
                  <div className="card-icon">
                    {child.title.includes('LÝ THUYẾT') ? <Lightbulb size={24} /> : <PenTool size={24} />}
                  </div>
                  <div className="card-info">
                    <h3>{child.title}</h3>
                    <p>{child.category || 'Nội dung bài học'}</p>
                  </div>
                  <ChevronRight size={20} className="arrow" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <BookOpen size={48} color="var(--text-muted)" />
            <p>Chưa có nội dung cho phần này.</p>
          </div>
        )}
      </div>

    </div>
  );
};

const Section = ({ section, hasAccess }) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <h2 className="section-title">{section.title}</h2>
        {section.subtitle && <p className="section-subtitle">{section.subtitle}</p>}
      </div>

      <div className="section-body">
        {section.type === 'list' && (
          <ul className="custom-list">
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {section.type === 'custom' && (
          <div className="formulas">
            {section.content.map((block, i) => (
              <div key={i} className="formula-block">
                <h3>{block.subtitle}</h3>
                <div className="formula-cases">
                  {block.cases.map((c, j) => (
                    <div key={j} className="formula-row">
                      {c.label && <span className="case-label">{c.label}</span>}
                      <code className="case-formula">{c.formula}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {section.type === 'exercise' && (
          <ExerciseSection questions={section.questions} hasAccess={hasAccess} />
        )}
      </div>
    </div>
  );
};

const ExerciseSection = ({ questions, hasAccess }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});

  const handleInputChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    if (results[id]) {
      setResults(prev => {
        const nr = { ...prev };
        delete nr[id];
        return nr;
      });
    }
  };

  const checkAnswers = () => {
    const nr = {};
    questions.forEach(q => {
      let isCorrect = false;
      if (q.type === 'error_correction') {
        const uAns = answers[q.id] || {};
        isCorrect = (uAns.selected || '').trim() === (q.answer || '').trim() &&
          (uAns.correction || '').trim().toLowerCase() === (q.correction || '').trim().toLowerCase();
      } else {
        const correctAnswers = (q.answer || '').split('|').map(a => a.trim().toLowerCase());
        const userAnswer = answers[q.id];
        const gapsCount = (q.text.match(/_{3,}/g) || []).length;
        if (gapsCount > 1) {
          if (typeof userAnswer === 'object' && userAnswer !== null) {
            let all = true;
            for (let i = 0; i < gapsCount; i++) {
              if ((userAnswer[i] || '').trim().toLowerCase() !== (correctAnswers[i] || '').trim().toLowerCase()) {
                all = false; break;
              }
            }
            isCorrect = all;
          }
        } else {
          isCorrect = (typeof userAnswer === 'string' ? userAnswer : '').trim().toLowerCase() === (correctAnswers[0] || '').trim().toLowerCase();
        }
      }
      nr[q.id] = isCorrect ? 'correct' : 'incorrect';
    });
    setResults(nr);
  };

  return (
    <div className="exercise-section">
      <div className="questions-list">
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} hasAccess={hasAccess} userAnswer={answers[q.id] || ''} onChange={(v) => handleInputChange(q.id, v)} result={results[q.id]} />
        ))}
      </div>
      <div className="exercise-actions">
        <button className="btn btn-primary" onClick={checkAnswers}><CheckCircle size={18} /> Check Answers</button>
        <button className="btn btn-ghost" onClick={() => { setAnswers({}); setResults({}); }}><RotateCcw size={18} /> Reset</button>
      </div>
    </div>
  );
};

const QuestionItem = ({ question, hasAccess, userAnswer, onChange, result }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const tagRegex = /(<u>.*?<\/u>|<b>.*?<\/b>)/g;

  const formatText = (text) => {
    if (!text) return text;
    return text.split(tagRegex).map((seg, i) => {
      if (seg.startsWith('<u>')) return <span key={i} className="formatted-u">{seg.slice(3, -4)}</span>;
      if (seg.startsWith('<b>')) return <b key={i}>{seg.slice(3, -4)}</b>;
      return seg;
    });
  };

  const renderContent = () => {
    if (question.type === 'error_correction') {
      const segments = (question.text || '').split(tagRegex);
      let optIdx = 0;
      return (
        <span className="q-text error-correction-text">
          {segments.map((seg, i) => {
            const isOpt = seg.startsWith('<u>') || seg.startsWith('<b>');
            if (isOpt) {
              const content = seg.slice(3, -4);
              const label = String.fromCharCode(65 + optIdx++);
              const isSelected = (userAnswer && userAnswer.selected) === content;
              let cls = `clickable-option ${seg.startsWith('<b>') ? 'bold-marker' : ''} ${isSelected ? 'selected' : ''}`;
              if (result) cls += (content === question.answer) ? (isSelected ? " correct-choice" : " missed-choice") : (isSelected ? " incorrect-choice" : "");
              return (
                <span key={i} className={cls} onClick={() => !result && onChange({ ...userAnswer, selected: content })}>
                  <span className="option-letter">({label})</span>
                  <span className="option-content">{content}</span>
                </span>
              );
            }
            return <span key={i}>{seg}</span>;
          })}
        </span>
      );
    }

    const hasGaps = question.text && question.text.match(/_{3,}/);
    if (question.type === 'multiple_choice' || !hasGaps) return <span className="q-text">{formatText(question.text)}</span>;

    const parts = question.text.split(/_{3,}/);
    const correctAnswers = (question.answer || '').split('|').map(a => a.trim().toLowerCase());
    return (
      <span className="q-text inline-wrapper">
        {parts.map((part, index) => {
          if (index === parts.length - 1) return <React.Fragment key={index}>{formatText(part)}</React.Fragment>;
          const curr = userAnswer && typeof userAnswer === 'object' ? userAnswer[index] || '' : userAnswer || '';
          const proper = correctAnswers[index] || '';
          const gapRes = result ? (curr.trim().toLowerCase() === proper ? 'correct' : 'incorrect') : '';
          const width = `${Math.min(Math.max(120, Math.max(curr.length, proper.length) * 9), 600)}px`;
          return (
            <React.Fragment key={index}>
              {formatText(part)}
              <span className="input-wrapper">
                <input type="text" className={`inline-input ${gapRes}`} style={{ width }} value={curr} onChange={(e) => {
                  if (parts.length > 2) {
                    const next = typeof userAnswer === 'object' ? { ...userAnswer } : {};
                    next[index] = e.target.value; onChange(next);
                  } else onChange(e.target.value);
                }} autoComplete="off" />
                {gapRes === 'correct' && <CheckCircle size={18} color="var(--success)" className="inline-icon" />}
                {gapRes === 'incorrect' && <XCircle size={18} color="var(--error)" className="inline-icon" />}
              </span>
            </React.Fragment>
          );
        })}
      </span>
    );
  };

  return (
    <div className={`question-item ${result || ''}`}>
      <div className="question-content">
        <span className="q-label">Question {question.id}:</span>
        <div className="q-text-wrapper">{renderContent()}</div>
      </div>
      <div className="interaction-area">
        {question.options && question.type !== 'error_correction' ? (
          <div className="options-grid">
            {question.options.map((option, idx) => {
              const isSelected = userAnswer === option;
              const letter = String.fromCharCode(65 + idx);
              const isCorrect = option === question.answer || letter === question.answer;
              let cls = isSelected ? 'selected' : '';
              if (result) cls = isCorrect ? 'correct' : (isSelected ? 'incorrect' : '');
              return (
                <label key={idx} className={`option-label ${cls}`}>
                  <input type="radio" checked={isSelected} onChange={() => !result && onChange(option)} disabled={!!result} />
                  <span className="option-label-container">
                    <span className="option-letter">{letter}.</span>
                    <span className="option-text">{option}</span>
                  </span>
                  {result && isCorrect && <CheckCircle size={18} color="var(--success)" />}
                  {result && isSelected && !isCorrect && <XCircle size={18} color="var(--error)" />}
                </label>
              );
            })}
          </div>
        ) : (
          <>
            {question.type === 'error_correction' && (
              <div className="error-correction-input">
                <label>Correction:</label>
                <input type="text" className={`input-field answer-input ${result ? ((userAnswer.correction || '').trim().toLowerCase() === (question.correction || '').trim().toLowerCase() ? 'correct' : 'incorrect') : ''}`} placeholder="Type correction..." value={(userAnswer && userAnswer.correction) || ''} onChange={(e) => !result && onChange({ ...userAnswer, correction: e.target.value })} disabled={!!result} />
                {result && <span className="correct-correction-hint"> (Key: {question.correction})</span>}
              </div>
            )}
            {question.type !== 'error_correction' && !question.text.match(/_{3,}/) && (
              <div className="input-wrapper">
                <input type="text" className={`input-field answer-input ${result || ''}`} placeholder="Your answer..." value={userAnswer || ''} onChange={(e) => !result && onChange(e.target.value)} disabled={!!result} />
                {result === 'correct' && <CheckCircle size={20} color="var(--success)" className="status-icon" style={{ marginLeft: '10px' }} />}
                {result === 'incorrect' && <XCircle size={20} color="var(--error)" className="status-icon" style={{ marginLeft: '10px' }} />}
              </div>
            )}
          </>
        )}
      </div>
      <div className="answer-section">
        <button className={`reveal-btn ${showAnswer ? 'active' : ''}`} onClick={() => hasAccess && setShowAnswer(!showAnswer)}>
          {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />} {showAnswer ? 'Ẩn đáp án & Giải thích' : 'Xem đáp án & Giải thích'}
        </button>
        {showAnswer && (
          <div className="answer-content">
            <div className="key-row">
              <strong>Đáp án:</strong>
              <span className="key-value">
                {(() => {
                  if (question.type === 'multiple_choice' && question.options) {
                    const isLetter = /^[A-D]$/.test(question.answer);
                    if (isLetter) {
                      const idx = question.answer.charCodeAt(0) - 65;
                      return `${question.answer}. ${question.options[idx]}`;
                    }
                  }
                  return question.answer;
                })()}
              </span>
              {question.correction && <span className="correction-value"> (Sửa thành: {question.correction})</span>}
            </div>
            {question.explanation && (
              <div className="explanation-box">
                <strong>Giải thích chi tiết:</strong>
                <p>{question.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
