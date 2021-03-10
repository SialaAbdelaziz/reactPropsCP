import React from 'react'
import PropTypes from "prop-types"

const Profil  = ({fullName,bio,profession,children,handelName}) => {
   
   
    return (
        <div>
            <h1>
                Enter full name: {fullName} <br></br> bio: {bio} <br></br> profession: {profession}
            </h1>
            {children}
           <button onClick={()=>handelName(fullName)}>Click me</button>
        </div>
    )
}
Profil.defaultProps ={
    fullName:"insert name",
    bio:"insert bio",
    profession:"insert profession"
}
Profil.prototype ={ 
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
    
}

export default Profil 
