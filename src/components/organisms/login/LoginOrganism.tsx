import { Button, Input, Typography } from "@material-tailwind/react";
import loginImage from "../../../assets/images/login-illustration.png";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/user_service";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";

const LoginOrganism = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const [isLoading, setIsloading] = useState(false);
  const [formInfo, setFormInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: any) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const login = () => {
    setIsloading(true);
    loginUser(formInfo)
      .then((res) => {
        if (res.data.result) {
          localStorage.setItem("token", res.data.accessToken);
          toast.success("Succesfully Logged In!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          navigate("/dashboard");
          setIsloading(false);
        } else {
          setIsloading(false);
          toast.error(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      })
      .catch(() => setIsloading(false));
  };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen min-w-full flex justify-center items-center'>
      <div className='bg-white rounded-lg py-10 shadow-lg shadow-gray-500 w-6/12 flex'>
        <div className='w-1/2'>
          <img src={loginImage} alt='login illustration' />
        </div>
        <div className='w-1/2 px-10 flex justify-center items-center'>
          <div className='flex flex-col w-full'>
            <Typography variant='h3' placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Sign In
            </Typography>
            <div className='mt-5'>
              <Input
                label='Username'
                icon={<FaUser className='text-blue-500' />}
                onChange={handleChange}
                name='username'
                crossOrigin={undefined}
                color='blue'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>{" "}
            <div className='mt-5'>
              <Input
                label='Password'
                icon={<FaLock className='text-blue-500' />}
                onChange={handleChange}
                name='password'
                type='password'
                crossOrigin={undefined}
                color='blue'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <Button
              variant='gradient'
              color='blue'
              placeholder=''
              className='mt-5'
              onClick={login}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
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
