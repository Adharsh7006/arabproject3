import React from 'react'
import '../components/Content.css'
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowRoundForward, IoIosChatbubbles, IoIosNotifications } from "react-icons/io";
import { MdDashboard, MdOutlineEmail, MdSupportAgent } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { TbPuzzleFilled } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import Card from './Card';
import { IoCheckmarkDone, IoCloudOutline, IoPeopleOutline } from 'react-icons/io5';
import { HiPlus } from "react-icons/hi";
  
  function Content() {
    const basic={color:"#ffd480",name:"Basic",value:"89.99/mo",price:"9.99/mo",user:"Upto 25 Users",cloud:"Upto 25gb Storage",email:"Email Support"}
    const standard={color:"#ff704d",name:"Standard",value:"189.99/mo",price:"99.99/mo",user:"Upto 50 Users",cloud:"Upto 60gb Storage",email:"Email + Chat Support"}
    const Premium={color:"#bf80ff",name:"Premium",value:"389.99/mo",price:"199.99/mo",user:"Upto 75 Users",cloud:"Upto 160gb Storage",email:"Email + Chat + Whatsapp Support"}
    return (
      <div className='content-main1'>
        <div className='content-main2'>
        <div className='content-square'></div>
        <div className='content-triangle'></div>
        <div className='content-main3'><img className='content-img' src='https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=600'/><p>XYZ Enterprise pvt.ltd</p></div>
        <div className='content-main4'><IoIosArrowDown /></div>
        </div>
        <div className='content-main'>
        <div className='side-bar'>
       <div className='sidebar-main'>
        <img className='sidebar-img' src='https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1704621268~exp=1704621868~hmac=f9fd883a1d2c0b4f55f46aca24dc4e07430d3c8153d5ae94b5b2557a0134c9b5'/>
        <h6>Ram Mohan <IoIosArrowForward className='sidebar-icon' /></h6>
        <p>rammohan2@gmail.com</p>
      </div>
      <div className='sidebar1'>
        <div className='sidebar-button'><h6> <MdDashboard className='sidebar-icons' /> Dashboard</h6></div>
        <div className='sidebar-button'><h6> <GiFlowerPot className='sidebar-icons' /> Perks</h6></div>
        <div className='sidebar-button'><h6> <TbPuzzleFilled className='sidebar-icons' /> Addons</h6></div>
        <div className='sidebar-button'><h6> <IoIosChatbubbles className='sidebar-icons' /> FAQ</h6></div>
        <div className='sidebar-button'><h6> <MdSupportAgent className='sidebar-icons' /> Support</h6></div>
        <div className='sidebar-button1'><h6>Logout <AiOutlineLogout className='sidebar-icons' /></h6></div>

      </div>
      </div>
        <div className='admin'>
          <div className='admin-main'>
          <h3>Choose a plan that's just right for you !</h3>
          <div className='admin1'>
            <div className='admin2'><p>Monthly</p></div>
            <div className='admin3'><p>Anually</p>
            <p className='admin-txt'>-10%</p></div>
          </div>
          </div>
          <div className='admin-card'>
            <Card data={basic} />
            <Card data={standard}/>
            <Card data={Premium}/>

          </div>
          <div className='admin-card1'>
            <div className='admin-card2'>
              <div className='card-txt'>
                <div className='card-free'>
                  <p>Free Forever</p>

                </div>
                <h2>Free Starter</h2>
                <p className='card-text'>The quikest and easiest way to try protocols with basic functionalities</p>
                <button className='card-buttons'>Get Started <IoIosArrowRoundForward/></button>

              </div>
              <div className='card-txt1'>
                <p>What you'll get:</p>
                <p><IoPeopleOutline /> Upto 8 Users</p>
                <p><IoCloudOutline /> Upto 3gb Storage</p>
                <p><MdOutlineEmail /> Email Support</p>
                <p><IoCheckmarkDone /> Basics of Documents,Task flow,Voting,Accounting,Banking,Notes,<br/>Investor,Director and Team Management included</p>

              </div>

            </div>
            <div className='admin-card2'>
              <div className='card-txt'>
                <div className='card-free1'>
                  <p>Let's Connect</p>

                </div>

                <h2>Enterprise Plan</h2>
                <p className='card-text'>Effortiessely and customize and fine tune services as your needs shift,ensuring the perfect tools for perfect</p>
                <button className='card-buttons1'>Contact Us <IoIosArrowRoundForward/></button>


              </div>
              <div className='card-txt3'>
              <p>What you'll get:</p>
              <p><IoPeopleOutline /> More than 75 Users</p>
              <p><IoCheckmarkDone /> Customization of all other features</p>



              </div>
              <div>

              </div>

            </div>
          </div>

        </div>
        <div className='content-main5'>
          <div className='content-main6'>
          <IoIosNotifications className='content-icon' />
          <div className='content-icons'><p>2</p></div>
          </div>
          <div className='content-main7'></div>
          <div className='content-main8'><HiPlus className='content-icon1' /></div>
        </div>
        </div>
    </div>
    

    )
  }
  
  export default Content
