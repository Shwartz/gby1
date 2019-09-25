import React from 'react';
import {WhiteBlueButton} from '../../buttons/Buttons';
import styles from './Hero.module.scss';
import {Slideshow} from '../../slideshow/Slideshow';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

const ParallaxImage1 = () => (
    <Parallax className={styles.parallaxImg1} y={[-350, 150]} tagOuter="figure">
        <svg width="100px" height="103px" viewBox="0 0 100 103" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-2" fill="#CECB05"
                         points="-0.01953125 42.7601895 21.333926 42.7601895 37.2986184 77.0474793 77.2593877 0.09765625 99.9804688 0.09765625 49.9804688 102.097656 21.333926 102.097656"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage2 = () => (
    <Parallax className={styles.parallaxImg2} y={[-450, 450]} tagOuter="figure">
        <svg width="50px" height="53px" viewBox="0 0 100 103" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-2" fill="#CECB05"
                         points="-0.01953125 42.7601895 21.333926 42.7601895 37.2986184 77.0474793 77.2593877 0.09765625 99.9804688 0.09765625 49.9804688 102.097656 21.333926 102.097656"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage3 = () => (
    <Parallax className={styles.parallaxImg3} y={[-50, 50]} tagOuter="figure">
        <svg width="164px" height="253px" viewBox="0 0 164 253" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-3" fill="#38C0B8"
                         points="0 0 86.9804688 126.5 0 253 73.9310509 253 163.741095 126.5 86.9804688 0"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage4 = () => (
    <Parallax className={styles.parallaxImg4} y={[-450, 150]} tagOuter="figure">
        <svg width="133px" height="136px" viewBox="0 0 133 136" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-4" fill="#15318F"
                         points="0 47.2261489 45.3886777 47.2261489 45.3886777 0 89.0378734 0 89.0378734 47.2261489 133 47.2261489 133 89.4970211 89.0378734 89.4970211 89.0378734 136 45.3886777 136 45.3886777 89.4970211 0 89.4970211"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage5 = () => (
    <Parallax className={styles.parallaxImg5} y={[-50, 50]} tagOuter="figure">
        <svg width="40px" height="40px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-5" fill="#AB3161"
                         points="0 0 26.4411172 0 40.9573489 24.6145403 54.3237895 0 80 0 52.326066 39.6111986 80 80 54.3237895 80 40 56.8279828 26.4411172 80 0 80 26.4411172 40"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage6 = () => (
    <Parallax className={styles.parallaxImg6} y={[-50, 50]} tagOuter="figure">
        <svg width="40px" height="40px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-5" fill="#AB3161"
                         points="0 0 26.4411172 0 40.9573489 24.6145403 54.3237895 0 80 0 52.326066 39.6111986 80 80 54.3237895 80 40 56.8279828 26.4411172 80 0 80 26.4411172 40"/>
            </g>
        </svg>
    </Parallax>
);

export const Hero = (props) => (
    <ParallaxProvider>
        <section className={styles.hero}>
            <ParallaxImage1/>
            <ParallaxImage2/>
            <ParallaxImage3/>
            <ParallaxImage4/>
            <ParallaxImage5/>
            <ParallaxImage6/>
            <div className={styles.heroWrap}>
                <h1>Migraine Detective is a digital headache diary that helps to find your migraine triggers.</h1>
                <WhiteBlueButton
                    href="https://migraine-detective.com/open-diary"
                >
                    Open your diary
                </WhiteBlueButton>
                <Slideshow
                    images={props.images}
                />
            </div>
        </section>
    </ParallaxProvider>
);



