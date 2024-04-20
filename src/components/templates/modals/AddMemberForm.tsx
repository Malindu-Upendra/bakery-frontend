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
const AddMemberForm = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
  const handleOpen = () => setOpen(!open);

  return (
    <Dialog
      placeholder=''
      open={open}
      handler={handleOpen}
      size='lg'
      className='bg-transparent shadow-none w-full'
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Card
        placeholder=''
        className='mx-auto w-full'
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          placeholder=''
          className='flex flex-col gap-4'
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            placeholder=''
            variant='h4'
            color='blue-gray'
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Create Member
          </Typography>
          <div className='w-full grid grid-cols-3 gap-5'>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='First Name'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='Last Name'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='Username'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='City'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='Birthdate'
                type='date'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='Phone'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Select
                label='Role'
                color='blue'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='Password'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
            <div>
              <Input
                color='blue'
                placeholder=''
                label='Confirm Password'
                size='lg'
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
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
            variant='gradient'
            onClick={handleOpen}
            fullWidth
            color='blue'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Save
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default AddMemberForm;
