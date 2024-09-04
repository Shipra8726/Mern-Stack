'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';

const manageuser = () => {

  const [userList, setuserList] = useState([]);

    const fetchUsersData = async () => {
     const res = await axios.get('http://localhost:5000/user/getall');
     console.log(res.status);
     console.table(res.data);
     setuserList(res.data);
    }
    useEffect(() => {
      fetchUsersData(); 
    }, []);

    const deleteUser = (id) => {
      axios.delete('http://localhost:5000/user/delete/'+id)
      .then((result) => {
        toast.success('User Deleted Succesfully');
        fetchUsersData();
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to delete User');
        
      });
    }

    const displayUsers = () => {
      if(userList.length === 0){
        return <p>Loading...Please Wait</p>
      }else{
        return <table className='w-full border-2 border-blue-500'>
          <thead className='border-b-2 text-left bg-blue-500 text-white'>
            <tr>
              <th className='p-3 text-lg'>ID</th>
              <th className='p-3 text-lg'>Name</th>
              <th className='p-3 text-lg'>Email</th>
              <th className='p-3 text-lg'>City</th>
              <th colSpan={2}>Actions</th>
            </tr>
 
          </thead>
          <tbody className=''>
            {
              userList.map((user) => { 
                return <tr key = {user._id} className='border border-blue-300'>
                  <td className='p-3'>{user._id}</td>
                  <td className='p-3'>{user.name}</td>
                  <td className='p-3'>{user.email}</td>
                  <td className='p-3'>{user.city}</td>
                <td>
                <button
                   onClick={()=>{deleteUser(user._idid)}}
                 className='px-3 py-1 bg-red-500 rounded-full text-white'>Delete</button>
                </td>
                <td>
                  <Link href={'/updateuser/'+user._id}
                   className='px-3 py-1 bg-blue-500 rounded-full text-white'>Edit</Link>
                </td>
                </tr>
                     }
                  ) 
                }
             </tbody>
           </table>
           }

    }
    
  return (
    <div>
        <div classname='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
            <h1 className='text-center font-bold text-3xl mt-5'>manageuser</h1>

            {displayUsers()}
            </div>
            </div>
  )
}

export default manageuser;