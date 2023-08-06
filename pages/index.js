// import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

// import Link from "next/link";
// import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home() {
  return (
    <Layout home>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.home}`}
      >
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
        <p>Hi, I'm Niamh. Software developer from Dublin, Ireland.</p>
        <p>
          I'm currently travelling full time but previously
          <a target="_blank" href="https://andopen.co/">
            &Open
          </a>
          ,
          <a target="_blank" href="https://fluidly.com/">
            Fluidly
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://www.codeandwander.com/">
            codeandwander.
          </a>
        </p>
        <p>
          Outside of work, I love to read and enjoy playing poker. I am big
          sports fan and currently enjoying the women's world cup.
        </p>
        <p>
          Find me on
          <a target="_blank" href="https://twitter.com/nileahtobhair">
            twitter
          </a>
          ,
          <a target="_blank" href="https://www.linkedin.com/in/nlawlor/">
            linkedin
          </a>{" "}
          and check out my CV
          <a href="https://www.codeandwander.com/">here.</a>
        </p>
      </section>
    </Layout>
  );
}
