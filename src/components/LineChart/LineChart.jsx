import { LineChart  as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = (props) => {
    const studentData = [
        { id: 1, name: 'Alice', math: 78, physics: 85, chemistry: 90 },
        { id: 2, name: 'Bob', math: 92, physics: 88, chemistry: 78 },
        { id: 3, name: 'Charlie', math: 85, physics: 76, chemistry: 92 },
        { id: 4, name: 'David', math: 76, physics: 92, chemistry: 85 },
        { id: 5, name: 'Eva', math: 88, physics: 89, chemistry: 76 },
        { id: 6, name: 'Frank', math: 95, physics: 84, chemistry: 89 },
        { id: 7, name: 'Grace', math: 72, physics: 78, chemistry: 85 },
        { id: 8, name: 'Helen', math: 89, physics: 76, chemistry: 88 },
        { id: 9, name: 'Ivy', math: 84, physics: 88, chemistry: 92 },
        { id: 10, name: 'Jack', math: 91, physics: 85, chemistry: 78 }
      ];
      
    return (
        
        <div>
            <LChart width={500} height={400} data={studentData}>
            <XAxis dataKey="name"/>
           <YAxis></YAxis>
            <Line dataKey="math" stroke="red"></Line>
            <Line dataKey="physics"></Line>
            <Line dataKey="chemistry"></Line>
            
            </LChart>
            

        </div>
    );
};

export default LineChart;