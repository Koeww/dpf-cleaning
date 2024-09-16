import {useState, useEffect} from 'react'

const Counters = () => {
    const [count, setCount] = useState(0);
    const [warrantyCount, setWarrantyCount] = useState(0);
    const [professionalismCount, setProfessionalismCount] = useState(0);


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
    
        return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWarrantyCount(prevCount => {
        if (prevCount >= 5) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionalismCount(prevCount => {
        if (prevCount >= 200) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);



    return (
        <div className='Counters'>
            <li>
                <div className='text-wrapper'>
                    <span>Почистени филтри</span>
                    <span className='counter'>{count}+</span>
                </div>
                
                <img src="public/images/dpf.svg" alt="dpf-icon" />
            </li>
            <li>
                <div className='text-wrapper'>
                    <span>Професионален опит</span>
                    <span className='counter'>{warrantyCount} г.</span>
                </div>
                
                <img src="public/images/waranty.svg" alt="waranty-icon" />
            </li>
            <li>
                <div className='text-wrapper'>
                    <span>Доволни клиенти</span>
                    <span className='counter'>{professionalismCount}</span>
                </div>
                
                <img src="public/images/profesionalism.svg" alt="profesionalism-icon" />
            </li>

            <style jsx>{`
                .Counters {
                    position: absolute;
                    top: 70%;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    color: white;
                    width: 70%;
                    background-color: var(--secondary-color);
                    border: 4px solid var(--primary-color);
                    border-top-left-radius: 30px;
                    border-bottom-left-radius: 30px;
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