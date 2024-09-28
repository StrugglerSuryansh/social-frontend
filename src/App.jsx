import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import ContentGenerator from './components/ContentGenerator';
import Scheduler from './components/Scheduler';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Content Scheduler and Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <ContentGenerator />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Scheduler</CardTitle>
          </CardHeader>
          <CardContent>
            <Scheduler />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <Analytics />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;