import React from 'react'
import '../components/Card.css'
import { TfiMoney } from "react-icons/tfi";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoCloudOutline, IoPeopleOutline } from "react-icons/io5";
import { MdArrowRight, MdOutlineEmail } from 'react-icons/md';

function Card(props) {
  console.log(props)
  const cardButtonStyles = {
    '--card-button-color': props.data.color,
  };
  const shouldRenderSlopedLine = props.index < 3;
  return (
    <div className='card-main'>
      <h4>{props.data.name}</h4>
      {shouldRenderSlopedLine && (
      <div className='sloped-line'>
      </div>
      )}
      <p className='card-value'> <TfiMoney /> {props.data.value}</p>
      <h5> <TfiMoney /> {props.data.price}</h5>
      <button className='card-button' style={cardButtonStyles}>Get Started <IoIosArrowRoundForward /></button>
      <hr className='card-hr'></hr>
      <p>What you'll get</p>
      <p> <IoPeopleOutline /> {props.data.user}</p>
      <p> <IoCloudOutline /> {props.data.cloud}</p>
      <p> <MdOutlineEmail /> {props.data.email}</p>
      <p className='card-explore'>EXPLORE FEATURES <MdArrowRight className='card-icon' style={cardButtonStyles} /></p>

    </div>
  )
}

export default Card