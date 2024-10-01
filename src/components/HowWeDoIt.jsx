import React from 'react'

const HowWeDoIt = () => {

    return (
        <div className='HowWeDoIt'>
            <h3>Процес на почистване</h3>

            <ul>
                <li className="steps">
                    1
                </li>

                <li className="steps">
                    2
                </li>

                <li className="steps">
                    3
                </li>

                <li className="steps">
                    4
                </li>
            </ul>

            <style jsx>{`
                .HowWeDoIt {
                    width: 100%;
                    height: 40rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }                
            `}</style>
        </div>
    )
}

export default HowWeDoIt