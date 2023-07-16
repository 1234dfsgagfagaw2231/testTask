import React, { useRef, useEffect } from 'react';

interface Point {
    x: number;
    y: number;
    labels: string[];
}

export interface Entity {
    name: string;
    point: Point;
}

interface GraphProps {
    entities: Entity[];
    xMin?: number;
    xMax?: number;
    yMin?: number;
    yMax?: number;
}

const CanvasComponent: React.FC<GraphProps> = ({ entities, xMin = -20, xMax = 20, yMin = -20, yMax = 20 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const labelsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const labels = labelsRef.current;

        if (ctx && canvas && labels) {
            // Чистим канву
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Рисуем оси координат
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 0);
            ctx.lineTo(canvas.width / 2, canvas.height);
            ctx.stroke();

            // Рисуем шкалы на оси X
            ctx.beginPath();
            const xRange = xMax - xMin;
            const xStep = xRange / 20;
            for (let i = xMin + xStep; i < xMax; i += xStep) {
                const xPos = ((i - xMin) / xRange) * canvas.width;
                ctx.moveTo(xPos, canvas.height / 2 - 5);
                ctx.lineTo(xPos, canvas.height / 2 + 5);
                ctx.fillText(i.toString(), xPos - 10, canvas.height / 2 + 20);
            }
            ctx.stroke();

            // Рисуем шкалы на оси Y
            ctx.beginPath();
            const yRange = yMax - yMin;
            const yStep = yRange / 20;
            for (let i = yMin + yStep; i < yMax; i += yStep) {
                const yPos = ((i - yMin) / yRange) * canvas.height;
                ctx.moveTo(canvas.width / 2 - 5, canvas.height - yPos);
                ctx.lineTo(canvas.width / 2 + 5, canvas.height - yPos);
                ctx.fillText(i.toString(), canvas.width / 2 - 20, canvas.height - yPos + 10);
            }
            ctx.stroke();

            // Рисуем точки на графике и выводим названия точки над ней
            entities.forEach(({ name, point }) => {
                const { x, y, labels } = point;
                ctx.beginPath();
                ctx.arc(x*12.5 + canvas.width / 2, canvas.height / 2 - y*12.5, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillText(name, x*12.5 + canvas.width / 2, canvas.height / 2 - y*12.5 - 20);

                // labels.map((label, index) => {
                //     const labelEl = document.createElement('div');
                //     labelEl.innerText = `${name}: ${label}`;
                //     labelEl.style.position = 'absolute';
                //     labelEl.style.top = `${canvas.offsetTop + canvas.height / 2 - y - 40 - index * 20}px`;
                //     labelEl.style.left = `${canvas.offsetLeft + x + canvas.width / 2 + 10}px`;
                //     labelsRef.current?.appendChild(labelEl)
                // });
            });
        }
    }, [entities, xMin, xMax, yMin, yMax]);

    return (
        <>
            <canvas ref={canvasRef} width={500} height={500} />
            <div ref={labelsRef} style={{ position: 'relative' }} />
        </>
    );
};



export default CanvasComponent;
