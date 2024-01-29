import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import profile from "/public/images/profile.jpg";
import youngProfile from "/public/images/youngprofile.png";

const name = "Niamh Lawlor";
export const siteTitle = "Niamh Lawlor, personal site";

export default function Layout({ children, home }) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content={profile} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="all" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Image
                src={isHovering ? youngProfile : profile}
                className={utilStyles.profileImage}
                height={325}
                width={325}
                alt=""
                priority
              />
            </div>
          </>
        ) : (
          <>
            {/* <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link> */}
            {/* <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
