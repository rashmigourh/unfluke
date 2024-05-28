import React from 'react'
import "../leaderboard/leaderboard.css"
import "../../index.css"
import IMG1 from "../../assets/BarGraph.gif"
import IMG2 from "../../assets/PieChart.gif"
import Dropdown from '../dropdown/Dropdown'


function LeaderBoard() {
    return (
        <>
            <div className="graphContainer container">
                <div className="graph">
                    <img src={IMG1} alt="" />
                    <p className='graph-para'>Bar Graph Visualization of Overall profit</p>
                </div>
                <div className="graph">
                    <img src={IMG2} alt="" />
                    <p className='graph-para'>Pie Chart Visualization of Overall profit</p>
                </div>
            </div>
            <div className="buttons">
                <button>Calmar Ratio</button>
                <button>Overall Profit</button>
                <button>Avg. Daily Profit</button>
                <button>Win %(Day)</button>
            </div>


            <div className="heading container">
                <h1>LeaderBoards</h1>
            </div>
            <div className="subHeading">
                <h1>Basic Backtest</h1>
                <Dropdown/>
            </div>

            <div className="LeaderScore">
                <div className="row">
                    <p>Rank	</p>
                    <p>Name	</p>
                    <p>Calmar Ratio	</p>
                    <p className='display-none'>Overall Profit</p>
                    <p className='display-none'>Avg. Daily Profit</p>
                    <p className='display-none'>Win %(Day)	</p>
                    <p className='display-none'>Price (Rs)	</p>
                    <p className='display-none'>Action</p>
                </div>

                <div className="row">
                    <p>1</p>
                    <p>Selling with re entr</p>
                    <p>3.96</p>
                    <p className='display-none'>381845</p>
                    <p className='display-none'>319.54</p>
                    <p className='display-none'>0.65</p>
                    <p className='display-none'>-</p>
                    <p className='display-none'>view</p>
                </div>

                <div className="row">
                    <p>2</p>
                    <p>strategy_name</p>
                    <p>3.62	</p>
                    <p className='display-none'>268872.5	</p>
                    <p className='display-none'>216.31	</p>
                    <p className='display-none'>0.64	</p>
                    <p className='display-none'>500</p>
                    <p className='display-none'>Buy</p>
                </div>

                <div className="row">
                    <p>3	</p>
                    <p>Based on premium</p>
                    <p>3.42	</p>
                    <p className='display-none'>255425	</p>
                    <p className='display-none'>208.51	</p>
                    <p className='display-none'>0.64	</p>
                    <p className='display-none'>-</p>
                    <p className='display-none'>View</p>
                </div>

                <div className="row">

                    <p>4	</p>
                    <p>strategy_name</p>
                    <p>3.22	</p>
                    <p className='display-none'>370845	</p>
                    <p className='display-none'>303.47	</p>
                    <p className='display-none'>0.65	</p>
                    <p className='display-none'>-</p>
                    <p className='display-none'>View</p>
                </div>

                <div className="row">

                    <p> 5	</p>
                    <p>strategy_name	</p>
                    <p>3.22	</p>
                    <p className='display-none'>370845	</p>
                    <p className='display-none'>303.47	</p>
                    <p className='display-none'>0.65	</p>
                    <p className='display-none'>- </p>
                    <p className='display-none'>View</p>
                </div>

                <div className="row">

                    <p>6	</p>
                    <p>Based on premium</p>
                    <p>3.01	</p>
                    <p className='display-none'>135980	</p>
                    <p className='display-none'>185.77	</p>
                    <p className='display-none'>0.49	</p>
                    <p className='display-none'>- </p>
                    <p className='display-none'>View</p>
                </div>

                <div className="row">

                    <p>7	</p>
                    <p>strategy_name	</p>
                    <p>2.76	</p>
                    <p className='display-none'>267867.5	</p>
                    <p className='display-none'>218.49	</p>
                    <p className='display-none'>0.6	</p>
                    <p className='display-none'>- </p>
                    <p className='display-none'>View</p>
                </div>

                <div className="row">

                    <p>8	</p>
                    <p>Wait and trade_Save	</p>
                    <p>2.62	</p>
                    <p className='display-none'>178252.5	</p>
                    <p className='display-none'>161.9	</p>
                    <p className='display-none'>0.63	</p>
                    <p className='display-none'>- </p>
                    <p className='display-none'>View</p>

                </div>

                <div className="row">
                    <p>9	</p>
                    <p>iron condor	</p>
                    <p>2.44	</p>
                    <p className='display-none'>176420	</p>
                    <p className='display-none'>137.51	</p>
                    <p className='display-none'>0.65	</p>
                    <p className='display-none'>- </p>
                    <p className='display-none'>View</p>
                </div>

                <div className="row">
                <p>10	</p>
                <p>strategy_name	</p>
                <p>2.04	</p>
                <p className='display-none'>244555	</p>
                <p className='display-none'>198.66	</p>
                <p className='display-none'>0.62	</p>
                <p className='display-none'>- </p>
                <p className='display-none'>View</p>
                </div>
            </div>

        </>
    )
}

export default LeaderBoard
