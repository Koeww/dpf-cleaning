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

            <div className="radial-chart">
                <div className="circle-green">
                    <div className="text">60%</div>
                </div>
                <div className='circle-red'></div>
            </div>

            <style jsx>{`
                .radial-chart {
                    position: relative;
                    width: 200px;
                    height: 200px;
                }

                .circle-green {
                    width: 9.375rem;
                    height: 9.375rem;
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
                    width: 8.75rem;
                    height: 8.75rem;
                    border-radius: 50%;
                    background-color: #333333;
                    position: absolute;
                }

                .circle-red {
                    width: 6.75rem;
                    height: 6.75rem;
                    border-radius: 50%;
                    background: conic-gradient(
                        red 0% ${countTwo}%,   
                        #d1d5db ${countTwo}% 100%  
                    );
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    bottom: 8rem;
                    left: 1.375rem;
                }

                .circle-red::before {
                    content: "";
                    width: 6.125rem;
                    height: 6.125rem;
                    border-radius: 50%;
                    background-color: #333333;
                    position: absolute;
                }

            `}</style>
        </div>
  )
}

export default Diagram