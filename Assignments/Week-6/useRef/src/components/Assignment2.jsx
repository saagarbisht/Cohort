import React, { useRef,useState, useCallback } from 'react';

export function Assignment2() {
    const renderCount = useRef(0);
    const [, forceRender] = useState(0);

    const handleReRender = () => {
        forceRender(Math.random());
    };

    renderCount.current += 1;

    return (
        <div>
            <p>This component has rendered {renderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};