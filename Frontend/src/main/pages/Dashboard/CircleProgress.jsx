import React, { useState, useEffect, useRef } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 750 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 150 },
];

const COLORS = ['#3b3509', '#796b0b', '#fbbf3c'];

export default function Example() {
  const containerRef = useRef(null);
  const [size, setSize] = useState(225);

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setSize(width);
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[200px] md:max-w-[225px] xl:max-w-[300px] aspect-square mx-auto"
    >
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={size * 0.33}   // 75 when size=225
          outerRadius={size * 0.49}   // 110 when size=225
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          startAngle={220}
          endAngle={-140}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-regular montserrat text-center pointer-events-none">
        Total<br />1908
      </div>
    </div>
  );
}
