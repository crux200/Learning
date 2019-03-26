import React from 'react';

const Card=(props)=>{
	// const {name,email,id}=props;
	return (
		<div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}? 150 X 150`}/>
			<div>
				 <h2>{props.Name} </h2>
				 <p> {props.email} </p>
			 </div>
		</div>
		);
}
export default Card;