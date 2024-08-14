import React from 'react';

const Toast = ({ message }) => {
    return (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
                <div className="text-xl font-semibold">✅</div>
                <div>{message}</div>
            </div>
        </div>
    );
};

export default Toast;