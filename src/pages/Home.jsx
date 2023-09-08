import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    const handleNavigation = ()=>navigate("/addUser")
  return (
    <div>
      <Header></Header>
      <div className="mb-8">
        <button onClick={handleNavigation} className="border-solid border-[1px] border-gray-400 p-2 rounded-lg">
          <i class="fa-solid fa-plus"></i>
          <span className="mx-2">New User</span>
          <i class="fa-regular fa-user"></i>
        </button>
      </div>
      <table className="w-[100%] text-center">
        <thead className="bg-[#16db9334]">
            <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-10 py-5">1</td>
                <td className="px-10 py-5">Rafiuzzaman</td>
                <td className="px-10 py-5">rafiuzzama75@gmail.com</td>
                <td className="px-10 py-5">Male</td>
                <td className="px-10 py-5">Active</td>
                <td className="px-10 py-5 space-x-5">
                <Link to="/editUser">
                <i class="fa-solid fa-pen bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </Link>
                <i class="fa-solid fa-xmark bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </td>
            </tr>
            <tr>
                <td className="px-10 py-5">2</td>
                <td className="px-10 py-5">Rafiuzzaman</td>
                <td className="px-10 py-5">rafiuzzama75@gmail.com</td>
                <td className="px-10 py-5">Male</td>
                <td className="px-10 py-5">Inactive</td>
                <td className="px-10 py-5 space-x-5">
                <Link to="/editUser">
                <i class="fa-solid fa-pen bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </Link>
                <i class="fa-solid fa-xmark bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
