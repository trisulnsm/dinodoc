import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';

// Update this block for each major release. The home page pill and "What's new" band read from it.
const RELEASE = {
  version: '8.0',
  date: 'October 2026',
  notesLink: '/docs/guide/releasehistory#webtrisul-8-0',
  highlights: [
    'MITRE ATT&CK matrix and timeline view',
    'Flow Map for visualizing flows',
    'NetFlow IP Tracker for expected flow exporters',
    'Two-factor authentication over Email and SMS',
    'Audit logs in the UI',
  ],
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

function HomepageWhatsNew() {
  return (
    <section className={styles.whatsNew} aria-labelledby="whats-new">
      <div className="container">
        <Heading as="h2" id="whats-new" className={styles.whatsNewHeading}>
          What&apos;s new in Trisul {RELEASE.version}
        </Heading>
        <div className={styles.whatsNewGrid}>
          <div className={clsx(styles.whatsNewCard, styles.whatsNewCardPrimary)}>
            <Heading as="h3">Trisul AI</Heading>
            <p>
              Ask questions about your network in plain language. Trisul AI answers
              with tables, charts, reports and dashboards, using the data already
              stored in Trisul.
            </p>
            <p className={styles.whatsNewMeta}>
              Applies to NetFlow Analyzer, NSM and ISP Analytics modes.
            </p>
            <div className={styles.whatsNewButtons}>
              <Link className="button button--primary" to="/docs/guide/trisulai/setup">
                Set up Trisul AI
              </Link>
              <Link className="button button--secondary" to="/docs/guide/trisulai">
                What Trisul AI can do
              </Link>
            </div>
          </div>
          <div className={styles.whatsNewCard}>
            <Heading as="h3">Also in {RELEASE.version}</Heading>
            <ul className={styles.whatsNewList}>
              {RELEASE.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button button--outline button--primary" to={RELEASE.notesLink}>
              Read the {RELEASE.version} release notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      description="Wide and deep visibility, detection, and audit of network traffic">
      <HomepageTicker />
      <HomepageHeader />
      <main>
        <HomepageWhatsNew />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

