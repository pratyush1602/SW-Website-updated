import React from 'react';

const PeopleList = ({ mainTitle, subTitle, subSubTitle, items }) => {
    return (
        <div className='col-md-6 d-flex flex-column align-items-center text-center'>
            <h3>{mainTitle}</h3>
            <h4>{subTitle}</h4>
            <h5>{subSubTitle}</h5>
            {items.map((item, index) => (
                <div key={index} className='mb-5'>
                    <ul className='text-start'>
                        {item.people.map((person, idx) => (
                            <li key={idx}>
                                <h6 className='fs-5' style={{color: "#4338ca"}}>
                                    {person.name}
                                </h6>
                                <p>{person.designation}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PeopleList;
