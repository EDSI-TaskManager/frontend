import type { NextPage } from "next";
import LoginForm from "../../components/login-form";

const Home: NextPage = () => {
  return (
    <div>
      <head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
           <LoginForm/>
      </main>
    </div>
  );
};

export default Home;
