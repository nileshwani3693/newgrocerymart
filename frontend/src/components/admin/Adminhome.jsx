import Chart from "./chart/Chart"
import FeaturedInfo from "./featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "./chart/dummyData"
import PieChart from "./piechart/PieChart"


export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <h1>Pie Chart</h1>
            <PieChart />

        </div>
    )
}