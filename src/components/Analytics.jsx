import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Analytics() {
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        // TODO: Implement API call to backend for analytics
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setAnalytics(data);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">{analytics.engagementRate}%</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Total Posts</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">{analytics.totalPosts}</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default Analytics;