import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Admin Guide',
    linkto: '/docs/ag',
    Svg: require('@site/static/img/undraw_onboarding_re_6osc.svg').default,
    description: (
      <>
        Your starting point for deploying Trisul: Getting started, installation,
        licensing, system setup and essential configuration.
      </>
    ),
  },
  {
    title: 'User Guide',
    linkto: '/docs/ug',
    Svg: require('@site/static/img/undraw_react_re_g3ui.svg').default,
    description: (
      <>
        Learn how to use your day-to-day Dashboards, Traffic Analytics, Flow
        querying, generating reports, and viewing alerts.
      </>
    ),
  },
  {
    title: 'IPDR Guide',
    linkto: '/docs/ipdr',
    Svg: require('@site/static/img/undraw_secure_server_re_8wsq.svg').default,
    description: (
      <>
        Only for Trisul IPDR users: User and Admin Guide for the IP Data Record
        Logging solution.
      </>
    ),
  },
  {
    title: 'How Tos',
    linkto: '/docs/howto',
    Svg: require('@site/static/img/undraw_instant-analysis_vm8x.svg').default,
    description: (
      <>
        Common task-based guides to help you complete Trisul workflows and
        real-world scenarios.
      </>
    ),
  },
  {
    title: 'Config Files Reference',
    linkto: '/docs/ref',
    Svg: require('@site/static/img/undraw_set_preferences_kwia.svg').default,
    description: (
      <>
        Reference documentation for all configuration files, scripts, and
        programs. Ideal for tuning, troubleshooting, and automation.
      </>
    ),
  },
  {
    title: 'For Developers - LUA Guide',
    linkto: '/docs/lua',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg')
      .default,
    description: (
      <>
        Developer documentation for extending Trisul: using the LUA API to
        create analytics processors into the pipeline and the TRP API to query
        the Trisul database.
      </>
    ),
  },
  {
    title: 'ISP Guide',
    linkto: '/docs/isp',
    Svg: require('@site/static/img/open-source.svg').default,
    description: (
      <>
        Only for Trisul ISP users: peering analysis, routing visibility, and the
        full suite of Trisul’s ISP-focused analytics features.
      </>
    ),
  },
  {
    title: 'Trisul DevZone Wiki',
    linkto: 'https://trisul.org/devzone',
    Svg: require('@site/static/img/undraw_dog_c7i6.svg').default,
    description: (
      <>
        A community wiki with tips, configuration examples, advanced usage
        notes, and practical guidance for real deployments.
      </>
    ),
  },
];

function Feature({ Svg, title, description, linkto }) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <a href={linkto}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

