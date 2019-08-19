import React, { useRef } from "react"
import styles from "./ReadMore.module.scss"
import { useInView } from "react-intersection-observer"

const ReadMore = (props) => {
  const [ref, inView, entry] = useInView({
                                           /* Optional options */
                                           threshold: 1,
                                         })

  return (
    <div className={styles.wrap}>
      <section>
        <div>
          <h3>Talk to your doctor</h3>
          <div ref={ref}>
            <h2>{`Header inside viewport ${inView}.`}</h2>
          </div>
          <span className={styles.animate}/>
          <p>A certified neurologist will give a proper migraine diagnosis. First of all, she will determine whether you
            have primary or secondary migraines. If you are being diagnosed with chronic migraine or headaches, she may
            recommend you writing a headache diary to identify the triggers.</p>

          <p><a href="#">What are migraine triggers?</a></p>
        </div>
        <div>
          <em>01</em>
          <ul>
            <li>Primary or secondary headaches?</li>
            <li>Writing a headache diary</li>
            <li>Identifying migraine triggers</li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <em>02</em>
          <ul>
            <li>Migraine and lifestyle diary</li>
            <li>More than 12 diary categories</li>
            <li>Flexible tagging</li>
          </ul>
        </div>
        <div>
          <h3>Keep a headache diary</h3>
          <p>Track your lifestyle events as well as migraine episodes and medicines with Migraine Detective. The more
            you add to the diary, the better chances are that you will be able to identify patterns that trigger your
            migraine episodes.</p>

          <p><a href="#">View migraine diary examples</a></p>
        </div>
      </section>
      <section>
        <div>
          <h3>Get meaningful insights</h3>
          <p>Identify patterns of events that trigger your migraines with advanced reporting features. Migraine
            Detective provides you with meaningful data points that you can share with your doctor and support your
            conversation.​​</p>
        </div>
        <div>
          <em>03</em>
          <ul>
            <li>Frequency of migraine episodes</li>
            <li>Details about medication intakes</li>
            <li>Patterns of events triggering migraines</li>
          </ul>
        </div>
      </section>


    </div>
  )
}

export default ReadMore
