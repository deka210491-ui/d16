
import React, { useState, useEffect, useRef } from 'react';

interface EditableProps {
  id: string;
  className?: string;
  defaultText: string;
  multiline?: boolean;
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const Editable: React.FC<EditableProps> = ({ 
  id, 
  className = '', 
  defaultText, 
  multiline = false,
  tagName: Tag = 'div'
}) => {
  const [text, setText] = useState<string>(() => {
    const saved = localStorage.getItem(`editable_${id}`);
    return saved !== null ? saved : defaultText;
  });
  const textRef = useRef<HTMLElement>(null);

  const handleBlur = () => {
    if (textRef.current) {
      const newText = textRef.current.innerText;
      setText(newText);
      localStorage.setItem(`editable_${id}`, newText);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      textRef.current?.blur();
    }
  };

  return (
    <Tag
      ref={textRef as any}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} focus:ring-1 focus:ring-[#d1b464]`}
    >
      {text}
    </Tag>
  );
};

export default Editable;
