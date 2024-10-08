// import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import blogStyles from "../styles/blog.module.css";
import Layout, { siteTitle } from "../components/layout";

import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.home}`}
      >
        <p>Hi, I'm Niamh. Software developer from Dublin, Ireland.</p>
        <p>
          I'm currently travelling full time but previously worked @
          <a target="_blank" href="https://andopen.co/">
            &Open
          </a>
          ,
          <a target="_blank" href="https://fluidly.com/">
            Fluidly
          </a>{" "}
          and
          <a target="_blank" href="https://www.codeandwander.com/">
            codeandwander.
          </a>
        </p>
        <p>
          Outside of work, I love to read, am a big sports fan and enjoy playing
          poker.
        </p>
        <p>
          As part of my last role I sat down to chat a little about my
          motivations and background. Interview
          <a
            target="_blank"
            href="https://www.irishtimes.com/advertising-feature/2022/07/06/ten-minutes-with-niamh-lawlor-senior-frontend-engineer-at-open/"
          >
            here.
          </a>
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
          or check out my CV
          <a
            href="/niamh.lawlor.CV.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        {/* <p>
          Just for fun, I am currently working on a few side projects;
          rememberremember (name tbd), an app to build topic specific date
          calendars, take a look
          <a
            href="https://getremember.niamhlawlor.com/"
            alt="project text"
            target="_blank"
            rel="noopener noreferrer"
          >
            here,
          </a>{" "}
          as well as
          <a
            href="https://dublingems.com/"
            alt="project text"
            target="_blank"
            rel="noopener noreferrer"
          >
            dublincitygems{" "}
          </a>
          which is just a fun directory site I'm currently building to hack
          around with SEO.
        </p> */}
      </section>
      {false && allPostsData.length > 0 && (
        <section>
          <h2 className={blogStyles.heading}>Thoughts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}
