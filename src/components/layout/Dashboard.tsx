import { Outlet } from "react-router-dom";
import NavbarOrganism from "../organisms/navbar/Navbar";
import Sidebar from "./Sidebar";
import { Breadcrumbs, Typography } from "@material-tailwind/react";

const Dashboard = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='pb-10'>
        <NavbarOrganism />
        <div className='mx-5 flex space-x-5'>
          <Sidebar />
          <div className='w-full space-y-10'>
            <div className='w-full mt-5 flex justify-between'>
              <div className='flex flex-col'>
                <Typography
                  variant='h5'
                  className='text-gray-800'
                  placeholder=''
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Customers Summary
                </Typography>
                <Typography
                  variant='small'
                  className='text-gray-800'
                  placeholder=''
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  You can see the list of customers here
                </Typography>
              </div>
              <div>
                <Breadcrumbs
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <a href='#' className='opacity-60'>
                    Docs
                  </a>
                  <a href='#' className='opacity-60'>
                    Components
                  </a>
                  <a href='#'>Breadcrumbs</a>
                </Breadcrumbs>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
