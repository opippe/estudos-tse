// src/pages/TopicPage.js
import React, { useEffect } from 'react';
import './TopicPage.css';
import useTopicStore from '../store/useTopicStore';

function TopicPage({ title, topics }) {
    const initializeTopicsState = useTopicStore((state) => state.initializeTopicsState);
    const toggleTopic = useTopicStore((state) => state.toggleTopic);

    // Initialize the state when the component mounts
    useEffect(() => {
        initializeTopicsState(title, topics.length);
    }, [initializeTopicsState, title, topics.length]);

    // Retrieve all topic states once, outside of the map function
    const topicStates = useTopicStore((state) =>
        topics.map((_, index) => state.topicsState[`${title}-${index}`] || false)
    );

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {topics.map((topic, index) => {
                    const isCompleted = topicStates[index];

                    return (
                        <li
                            key={index}
                            className={isCompleted ? 'completed' : ''}
                        >
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isCompleted}
                                    onChange={() => toggleTopic(title, index)}
                                />
                                {topic}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TopicPage;
