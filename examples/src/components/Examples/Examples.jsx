import React, { PropTypes } from 'react'

/* eslint-disable import/no-extraneous-dependencies */
import Example from 'Example'
/* eslint-enable import/no-extraneous-dependencies */

import styles from './Examples.scss'

import Base from './Base'
import OneParam from './OneParam'
import TwoParams from './TwoParams'
import DontWait from './DontWait'
import Loader from './Loader'

const Examples = ({ style, className }) => (
  <div style={style} className={`${styles.examples} ${className}`}>
    <Example
      className={styles.example}
      link="Base"
      code="export&nbsp;default loader(Base)"
      buttons={{ 0: true }}
      example={<Base />}
    >
      <div className={styles.doc}>
        <h3>Base: defaults parameters</h3>
        <p className={styles.description}>
          In this example, the loader wraps a Component with its default parameters.
          It means that the loader calls <pre>this.props.load</pre>
          &nbsp;if presents, then waits for <pre>this.props.loaded</pre>
        &nbsp;to be truthy, and finally displays the wrapped components.
          While waiting for <pre>this.props.loaded</pre>&nbsp;
          to be truthy, hoc-react-loader takes care of displaying
          a spinner based on the background color.
        </p>
      </div>
    </Example>

    <Example
      className={styles.example}
      link="OneParam"
      code="export&nbsp;default loader(OneParam, { wait: ['prop'] })"
      buttons={{ 1: true }}
      example={<OneParam />}
    >
      <div className={styles.doc}>
        <h3>OneParam: waiting for a given param</h3>
        <p className={styles.description}>
          Like in the previous example, the default loading indicator is used (the spinner) and
          &nbsp;<pre>this.props.load</pre> is called. But this time, the <pre>HOC</pre> waits for
          &nbsp;<pre>this.props.prop</pre> as specified in the <pre>wait</pre> param.
        </p>
      </div>
    </Example>

    <Example
      className={styles.example}
      link="TwoParams"
      code="export&nbsp;default loader(TwoParams, { wait: ['prop', 'prop2'] })"
      buttons={{ 1: true, 2: true }}
      example={<TwoParams />}
    >
      <div className={styles.doc}>
        <h3>TwoParams: wait for multiple props</h3>
        <p className={styles.description}>
          Waiting for multiple props is almost the same of waiting for one. You just need
          to add every props to wait for in the <pre>wait</pre> array param.
          Here, <pre>hoc-react-loader</pre> waits for <pre>prop</pre> and <pre>prop2</pre>
          &nbsp;to be truthy!
        </p>
      </div>
    </Example>

    <Example
      className={styles.example}
      link="DontWait"
      code="export&nbsp;default loader(DontWait, { wait: false })"
      buttons={{ 0: true }}
      example={<DontWait />}
    >
      <div className={styles.doc}>
        <h3>DontWait: don't show the placeholder</h3>
        <p className={styles.description}>
          If the <pre>wait</pre> param is set to <pre>false</pre> the <pre>hoc-react-loader</pre>
          &nbsp;will not display the loading indicator (default or custom).
          But <pre>this.props.load</pre> is still called if presents!
        </p>
      </div>
    </Example>

    <Example
      className={styles.example}
      link="Base"
      code="export&nbsp;default loader(Loader, { Loader: CustomLoader })"
      buttons={{ 0: true }}
      example={<Loader />}
    >
      <div className={styles.doc}>
        <h3>Loader: change the default loading indicator</h3>
        <p className={styles.description}>
          In this example, the default loading indicator is replaced with a custom one.
          The component waits for the default prop (<pre>this.props.loaded</pre>).
        </p>
      </div>
    </Example>
  </div>
)

Examples.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Examples
