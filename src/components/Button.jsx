import React from 'react'

export const Button = ({RandomColors}) => {

return (
    <div className="button1"> 
    <button style={{borderColor: RandomColors.borderColor }} onClick={getRandom} > push </button>
</div>

)}
export default Button