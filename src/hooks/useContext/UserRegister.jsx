import { useState } from "react";
import { useUserData } from "./UserContext";

export default function UserRegister() {
  const initialState = {
    username: "",
    email: "",
    mobile: "",
    hobbies: "",
  };
  const { saveUser } = useUserData();
  const [userData, setUserData] = useState(initialState);
  const handleInputChange = (e) => {
    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    saveUser(userData);
    setUserData(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginTop: "3rem",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            type='text'
            placeholder='Name'
            required
            name='username'
            value={userData?.username}
            onChange={handleInputChange}
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={userData?.email}
            onChange={handleInputChange}
            required
          />
          <input
            type='number'
            name='mobile'
            value={userData?.mobile}
            placeholder='mobile no'
            onChange={handleInputChange}
            required
          />
          <select
            name='hobbies'
            value={userData?.hobbies}
            onChange={handleInputChange}
          >
            <option value='Cricket'>Cricket</option>
            <option value='Swimming'>Swimming</option>
            <option value='Riding'>Roding</option>
          </select>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input
              type='radio'
              name='gender'
              value='male'
              onChange={handleInputChange}
            />
            <label htmlFor='html'>male</label>
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={handleInputChange}
            />
            <label htmlFor='html'>female</label>
          </div>
          <input type='submit' value='save' />
        </div>
      </form>
    </>
  );
}
