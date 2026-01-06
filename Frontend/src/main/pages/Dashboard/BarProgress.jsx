import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 700 },
  { name: 'Mar', uv: 500 },
  { name: 'Apr', uv: 800 },
  { name: 'May', uv: 300 },
  { name: 'Jun', uv: 600 },
];

const Example = () => {
  return (
    <div className='w-full h-[281px]'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 40, bottom: 40 }}
          barCategoryGap={20} // ✅ spacing between bars
        >
          {/* Add grid lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />

          {/* X-Axis (Months) */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={{
              textAnchor: 'middle', // ✅ center align text
              dy: 10, // ✅ add vertical space
              fontSize: 12,
              fontFamily: 'Montserrat',
            }}
            padding={{ left: 20, right: 20 }} // ✅ space between edge and bars
          >
            {/* <Label value="Months" offset={-40} position="insideBottom" style = {{fontWeight: 'medium', fill: '#000', fontSize: 18, fontWeight: 600}} /> */}
          </XAxis>

          {/* Y-Axis (Users) */}
          <YAxis
            ticks={[0, 200, 400, 600, 800]}
            axisLine={false}
            tickLine={false}
            tick={{
              dx: -10, // ✅ Add horizontal gap between number and grid line
              fontSize: 12,
              fontFamily: 'Montserrat',
            }}
          >
            <Label
              // value="No. of users"
              angle={-90}
              position="insideLeft"
              offset={-15}
              style={{ textAnchor: 'middle', fontSize: 18, fill: '#000', fontWeight: 600 ,fontFamily: 'Montserrat',}}
            />
          </YAxis>

          <Tooltip />

          {/* Bar */}
          <Bar
            dataKey="uv"
            fill="#bca719"
            name="Users"
            radius={[10, 10, 10, 10]} // ✅ round only top
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
