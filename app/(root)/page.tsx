import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold ml-10 mt-10">Welcome to the world of Next.js</h1>
    </>
  );
};

export default Home;
