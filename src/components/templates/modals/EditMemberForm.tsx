import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";

const EditMemberForm = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
  const handleOpen = () => setOpen(!open);
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    birthdate: "",
    phone: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
    // You can handle form submission logic here
  };

  const validate = (values: any) => {
    const errors: any = {};

    // Validation rules for First Name
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }

    // Validation rules for Last Name
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }

    // Validation rules for Username
    if (!values.username) {
      errors.username = "Username is required";
    }

    // Validation rules for City
    // if (!values.city) {
    //   errors.city = "City is required";
    // }

    // Validation rules for Birthdate
    if (!values.birthdate) {
      errors.birthdate = "Birthdate is required";
    }

    // Validation rules for Phone
    if (!values.phone) {
      errors.phone = "Phone is required";
    }

    // Validation rules for Role
    if (!values.role) {
      errors.role = "Role is required";
    }

    // Validation rules for Password
    if (!values.password) {
      errors.password = "Password is required";
    }

    // Validation rules for Confirm Password
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size='lg'
      className='bg-transparent shadow-none w-full'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Card
        className='mx-auto w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
          {({ values, errors }) => (
            <Form>
              <CardBody
                className='flex flex-col gap-4'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Typography
                  variant='h4'
                  color='blue-gray'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Create Member
                </Typography>
                <div className='w-full grid grid-cols-2 gap-5'>
                  <div>
                    <Field name='firstName' type='text' as={Input} label='First Name' size='lg' color='blue' />
                    {errors.firstName && <div className='text-red-500'>{errors.firstName}</div>}
                  </div>
                  <div>
                    <Field name='lastName' type='text' as={Input} label='Last Name' size='lg' color='blue' />
                    {errors.lastName && <div className='text-red-500'>{errors.lastName}</div>}
                  </div>
                  <div>
                    <Field name='username' type='text' as={Input} label='Username' size='lg' color='blue' />
                    {errors.username && <div className='text-red-500'>{errors.username}</div>}
                  </div>
                  <div>
                    <Field name='city' type='text' as={Input} label='City' size='lg' color='blue' />
                    {errors.city && <div className='text-red-500'>{errors.city}</div>}
                  </div>
                  <div>
                    <Field name='birthdate' type='date' as={Input} label='Birthdate' size='lg' color='blue' />
                    {errors.birthdate && <div className='text-red-500'>{errors.birthdate}</div>}
                  </div>
                  <div>
                    <Field name='phone' type='text' as={Input} label='Phone' size='lg' color='blue' />
                    {errors.phone && <div className='text-red-500'>{errors.phone}</div>}
                  </div>
                  <div>
                    <Field name='email' type='text' as={Input} label='Email' size='lg' color='blue' />
                    {errors.email && <div className='text-red-500'>{errors.email}</div>}
                  </div>
                  <div>
                    <Field name='role' as={Select} label='Role' color='blue'>
                      <Option value=''>Select Role</Option>
                      <Option value='admin'>Admin</Option>
                      <Option value='user'>User</Option>
                    </Field>
                    {errors.role && <div className='text-red-500'>{errors.role}</div>}
                  </div>
                  <div>
                    <Field name='password' type='password' as={Input} label='Password' size='lg' color='blue' />
                    {errors.password && <div className='text-red-500'>{errors.password}</div>}
                  </div>
                  <div>
                    <Field
                      name='confirmPassword'
                      type='password'
                      as={Input}
                      label='Confirm Password'
                      size='lg'
                      color='blue'
                    />
                    {errors.confirmPassword && <div className='text-red-500'>{errors.confirmPassword}</div>}
                  </div>
                </div>
              </CardBody>
              <CardFooter
                className='pt-0'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Button
                  type='submit'
                  variant='gradient'
                  fullWidth
                  color='blue'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Save
                </Button>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </Dialog>
  );
};

export default EditMemberForm;
