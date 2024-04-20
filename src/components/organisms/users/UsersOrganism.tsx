import { FaSearch, FaSort, FaPencilAlt, FaUserPlus } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getAllTheUsers } from "../../../services/user_service";
import AddMemberForm from "../../templates/modals/AddMemberForm";
import EditMemberForm from "../../templates/modals/EditMemberForm copy";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Enabled",
    value: 4,
  },
  {
    label: "Disabled",
    value: -4,
  },
];

const TABLE_HEAD = ["Name", "User Role", "Status", "Created At", ""];

const UsersOrganism = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<number | string>("all");
  const [lastPage, setLastPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(null);

  const [isAddUserModal, setIsAddUserModal] = useState(false);
  const [isEditUserModal, setIsEditUserModal] = useState(false);

  useEffect(() => {
    getAllTheUsers({ currentPage, searchText, status }).then((res) => {
      setUsers(res.data.users);
      setLastPage(res.data.totalPages);
      setTotalRecords(res.data.totalRecords);
    });
  }, [status, searchText, currentPage]);

  const handleTabChange = (value: any) => {
    setStatus(value);
  };

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='w-full'>
      <Card
        className='h-full w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          floated={false}
          shadow={false}
          className='rounded-none'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='mb-8 flex items-center justify-between gap-8'>
            <div>
              <Typography
                variant='h5'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                User list
              </Typography>
              <Typography
                color='gray'
                className='mt-1 font-normal'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                See information about all users
              </Typography>
            </div>
            <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
              <Button
                className='flex items-center gap-3'
                size='sm'
                color='blue'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={() => setIsAddUserModal(true)}
              >
                <FaUserPlus strokeWidth={2} className='h-4 w-4' /> Add member
              </Button>
            </div>
          </div>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <Tabs value={status} className='w-full md:w-max' onChange={handleTabChange}>
              <TabsHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className='w-full md:w-72'>
              <Input
                label='Search'
                icon={<FaSearch className='h-5 w-5' />}
                crossOrigin={undefined}
                onChange={handleSearchTextChange}
                color='blue'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody
          className='overflow-scroll px-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <table className='mt-4 w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
                  >
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {head} {index !== TABLE_HEAD.length - 1 && <FaSort strokeWidth={2} className='h-4 w-4' />}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(({ img, firstName, lastName, email, user_role, status, createdAt }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={firstName}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <Avatar
                          src={img}
                          alt={firstName}
                          size='sm'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        />
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {firstName + " " + lastName}
                          </Typography>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal opacity-70'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex flex-col'>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {user_role}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='w-max'>
                        <Chip
                          variant='ghost'
                          size='sm'
                          value={status == 4 ? "Enabled" : "Disabled"}
                          color={status == 4 ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {createdAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content='Edit User'>
                        <IconButton
                          variant='text'
                          onClick={() => setIsEditUserModal(true)}
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <FaPencilAlt className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter
          className='flex items-center justify-between border-t border-blue-gray-50 p-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant='small'
            color='blue-gray'
            className='font-normal'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Page {currentPage} of {lastPage} | Total Records {totalRecords}
          </Typography>
          <div className='flex gap-2'>
            <Button
              color='blue'
              variant='outlined'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Previous
            </Button>
            <Button
              color='blue'
              variant='outlined'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={() => {
                if (currentPage < lastPage) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      <AddMemberForm open={isAddUserModal} setOpen={setIsAddUserModal} />
      <EditMemberForm open={isEditUserModal} setOpen={setIsEditUserModal} />
    </div>
  );
};

export default UsersOrganism;
