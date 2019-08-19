import React from "react"
import styles from "./ReadMore.module.scss"

export const ReadMore = (props) => {

  return (
    <div className={styles.wrap}>
      <section>
        <div>
          <h3>Talk to your doctor</h3>
          <p>A certified neurologist will give a proper migraine diagnosis. First of all, she will determine whether you
            have primary or secondary migraines. If you are being diagnosed with chronic migraine or headaches, she may
            recommend you writing a headache diary to identify the triggers.</p>

          <a href="#">What are migraine triggers?</a>
        </div>
        <div>
          <ul>
            <li>Primary or secondary headaches?</li>
            <li>Writing a headache diary</li>
            <li>Identifying migraine triggers</li>
          </ul>
        </div>
      </section>


    </div>
  )
}

