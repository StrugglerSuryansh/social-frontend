import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Scheduler() {
    const [schedule, setSchedule] = useState([]);

    const createSchedule = async () => {
        // TODO: Implement API call to backend for scheduling
        const response = await fetch('/api/scheduler/create', { method: 'POST' });
        const data = await response.json();
        setSchedule(data.schedule);
    };

    return (
        <div className="space-y-4">
            <Button onClick={createSchedule}>Create Schedule</Button>
            {schedule.length > 0 && (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Time</TableHead>
                            <TableHead>Content</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {schedule.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.time}</TableCell>
                                <TableCell>{item.content}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}

export default Scheduler;
