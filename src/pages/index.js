import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>DevTools</h1>
          <div className={styles.buttons}>
            <Link className={clsx('button', styles.actionButton)} to="/docs/intro">
              Guía de Chrome DevTools
            </Link>
            <Link className={clsx('button', styles.actionButtonOutline)} to="/docs/chrome-devtools/elements">
              Panel de Elementos
            </Link>
          </div>
        </div>
        <div className={styles.sections}>
          <div className={styles.section}>
          
            <h3>Inspección y Depuración</h3>
            <p>Inspecciona y modifica el DOM, depura JavaScript y analiza el rendimiento de tu aplicación web en tiempo real.</p>
          </div>
          <div className={styles.section}>
                        <h3>Análisis de Red</h3>
            <p>Monitorea peticiones de red, optimiza el rendimiento y mejora los tiempos de carga de tu sitio web.</p>
          </div>
          <div className={styles.section}>
                        <h3>Herramientas Avanzadas</h3>
            <p>Accede a herramientas poderosas como Lighthouse para auditorías, Memory para análisis de memoria, y más.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      noFooter={true}>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
