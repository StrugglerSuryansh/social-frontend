import React, { useState } from 'react';

function ContentGenerator() {
  const [content, setContent] = useState('');

  const generateContent = async () => {
    // Simulating API call
    const data = { content: 'Generated AI content goes here.' };
    setContent(data.content);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Content Generator</h2>
      <button 
        onClick={generateContent}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate Content
      </button>
      <p className="mt-4 text-gray-700">{content}</p>
    </div>
  );
}

export default ContentGenerator;
