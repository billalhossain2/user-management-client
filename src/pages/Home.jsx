import React from "react";
import Header from "../components/Header";
import chocolateImg from "../assets/chocolate.jpg";
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
          <span>New User</span>
          <svg className="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.7914 0H6.74587C6.2452 0 5.83936 0.405844 5.83936 0.906516V7.47201L6.52636 8.10464L19.146 11.3561L19.6979 10.912V0.906516C19.6979 0.405844 19.2921 0 18.7914 0Z"
              fill="#D8694B"
            />
            <path
              d="M7.49461 0.906516C7.49461 0.405844 7.90045 0 8.40112 0H6.74587C6.2452 0 5.83936 0.405844 5.83936 0.906516V7.47202L6.52636 8.10464L7.49461 8.35411V0.906516Z"
              fill="#C5573A"
            />
            <path
              d="M17.9429 5.11406H13.8665C13.6231 5.11406 13.4257 4.91666 13.4257 4.6732V1.75495C13.4257 1.51148 13.6231 1.31409 13.8665 1.31409H17.943C18.1865 1.31409 18.3838 1.51148 18.3838 1.75495V4.6732C18.3838 4.91666 18.1865 5.11406 17.9429 5.11406Z"
              fill="#C5573A"
            />
            <path
              d="M11.6707 5.11406H7.5943C7.35083 5.11406 7.15344 4.91666 7.15344 4.6732V1.75495C7.15344 1.51148 7.35083 1.31409 7.5943 1.31409H11.6707C11.9142 1.31409 12.1116 1.51148 12.1116 1.75495V4.6732C12.1116 4.91666 11.9142 5.11406 11.6707 5.11406Z"
              fill="#C5573A"
            />
            <path
              d="M17.943 6.42815H13.8665C13.6231 6.42815 13.4257 6.62554 13.4257 6.86901V9.35507L13.6008 9.57744L16.8281 10.3583L16.9429 10.2281H17.943C18.1865 10.2281 18.3838 10.0307 18.3838 9.78726V6.86905C18.3838 6.62554 18.1865 6.42815 17.943 6.42815Z"
              fill="#C5573A"
            />
            <path
              d="M14.9812 4.6732V1.75495C14.9812 1.51148 15.1786 1.31409 15.4221 1.31409H13.8665C13.6231 1.31409 13.4257 1.51148 13.4257 1.75495V4.6732C13.4257 4.91666 13.6231 5.11406 13.8665 5.11406H15.4221C15.1786 5.11406 14.9812 4.91666 14.9812 4.6732Z"
              fill="#A94B30"
            />
            <path
              d="M14.9812 9.78727V6.86907C14.9812 6.6256 15.1786 6.42821 15.4221 6.42821H13.8665C13.6231 6.42821 13.4257 6.6256 13.4257 6.86907V9.35513L13.6008 9.5775L15.0005 9.91618C14.988 9.87535 14.9812 9.83213 14.9812 9.78727Z"
              fill="#A94B30"
            />
            <path
              d="M11.6707 6.42816H7.5943C7.35083 6.42816 7.15344 6.62555 7.15344 6.86902V7.79818L7.36335 8.10061L11.9146 9.23541L12.1116 9.02893V6.86907C12.1116 6.62555 11.9142 6.42816 11.6707 6.42816Z"
              fill="#C5573A"
            />
            <path
              d="M8.81943 4.6732V1.75495C8.81943 1.51148 9.01682 1.31409 9.26029 1.31409H7.5943C7.35083 1.31409 7.15344 1.51148 7.15344 1.75495V4.6732C7.15344 4.91666 7.35079 5.11406 7.5943 5.11406H9.26029C9.01682 5.11406 8.81943 4.91666 8.81943 4.6732Z"
              fill="#A94B30"
            />
            <path
              d="M8.81943 6.86907C8.81943 6.6256 9.01682 6.42821 9.26029 6.42821H7.5943C7.35083 6.42821 7.15344 6.6256 7.15344 6.86907V7.79822L7.36335 8.10066L8.81943 8.46371V6.86907Z"
              fill="#A94B30"
            />
            <path
              d="M20.0031 11.0882L19.0494 12.3139L5.51628 10.3187L5.1297 10.6297V23.0007C5.1297 23.5526 5.57712 24 6.12903 24H19.4082C19.9602 24 20.4076 23.5526 20.4076 23.0007V11.0882H20.0031Z"
              fill="#FFC265"
            />
            <path
              d="M7.15343 23.0007V10.6297L7.22656 10.5709L5.51628 10.3187L5.1297 10.6297V23.0007C5.1297 23.5526 5.57712 24 6.12903 24H8.15281C7.60086 24 7.15343 23.5526 7.15343 23.0007Z"
              fill="#FFB541"
            />
            <path
              d="M18.3838 12.1006L7.78186 10.3583L7.06125 10.9089V21.7835C7.06125 21.9408 7.1888 22.0684 7.34611 22.0684H18.1911C18.3484 22.0684 18.476 21.9408 18.476 21.7835V12.5591L18.3838 12.1006Z"
              fill="#8379C2"
            />
            <path
              d="M8.99286 21.7836V10.9089L9.37156 10.6196L7.78189 10.3583L7.06128 10.9089V21.7836C7.06128 21.9409 7.18883 22.0684 7.34614 22.0684H9.27772C9.12036 22.0684 8.99286 21.9409 8.99286 21.7836Z"
              fill="#6E61B7"
            />
            <path
              d="M13.9735 19.5976H11.5637C11.3637 19.5976 11.2016 19.4355 11.2016 19.2355C11.2016 19.0355 11.3637 18.8733 11.5637 18.8733H13.9735C14.1735 18.8733 14.3357 19.0355 14.3357 19.2355C14.3357 19.4355 14.1735 19.5976 13.9735 19.5976Z"
              fill="#988FCC"
            />
            <path
              d="M5.54939 7.40001C5.29612 7.33716 5.03015 7.43541 4.87856 7.64784L3.74348 9.23878C3.3921 9.73134 3.68681 10.4211 4.28559 10.5077L18.6792 12.5885C19.0184 12.6376 19.3574 12.4969 19.5623 12.2221L20.4076 11.0882L5.54939 7.40001Z"
              fill="#D9EDFF"
            />
            <path
              d="M6.16739 9.68934L7.30246 8.09841C7.36603 8.00934 7.44984 7.94067 7.54424 7.8952L5.54939 7.40001C5.29612 7.33716 5.03015 7.43541 4.87856 7.64784L3.74348 9.23878C3.3921 9.73134 3.68681 10.4211 4.28559 10.5077L6.33853 10.8045C6.00726 10.5543 5.89959 10.0647 6.16739 9.68934Z"
              fill="#B4DBFF"
            />
          </svg>
        </button>
      </div>
      <table className="w-[100%] text-center">
        <thead className="bg-[#cc9c71c4]">
            <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Country/Factory</th>
                <th className="p-3">Category</th>
                <th className="p-3">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-10 py-5"><img className="w-[40px] h-[40px] rounded-sm" src={chocolateImg} alt="chocolate Image" /></td>
                <td className="px-10 py-5">Hot Pink Chocolate</td>
                <td className="px-10 py-5">Australia</td>
                <td className="px-10 py-5">Premium</td>
                <td className="px-10 py-5 space-x-5">
                <Link to="/editUser">
                <i class="fa-solid fa-pen bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </Link>
                <i class="fa-solid fa-xmark bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </td>
            </tr>
            <tr>
                <td className="px-10 py-5"><img className="w-[40px] h-[40px] rounded-sm" src={chocolateImg} alt="chocolate Image" /></td>
                <td className="px-10 py-5">Hot Pink Chocolate</td>
                <td className="px-10 py-5">Australia</td>
                <td className="px-10 py-5">Premium</td>
                <td className="px-10 py-5 space-x-5">
                <Link to="/editUser">
                <i class="fa-solid fa-pen bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </Link>
                <i class="fa-solid fa-xmark bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </td>
            </tr>
            <tr>
                <td className="px-10 py-5"><img className="w-[40px] h-[40px] rounded-sm" src={chocolateImg} alt="chocolate Image" /></td>
                <td className="px-10 py-5">Hot Pink Chocolate</td>
                <td className="px-10 py-5">Australia</td>
                <td className="px-10 py-5">Premium</td>
                <td className="px-10 py-5 space-x-5">
                <i class="fa-solid fa-pen bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                <i class="fa-solid fa-xmark bg-[#d6cfcf] p-2 rounded-sm text-[#774320] cursor-pointer"></i>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
