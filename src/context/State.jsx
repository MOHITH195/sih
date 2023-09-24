import Context from "./Context";
import { useState } from "react";

import PropTypes from 'prop-types';

const State = ({ children }) => {

    const [isdark, setisdark] = useState(true)
    const [ispopup, setispopup] = useState(false)

  return (
    <Context.Provider value={{isdark , setisdark , ispopup , setispopup}}>
        {children}
    </Context.Provider>
  )
}

State.propTypes = {
  children: PropTypes.node.isRequired,
};

export default State;

// Path: src/context/Context.jsx