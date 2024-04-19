import { ListItem } from "@material-tailwind/react";
import { FaUserInjured, FaHome, FaSignOutAlt, FaUsers, FaWarehouse } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className='flex flex-col w-28 bg-white space-y-2 p-2 rounded-lg mt-5'>
      <ListItem
        placeholder=''
        className='flex items-center justify-center px-2'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className='flex flex-col items-center justify-center space-y-2'>
          <FaHome className='h-5 w-5 text-gray-700' />
          <div className='text-gray-700 text-sm'>Home</div>
        </div>
      </ListItem>
      <ListItem
        placeholder=''
        className='flex items-center justify-center px-2'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className='flex flex-col items-center justify-center space-y-2'>
          <FaWarehouse className='h-5 w-5 text-gray-700' />
          <div className='text-gray-700 text-sm'>Inventory</div>
        </div>
      </ListItem>
      <ListItem
        placeholder=''
        className='flex items-center justify-center px-2'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className='flex flex-col items-center justify-center space-y-2'>
          <FaUsers className='h-5 w-5 text-gray-700' />
          <div className='text-gray-700 text-sm'>Customers</div>
        </div>
      </ListItem>
      <ListItem
        placeholder=''
        className='flex items-center justify-center px-2'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className='flex flex-col items-center justify-center space-y-2'>
          <FaUserInjured className='h-5 w-5 text-gray-700' />
          <div className='text-gray-700 text-sm'>Users</div>
        </div>
      </ListItem>
      <ListItem
        placeholder=''
        className='flex items-center justify-center px-2'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={logout}
      >
        <div className='flex flex-col items-center justify-center space-y-2'>
          <FaSignOutAlt className='h-5 w-5 text-gray-700' />
          <div className='text-gray-700 text-sm'>Logout</div>
        </div>
      </ListItem>
    </div>
  );
};

export default Sidebar;
