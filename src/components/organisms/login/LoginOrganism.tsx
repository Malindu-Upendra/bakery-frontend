import { Button, Input, Typography } from "@material-tailwind/react";
import loginImage from "../../../assets/images/login-illustration.png";
import { FaUser, FaLock } from "react-icons/fa";

const LoginOrganism = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen min-w-full flex justify-center items-center">
      <div className="bg-white rounded-lg py-10 shadow-lg shadow-gray-500 w-6/12 flex">
        <div className="w-1/2">
          <img src={loginImage} alt="login illustration" />
        </div>
        <div className="w-1/2 px-10 flex justify-center items-center">
          <div className="flex flex-col w-full">
            <Typography variant="h3" placeholder="">
              Sign In
            </Typography>
            <div className="mt-5">
              <Input
                label="Username"
                icon={<FaUser className="text-blue-500" />}
                crossOrigin={undefined}
                color="blue"
              />
            </div>{" "}
            <div className="mt-5">
              <Input
                label="Password"
                icon={<FaLock className="text-blue-500" />}
                type="password"
                crossOrigin={undefined}
                color="blue"
              />
            </div>
            <Button
              variant="gradient"
              color="blue"
              placeholder=""
              className="mt-5"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrganism;
