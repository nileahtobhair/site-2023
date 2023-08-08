import React from "react";
import Head from "next/head";

const Language = ({ title, lang }) => (
  <Head>
    <html lang={lang} />
    <title>{title}</title>
  </Head>
);

export default Language;
