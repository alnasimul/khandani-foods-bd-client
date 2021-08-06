import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { getTotalSalesOfApril, getTotalSalesOfAugust, getTotalSalesOfDecember, getTotalSalesOfFebruary, getTotalSalesOfJanuary, getTotalSalesOfJuly, getTotalSalesOfJune, getTotalSalesOfMarch, getTotalSalesOfMay, getTotalSalesOfNovember, getTotalSalesOfOctober, getTotalSalesOfSeptember } from './Calculations/Calculations';
import Charts from './Charts/Charts';
import TotalSalesOfCurrentMonth from './TotalSalesOfCurrentMonth/TotalSalesOfCurrentMonth';

const Dashboard = () => {
    const [orders, setOrders] = useState([])
    const year = new Date().getFullYear();
    useEffect(() => {
        fetch(`http://localhost:4000/getOrdersByYear/${year}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })

    }, [])

    console.log(orders)
   
    const totalSalesJanuary = getTotalSalesOfJanuary(orders)
    const totalSalesFebruary = getTotalSalesOfFebruary(orders)
    const totalSalesMarch = getTotalSalesOfMarch(orders)
    const totalSalesApril = getTotalSalesOfApril(orders)
    const totalSalesMay = getTotalSalesOfMay(orders)
    const totalSalesJune = getTotalSalesOfJune(orders)
    const totalSalesJuly = getTotalSalesOfJuly(orders);

    const totalSalesAugust = getTotalSalesOfAugust(orders)
    const totalSalesSeptember = getTotalSalesOfSeptember(orders)
    const totalSalesOctober = getTotalSalesOfOctober(orders)
    const totalSalesNovember = getTotalSalesOfNovember(orders)
    const totalSalesDecember = getTotalSalesOfDecember(orders)
    console.log({ totalSalesJanuary, totalSalesFebruary, totalSalesMarch, totalSalesApril, totalSalesMay, totalSalesJune, totalSalesJuly, totalSalesAugust, totalSalesSeptember, totalSalesOctober, totalSalesNovember, totalSalesDecember})

    const chartData = {
      
        chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Total Sales',
                    data: [
                        totalSalesJanuary,
                        totalSalesFebruary,
                        totalSalesMarch,
                        totalSalesApril,
                        totalSalesMay,
                        totalSalesJune,
                        totalSalesJuly,
                        totalSalesAugust,
                        totalSalesSeptember,
                        totalSalesOctober,
                        totalSalesNovember,
                        totalSalesDecember
                    ],
                    backgroundColor: [
                        'rgb(190,41,38, 0.9)',
                        'rgb(43,136,57, 0.9)',
                        'rgb(66,133,244, 0.9)',
                        'rgb(249,49,84, 0.9)',
                        'rgba(153, 102, 255, 0.95)',
                        'rgb(18,102,241, 0.8)',
                        'rgba(255, 99, 132, 0.9)',
                        'rgba(255, 206, 86, 0.9)',
                        'rgb(43,136,57, 0.9)',
                        'rgba(153, 102, 255, 0.9)',
                        'rgb(18,102,241, 0.8)',
                        'rgb(190,41,38, 0.8)'
                    ]
                }
            ]
        }
    }

    const filterOrdersByCurrrentMonth = orders => {

        let totalSales = 0;

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

       const filteredOrders = orders.filter( order => order.month === months[ new Date().getMonth() ] )

       filteredOrders.map( order => {
           totalSales = totalSales + order.totalBill;
       })

       return {totalSales, filteredOrders};
    }

    let totalSalesAndOrders = filterOrdersByCurrrentMonth(orders);

    console.log(totalSalesAndOrders);

    return (
        <div className="row" style={{backgroundColor: "rgb(190,41,38, 0.1)"}}>
            <Sidebar></Sidebar>
            <Charts data={chartData.chartData} Month="August" legendPosition="bottom"></Charts>
            <TotalSalesOfCurrentMonth totalSalesAndOrders={totalSalesAndOrders}></TotalSalesOfCurrentMonth>
        </div>
    );
};

export default Dashboard;