import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = () => null;

/**
 * TODO: if already logged, redirect to another page
 */
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: { destination: "/login", permanent: false },
  };
};

export default Home;
