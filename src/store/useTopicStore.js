// src/store/useTopicStore.js
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useTopicStore = create(
    persist(
        (set) => ({
            topicsState: {},

            // Action to toggle a topic's completion status
            toggleTopic: (pageTitle, index) => {
                set((state) => {
                    const key = `${pageTitle}-${index}`;
                    const isCompleted = state.topicsState[key] || false;

                    return {
                        topicsState: {
                            ...state.topicsState,
                            [key]: !isCompleted,
                        },
                    };
                });
            },

            // Initialize state if not present
            initializeTopicsState: (pageTitle, length) => {
                set((state) => {
                    const newTopicsState = { ...state.topicsState };

                    for (let i = 0; i < length; i++) {
                        const key = `${pageTitle}-${i}`;
                        if (!(key in newTopicsState)) {
                            newTopicsState[key] = false;
                        }
                    }

                    return { topicsState: newTopicsState };
                });
            },
        }),
        {
            name: 'topics-storage', // Unique name for the storage key
        }
    )
);

export default useTopicStore;
