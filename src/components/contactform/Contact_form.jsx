import React from 'react';
import Buttons from '../Buttons/Buttons';
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


const Contact_form = () => {
  return (
    <div>
        <div className="na">
        <Buttons text="via support chat"
        icon={<MdMessage fontSize="24px"/>}
        />
        </div>
        <div className="haa">
      <Buttons text="via callt"
        icon={<IoCallSharp fontSize="24px"/>}
        />
        </div>
        <Buttons isOutline={true} text="via email form"
        icon={<MdOutlineEmail fontSize="24px"/>}
        />
    </div>
  )
}

export default Contact_form
