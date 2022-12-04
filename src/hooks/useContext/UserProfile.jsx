import { useUserData } from "../useContext/UserContext";

export default function UserProfile() {
  const { userDetails } = useUserData();
  return <h1>{JSON.stringify(userDetails)}</h1>;
}
