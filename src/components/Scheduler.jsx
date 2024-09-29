import React, { useState } from 'react';

function Scheduler() {
  const [schedule, setSchedule] = useState([]);

  const createSchedule = async () => {
    const data = { schedule: ['Post 1 - Tomorrow', 'Post 2 - Next Week'] };
    setSchedule(data.schedule);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Content Scheduler</h2>
      <button 
        onClick={createSchedule}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Create Schedule
      </button>
      <ul className="mt-4 list-disc list-inside">
        {schedule.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Scheduler;
