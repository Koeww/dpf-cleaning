import {useEffect, useState} from 'react'

const Diagram = () => {    
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= 60) {
                    clearInterval(interval);
                    return prevCount;
                }
                    return prevCount + 1; 
            });
        }, 15);

        const intervalTwo = setInterval(() => {

            setCountTwo(prevCount => {
                if (prevCount >= 80) {
                    clearInterval(interval);
                    return prevCount;
                }
                    return prevCount + 1; 
            });
        }, 15);

        return () => {
            clearInterval(interval);
            clearInterval(intervalTwo);
        };
    }, [count]);
  
    return (
        <div className='Diagram'>
            <h4>CO2 Емиссии</h4>

            <div className='charts-wrapper'>
                <div className="radial-chart">
                    <div className="radial-text">{count}%</div>
                    <div className="circle-green">
                    </div>
                    <div className='circle-red'></div>
                </div>       

                <div className='chart'>
                    <div className='progress-bar' />
                    <div className='progress-bar-text'>{countTwo}%</div>
                </div>
            </div>

            <style jsx>{`
                .Diagram {
                    padding: 0 var(--desktop-gap);
                }
                .radial-chart {
                    position: relative;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                }   
                .radial-chart:hover {
                    box-shadow:  10px 10px 60px #333333,
                                -10px -10px 60px var(--primary-color);
                }
                .radial-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.5rem;
                    font-weight: bold;
                    z-index: 10;
                }
                .charts-wrapper {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-bottom: 1rem; 
                }
                .circle-green {
                    width: 12.375rem;
                    height: 12.375rem;
                    border-radius: 50%;
                    background: conic-gradient(
                        var(--primary-color) 0% ${count}%,   
                        #d1d5db ${count}% 100%  
                    );
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .circle-green::before {
                    content: "";
                    width: 11.75rem;
                    height: 11.75rem;
                    border-radius: 50%;
                    background-color: #333333;
                    position: absolute;
                }

                .circle-red {
                    width: 10.75rem;
                    height: 10.75rem;
                    border-radius: 50%;
                    background: conic-gradient(
                        var(--secondary-color) 0% ${countTwo}%,   
                        #d1d5db ${countTwo}% 100%  
                    );
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    bottom: 11.5rem;
                    left: 0.875rem;
                }

                .circle-red::before {
                    content: "";
                    width: 10.125rem;
                    height: 10.125rem;
                    border-radius: 50%;
                    background-color: #333333;
                    position: absolute;
                } 
                .chart {
                    position: relative;
                    width: 200px;
                    height: 100px;
                    margin-top: 3rem;
                }

                .progress-bar {
                    position: relative;
                    width: 4rem;
                    height: ${countTwo}%;
                    background-color: #3AAA36;
                }
                .progress-bar-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.25rem;
                    color: white;
                    text-align: center;
                }
            `}</style>
        </div>
  )
}

export default Diagram