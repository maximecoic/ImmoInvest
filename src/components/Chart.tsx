import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartProps {
    data: any;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default Chart;