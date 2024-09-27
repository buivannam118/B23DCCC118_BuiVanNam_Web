import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue('');
            setInputVisible(false);
        }
    };

    return (
        <div className="add-task-container">
            {inputVisible ? (
                <form onSubmit={handleSubmit} className="add-task-form">
                    <input
                        type="text"
                        placeholder="Add task"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="task-input"
                    />
                    <button type="submit" className="submit-task-button">Add   </button>
                </form>
            ) : (
                <div 
                    className="add-task-button" 
                    onClick={() => setInputVisible(true)}
                >
                    <span>+</span> Add task
                </div>
            )}
        </div>
    );
};

export default AddTask;