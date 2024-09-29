import React from 'react';
import ContentGenerator from '../components/ContentGenerator';
import Scheduler from '../components/Scheduler';
import Analytics from '../components/Analytics';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContentGenerator />
          <Scheduler />
          <Analytics />
        </div>
      </div>
    </div>
  );
}

export default Home;
