import Head from "next/head";
export default function About() {
  return (
    <div className="main">
      <Head>
        <title>About Page</title>
        <meta name="description" content="This is about page." />
        <meta property="og:title" content="About Page" />
        <meta property="og:type" content="website" />
        <meta name="og:site_name" property="og:site_name" content="kampd.com" />
        <meta name="og:url" property="og:url" content="https://kampd.com" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:secure_url" content="/logo.png" />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <h1>This is about page</h1>
    </div>
  );
}
