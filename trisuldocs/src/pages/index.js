import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';

// Update this block for each major release. The home page version pill reads from it.
const RELEASE = {
  version: '8.0',
  date: 'October 2026',
  notesLink: '/docs/guide/releasehistory#webtrisul-8-0',
};
import styles from './index.module.css';

function HomepageTicker() {
  const text = "New: Network Analytics Glossary is now live • Explore key terms, concepts, and metrics • ";
  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerBadge}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          New
        </div>
        <div className={styles.tickerScroll}>
          <Link to="/glossary" className={styles.tickerLink}>
            <div className={styles.tickerTrack}>
              <span className={styles.tickerText}>{text}</span>
              <span className={styles.tickerText}>{text}</span>
              <span className={styles.tickerText}>{text}</span>
              <span className={styles.tickerText}>{text}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link className={styles.versionPill} to={RELEASE.notesLink}>
          Trisul {RELEASE.version} · {RELEASE.date} · Release notes →
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="Wide and deep visibility, detection, and audit of network traffic">
      <HomepageTicker />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

