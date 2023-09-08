import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const EditUser = () => {
  return (
    <div>
        <Header></Header>
        <Link to="/">
        <p><i class="fa-solid fa-arrow-left-long me-2 my-5"></i><span>All Users</span></p>
        </Link>
        <div className='bg-[#ece8e8] py-5 flex flex-col items-center'>
            <div className='text-center my-5'>
            <h3 className='text-2xl font-semibold mb-2'>Update User</h3>
            <p className='text-[16px] text-[#615d5d]'>Use the below form to update user</p>
            </div>
            <form className='w-[60%] mx-atuo p-3 space-y-4'>
                <div>
                    <label className='block' htmlFor="name">Name</label>
                    <input className='outline-none p-2 rounded-sm w-[100%]' placeholder='Hot Pink Chocolate' type="text" name="name" id="name"/>
                </div>
                <div>
                    <label className='block' htmlFor="country">Email</label>
                    <input className='outline-none p-2 rounded-sm w-[100%]' placeholder='Enter Country Name' type="email" name="country" id="name"/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <input className='ml-8' type="radio" name="gender" value="Male" id="male"/> 
                    <label className='ml-2' htmlFor='male'>Male</label>
                    <input className='ml-8' type="radio" name="gender" value="Felame" id="female"/> 
                    <label className='ml-2' htmlFor='female'>Female</label>
                    <input className='ml-8' type="radio" name="gender" value="Other" id="other"/>
                    <label className='ml-2' htmlFor='other'>Other</label>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <input className='ml-8' type="radio" name="status" value="Active" id="active"/>
                    <label className='ml-2' htmlFor='active'>Active</label>
                    <input className='ml-8' type="radio" name="status" value="Inactive" id="inactive"/>
                    <label className='ml-2' htmlFor='inactive'>Inactive</label>
                </div>
                <div>
                    <button className='bg-[#16DB93] w-[100%] rounded-sm p-2 text-white font-bold'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser