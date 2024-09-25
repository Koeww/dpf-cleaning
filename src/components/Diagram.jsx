import {useEffect, useState} from 'react'

const Diagram = () => {
    const [blueCirclePercent, setBlueCirclePercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlueCirclePercent(prevState => {
                if (prevState >= 60) {
                    clearInterval(interval);
                    return prevState;
                }
                    return prevState + 1; 
            });

        }, 10);

        console.log(blueCirclePercent); 

        return () => {
            clearInterval(interval)
        };
    }, []);
  
    return (
    <div className='Diagram'>
        <h4>CO2 Емиссии</h4>




        <div className="radial-chart">
            <div className="circle-green">
                <div className="text">75%</div>
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
                    var(--primary-color) 0% 75%,   
                    #d1d5db 75% 100%  
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
                    red 0% 75%,   
                    #d1d5db 75% 100%  
                );
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                top: 0;
                left: 1rem;
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