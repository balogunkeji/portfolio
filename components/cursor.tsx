'use client'
import React, { useEffect, useState } from 'react';

const GlobalCursor: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [width, setWidth] = useState<number>(30); // Default width for the cursor

    const padding = 10; // Padding around the text for spacing

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hovered = target.closest('.cursor-target') as HTMLElement;

            if (hovered) {
                const rect = hovered.getBoundingClientRect();
                // Add padding to the width to fit text inside cursor
                setWidth(rect.width + padding * 2);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.cursor-target')) {
                setWidth(30); // Reset to circle width when not hovering over text
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: width === 30 ? '30px' : `${width}px`, // Adjust width based on hover
                height: '30px', // Keep fixed height for circle
                background: 'none',
                borderRadius: width === 30 ? '50%' : '0px', // Circle when width is 30, otherwise rectangle
                border: '1px solid white',
                transform: `translate(${position.x - width / 2}px, ${position.y - 15}px)`, // Adjust position
                pointerEvents: 'none',
                transition: 'all 0.2s ease',
                zIndex: 9999,
            }}
        />
    );
};

export default GlobalCursor;
