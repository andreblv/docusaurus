import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Inspección y Depuración',
    description: (
      <>
        Inspecciona y modifica el DOM, depura JavaScript, y analiza el rendimiento de tu aplicación web en tiempo real.
      </>
    ),
  },
  {
    title: 'Análisis de Red',
    description: (
      <>
        Monitorea peticiones de red, optimiza el rendimiento y mejora los tiempos de carga de tu sitio web.
      </>
    ),
  },
  {
    title: 'Herramientas Avanzadas',
    description: (
      <>
        Accede a herramientas poderosas como Lighthouse para auditorías, Memory para análisis de memoria, y más.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
