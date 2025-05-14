import Head from 'next/head';

const Layouts = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NINE0ONE IX{pageTitle}</title>
      </Head>

      <>{children}</>
    </>
  );
};

export default Layouts;
