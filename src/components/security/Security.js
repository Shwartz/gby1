import React from "react"
import styles from "./Security.module.scss"
import { useInView } from "react-intersection-observer"

const Security = (props) => {
  const [ref1, inView1] = useInView({ threshold: 1 })

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.svg}>
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="32 20 136 160" viewBox="32 20 136 160" height="200"
               width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img">
            <g>
              <path
                d="M167.905 22.667A2.662 2.662 0 0 0 165.238 20a2.34 2.34 0 0 0-1.429.476c-20.762 13.81-45.429 15.905-61.429.952-.667-.667-1.619-.952-2.476-.952s-1.714.286-2.476.952c-16 15.048-40.667 12.857-61.429-.952A2.557 2.557 0 0 0 34.571 20 2.56 2.56 0 0 0 32 22.571v80.762c0 3.048.286 6.095.762 9.143 2.381 15.524 10 28.095 20.667 38.857 12.857 12.857 28.19 21.81 44.952 28.381.476.191 1.048.286 1.619.286s1.143-.095 1.619-.286c16.762-6.476 32-15.429 44.952-28.381 10.762-10.762 18.286-23.333 20.667-38.857.476-3.048.762-6.095.762-9.143-.095-25.428-.095-54.952-.095-80.666 0 .095 0 .095 0 0z"/>
            </g>
          </svg>
          <div>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="32 13.8 136 172.4" viewBox="32 13.8 136 172.4"
                 height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img">
              <g>
                <path d="M150.5 13.8h-17.6l-52 131.1L64.2 98H32l31.8 88.2h35.3L168 13.8h-17.5z"/>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.contentWrap}>
          <h3>Top Grade Security</h3>
          <span ref={ref1} className={inView1 ? styles.animate : ""}/>
          <div className={styles.textBox}>
            <div className={styles.left}>
              <p>Your data will always be safe and secure with a bank-grade security and encryption systems.</p>
            </div>
            <div>
              <p>The diary data is stored on secure servers controlled by Firebase (Google) as per "Platform as a
                Service"
                conditions.</p>
              <p>Read more about Privacy and Security in Firebase.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security
