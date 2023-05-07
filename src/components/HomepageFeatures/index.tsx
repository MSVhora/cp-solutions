import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Problem archives',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        With our Problem Archives feature, you have access to a wide range of programming problems that can help you improve your skills and knowledge. Whether you're a beginner or an advanced programmer, you can find problems that match your level of expertise and interests.
      </>
    ),
  },
  {
    title: 'Detailed Explanations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In contrast to many discussions posts, our approach is to offer in-depth explanations, both in-line and in the form of articles.
      </>
    ),
  },
  {
    title: 'Code snippets and explanations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our website provides code snippets and detailed explanations for each solution, helping users to understand how the solution works and learn from it. This includes explanations of the algorithms and data structures used in the solution, as well as comments in the code to explain what each line does.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
