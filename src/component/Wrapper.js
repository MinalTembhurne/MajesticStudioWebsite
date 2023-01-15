import React from 'react';
import useMediaQuery from "";

const MyWrapperComponent = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const textStyle = isMobile ? 'text-mobile' : 'text-mobile';
  
    return (
      <div className={textStyle}>
       {props.children}
      </div>
    )
  }
  

export default MyWrapperComponent;