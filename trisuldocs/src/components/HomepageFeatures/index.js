import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    linkto: '/docs/ug/intro/free',
    Svg: require('@site/static/img/undraw_onboarding_re_6osc.svg').default,
    description: (
      <>
        Introduction to the Trisul Network Analytics platform. How to install, login for 
        the first time, get network data into the platform.
      </>
    ),
  },  
  {
    title: 'User Guide',
    linkto: '/docs/ug',
    Svg: require('@site/static/img/undraw_react_re_g3ui.svg').default,
    description: (
      <>
        Explore the User Guide. Configure and use Trisul NetFlow Analyzer, Trisul ISP, and other products.
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
    <div className={clsx('col col--4')}>
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
