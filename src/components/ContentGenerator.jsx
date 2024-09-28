import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ContentGenerator() {
    const [content, setContent] = useState('');
    const [platform, setPlatform] = useState('twitter');

    const generateContent = async () => {
        // TODO: Implement API call to backend for content generation
        const response = await fetch('/api/content/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ platform }),
        });
        const data = await response.json();
        setContent(data.content);
    };

    return (
        <div className="space-y-4">
            <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                </SelectContent>
            </Select>
            <Button onClick={generateContent}>Generate Content</Button>
            {content && <p className="mt-4 p-4 bg-gray-100 rounded">{content}</p>}
        </div>
    );
}

export default ContentGenerator;