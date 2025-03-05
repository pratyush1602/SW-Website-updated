import React from 'react';

const PeopleList = ({ mainTitle, items, customStyles = {} }) => {
    return (
        <div className='col-md-6 d-flex flex-column align-items-center text-center'>
            <h3 style={customStyles.mainTitle}>{mainTitle}</h3>
            {items.map((item, index) => (
                <div key={index} className='mb-5'>
                    <h4 style={customStyles.subTitle}>{item.subTitle}</h4>
                    {item.subSubTitles.map((subSubItem, subIndex) => (
                        <div key={subIndex}>
                            <h5 style={customStyles.subSubTitle}>{subSubItem.title}</h5>
                            <ul style={customStyles.unorderedList} className='text-start'>
                                {subSubItem.people.map((person, personIndex) => (
                                    <li style={customStyles.listItem} key={personIndex}>
                                        <h6 className='fs-5' style={{ color: "#4338ca" }}>
                                            {person.name}
                                        </h6>
                                        <p>{person.designation}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PeopleList;
