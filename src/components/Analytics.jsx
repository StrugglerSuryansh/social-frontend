import React, { useState, useEffect } from 'react';

function Analytics() {
  const [analytics, setAnalytics] = useState({ engagementRate: 75, totalPosts: 50 });

  useEffect(() => {
    // Simulating API call for analytics
    const fetchAnalytics = async () => {
      const data = { engagementRate: 75, totalPosts: 50 };
      setAnalytics(data);
    };
    fetchAnalytics();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <p className="text-gray-700">Engagement Rate: {analytics.engagementRate}%</p>
      <p className="text-gray-700">Total Posts: {analytics.totalPosts}</p>
    </div>
  );
}

export default Analytics;
