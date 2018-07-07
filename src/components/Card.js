import React from 'react';

const Card = (props) => {
    // You can replace the parameter 'props' above with the destructred properties below
    // eg const Card = ({ name, email, id}) => etc
    const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;