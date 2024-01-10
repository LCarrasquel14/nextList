import Users from "./components/Users";

const FechUser = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const users = await FechUser();
  return <Users user={users} />;
};

export default HomePage;
