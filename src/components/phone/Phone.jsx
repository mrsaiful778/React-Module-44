import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio, Grid } from 'react-loader-spinner'

const Phone = (props) => {
    const [phone, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [grid, setGrid] = useState(true);
    useEffect(() => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const PhoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.Phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(PhoneWithFakeData);
                setPhones(PhoneWithFakeData)
                setLoading(false);
                setGrid(false);
            });
    }, [])
    return (

        <div>
            {loading && <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />}
            {grid && <Grid
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />}
            <p className="text-5xl m-6"> phone {phone.length}</p>
            <BarChart width={500} height={400} data={phone}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid></CartesianGrid>
                <Cell></Cell>
            </BarChart>
        </div>
    );
};

export default Phone;[]