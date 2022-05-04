import Head from "next/head";

export default function Product({ productId, title }) {
  return (
    <div>
      <Head>
        <title>Product - {productId}</title>
        <meta
          name="description"
          content={`This is product description for product ${productId}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="og:site_name" property="og:site_name" content="kampd.com" />
        <meta name="og:url" property="og:url" content="https://kampd.com" />
        <meta property="og:image" content={`/product${productId}.png`} />
        <meta
          property="og:image:secure_url"
          content={`/product${productId}.png`}
        />
        <link rel="icon" href="/favicon-logo.ico" />
      </Head>
      <h1>Product Id: {productId}</h1>
      <h1>Title: {title}</h1>
    </div>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        productId: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
