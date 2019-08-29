import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
   const { text, link, className } = props;
   return (
      <Link to={link}><button className={className}>{text}</button></Link>
   )
}
