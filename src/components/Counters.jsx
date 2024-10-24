import {useState, useEffect} from 'react'

const Counters = () => {
    const [count, setCount] = useState(0);
    const [warrantyCount, setWarrantyCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= 200) {
                    clearInterval(interval);
                    return prevCount;
                }
                    return prevCount + 1; 
            });

        }, 10);

        const intervalTwo = setInterval(() => {
            setWarrantyCount(prevCount => {
                if (prevCount >= 5) {
                    clearInterval(interval);
                    return prevCount;
                }
                    return prevCount + 1;
            });
        }, 500);
    
        return () => {
            clearInterval(interval)
            clearInterval(intervalTwo)
        };
    }, []);

    return (
        <div className='Counters'>
            <li>
                <div className='text-wrapper'>
                    <span>Почистени филтри</span>
                    <span className='counter'>{count}+</span>
                </div>
                
                <img src="/images/dpf.svg" alt="dpf-icon" />
            </li>
            <li>
                <div className='text-wrapper'>
                    <span>Професионален опит</span>
                    <span className='counter'>{warrantyCount} г.</span>
                </div>
                
                <img src="/images/waranty.svg" alt="waranty-icon" />
            </li>
            <li>
                <div className='text-wrapper'>
                    <span>Доволни клиенти</span>
                    <span className='counter'>{count}</span>
                </div>
                
                <img src="/images/profesionalism.svg" alt="profesionalism-icon" />
            </li>

            <style jsx>{`
                .Counters {
                    width: 100%; 
                    position: relative;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    color: white;
                    background-color: var(--secondary-color);
                    border: 4px solid var(--primary-color);
                    margin: var(--desktop-gap) 0;
                }
                li {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                }
                img {
                    width: 5rem;
                    height: 5rem;
                }
                .text-wrapper {
                    display: flex;
                    flex-direction: column;
                }
                .counter {
                    font-size: 3rem;
                    font-weight: 900;
                }
            `}</style>
        </div>
    )
}

export default Counters