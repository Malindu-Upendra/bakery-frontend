import { FaUser } from "react-icons/fa";

const NavbarOrganism = () => {
  return (
    <nav className='bg-gradient-to-r from-cyan-500 to-blue-500 py-4'>
      <div className='container flex space-x-3 justify-between'>
        <div className='text-lg font-bold text-white'>Madushan Bakery</div>
        <div className='flex space-x-2 items-center'>
          <FaUser className='text-white' />
          <span className='text-white'>User name</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOrganism;
