import React from "react";

const Message = ({ isMsg, msg, greenShow }) => {
  return <div className={(isMsg && "show on") || (greenShow && "show off") || "show"}>{msg}</div>;
};

export default Message;
