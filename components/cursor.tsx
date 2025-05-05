'use client'
import React, { useEffect, useState } from 'react';

const GlobalCursor: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [size, setSize] = useState<{ width: number; height: number }>({ width: 30, height: 30 }); // Default size for the cursor

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hovered = target.closest('.cursor-target') as HTMLElement;

            if (hovered) {
                const rect = hovered.getBoundingClientRect();
                // Ensure the cursor size doesn't extend to neighboring elements
                setSize({ width: rect.width, height: rect.height });
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.cursor-target')) {
                setSize({ width: 30, height: 30 }); // Reset to circle size when not hovering over text
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
                width: size.width === 30 ? '30px' : `${size.width}px`,
                height: size.height === 30 ? '30px' : `${size.height}px`,
                background: 'none',
                borderRadius: size.width === 30 ? '50%' : '0px',
                border: '1px solid white',
                transform: `translate(${position.x - size.width / 2}px, ${position.y - size.height / 2}px)`, // Center the cursor
                pointerEvents: 'none',
                transition: 'all 0.2s ease',
                zIndex: 9999,
            }}
        />
    );
};

export default GlobalCursor;
