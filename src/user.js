import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const users = ({ loading, users }) =>{
    return loading? (
        <div id="main">

        </div>
    ):(
        <div className="row" id="main">
            {users.map((user) => (
                <div className="col-sm-6 col-md-4">
                    <div className="info">
                        <img src={user.avatar} alt={user.avatar} className="Image"></img>
                           <h2><b>Id: {user.id}</b></h2>
                               <h3 className='name'>
                                   {user.first_name} {user.last_name}
                              </h3>
                        <p className='email'><i class="far fa-envelope"></i>{user.email}</p>
                </div>
         </div>
     ))}
         </div>
    )
};
export default users;