import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/slices/userSlice";
import "./profile.css";
import {
  useGetAllPostQuery,
  useCreatePostMutation,
  useGetPostByIdQuery,
} from "../redux/UserApi";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

const inputObj = {
  name: "",
  email: "",
};

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };
  const { data, isError, isFetching, isSuccess } = useGetAllPostQuery();

  console.log("featching data", data)
  useEffect(()=>{

  }, isSuccess)

  const [createPost, responceInfo] = useCreatePostMutation();
  const postById = useGetPostByIdQuery();
  const [inputData, setInputData] = useState(inputObj);
  const [update, setUpdate] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputData({ ...inputData, [name]: value });
  };

  const onEditData = () => {
    // createPost({
    //   id: inputField.id,
    //   title: inputField.title,
    //   body: inputField.body,
    // })
    inputData(inputObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you are clicked on submit button");
    createPost(inputData)
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email "
          onChange={(e) => handleChange(e)}
        />{" "}
        <br />
        <button type="submit">submit</button>
      </form>
      userList
      <br></br>
      <div>
        {data?.map((item, index) => {
          console.log("item is ", item);

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: 3,
                border: "2px solid black",
                width: "40%",
                mx: "auto",
              }}
            >
              <Box>
                <Typography> {item?.name}</Typography>
                <Typography>{item?.email}</Typography>
              </Box>
              <Box>
                <button onClick={onEditData} type="button">
                  Update
                </button>
                <button
                  onClick={onEditData}
                  type="button"
                  style={{ marginLeft: "5px" }}
                >
                  Delete
                </button>
              </Box>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
