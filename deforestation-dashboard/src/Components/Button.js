import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
   const { text, link } = props;
   return (
      <Link to={link}><button>{text}</button></Link>
   )
}