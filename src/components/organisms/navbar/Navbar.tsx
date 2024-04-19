import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { getLoggedInUser } from "../../../services/user_service";

const NavbarOrganism = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    getLoggedInUser().then((res) => {
      if (res.data.result) {
        setName(res.data.user.firstName + " " + res.data.user.lastName);
      }
    });
  }, [localStorage.getItem("token")]);

  return (
    <nav className='bg-gradient-to-r from-cyan-500 to-blue-500 py-4'>
      <div className='container flex space-x-3 justify-between'>
        <div className='text-lg font-bold text-white'>Madushan Bakery</div>
        <div className='flex space-x-2 items-center'>
          <FaUser className='text-white' />
          <span className='text-white'>{name}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOrganism;
