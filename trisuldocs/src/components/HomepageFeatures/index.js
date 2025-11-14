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
        Getting started, installation, licensing, configuration, etc.
      </>
    ),
  },  
  {
    title: 'User Guide',
    linkto: '/docs/ug',
    Svg: require('@site/static/img/undraw_react_re_g3ui.svg').default,
    description: (
      <>
        Dashboards, Traffic Analytics, Flow querying, generating reports, viewing alerts, 
      </>
    ),
  },
  {
    title: 'IPDR Guide',
    linkto: '/docs/ipdr',
    Svg: require('@site/static/img/undraw_secure_server_re_8wsq.svg').default,
    description: (
      <>
        User and Admin Guide for the IP Data Record Logging solution. 
      </>
    ),
  },
  {
    title: 'Config Files Reference',
    linkto: '/docs/ref',
    Svg: require('@site/static/img/undraw_set_preferences_kwia.svg').default,
    description: (
      <>
        Reference documentation for all configuration files, scripts, and programs.
      </>
    ),
  },
  {
    title: 'For Developers - LUA Guide',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    linkto: '/docs/lua',
    description: (
      <>
        The LUA API allows you to insert new streaming analytics processors into the pipeline. 
        The TRP is a open API to query the Trisul database.
      </>
    ),
  },
  {
    title: 'ISP Guide',
    Svg: require('@site/static/img/open-source.svg').default,
    linkto: '/docs/isp',
    description: (
      <>
        This ISP Guide provides a comprehensive overview of Trisul's 
        ISP configuration features and functionalities for optimizing peering, routing, and network analytics.
      </>
    ),
  },
  {
    title: 'Trisul DevZone Wiki',
    Svg: require('@site/static/img/undraw_dog_c7i6.svg').default,
    linkto: 'https://trisul.org/devzone',
    description: (
      <>
        The Trisul Network Analytics DevZone is a DokuWiki site which contains several tips and tricks, sample device configurations and more.
      </>
    ),
  },

];

function Feature({Svg, title, description, linkto}) {
  return (
    <div className={clsx('col col--3')}>
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
