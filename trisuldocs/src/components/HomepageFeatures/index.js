import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Start Here',
    linkto: '/docs/guide/starthere/what_is_trisul',
    Svg: require('@site/static/img/undraw_onboarding_re_6osc.svg').default,
    description: (
      <>
        Your starting point for Trisul: Architecture, Data Flow, Product Modes,
        and guided Setup instructions.
      </>
    ),
  },
  {
    title: 'Admin Guide',
    linkto: '/docs/guide/ag',
    Svg: require('@site/static/img/undraw_secure_server_re_8wsq.svg').default,
    description: (
      <>
        Comprehensive guide for administrators: managing probes, hubs, contexts,
        storage, and domain tasks.
      </>
    ),
  },
  {
    title: 'User Guide',
    linkto: '/docs/guide/ug',
    Svg: require('@site/static/img/undraw_react_re_g3ui.svg').default,
    description: (
      <>
        Learn how to use day-to-day dashboards, traffic analytics, flow querying,
        generating reports, and viewing alerts.
      </>
    ),
  },
  {
    title: 'Learn Trisul',
    linkto: '/docs/guide/learntrisul/terminology',
    Svg: require('@site/static/img/undraw_book_lover.svg').default,
    description: (
      <>
        Deep-dive into Trisul terminology, core concepts, flow deduplication,
        and domain concepts.
      </>
    ),
  },
  {
    title: 'Reference',
    linkto: '/docs/guide/ref',
    Svg: require('@site/static/img/undraw_set_preferences_kwia.svg').default,
    description: (
      <>
        Reference documentation for all configuration files, executables, scripts,
        and plugin settings.
      </>
    ),
  },
  {
    title: 'Product Guides',
    linkto: '/docs/prodguide',
    Svg: require('@site/static/img/undraw_instant-analysis_vm8x.svg').default,
    description: (
      <>
        Dedicated solution guides for Trisul NetFlow Analyzer, IPDR Compliance,
        and ISP Analytics.
      </>
    ),
  },
  {
    title: 'API',
    linkto: '/docs/lua',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        Developer documentation for extending Trisul with custom LUA scripts,
        real-time processors, and the TRP API.
      </>
    ),
  },
  {
    title: 'Trisul DevZone Wiki',
    linkto: 'https://trisul.org/devzone',
    Svg: require('@site/static/img/undraw_dog_c7i6.svg').default,
    description: (
      <>
        Community wiki featuring tips, configuration examples, sample scripts,
        and practical tutorials for real deployments.
      </>
    ),
  },
];

function Feature({ Svg, title, description, linkto }) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <Link to={linkto}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
