import React from 'react';
import {WhiteBlueButton} from '../../buttons/Buttons';
import styles from './Hero.module.scss';
import {Slideshow} from '../../slideshow/Slideshow';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

const ParallaxImage1 = () => (
    /* Square */
    <Parallax className={styles.parallaxImg1} y={[-50, 50]} tagOuter="figure">
        <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Rectangle" fill="#003D62" x="0" y="0" width="44" height="44"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage2 = () => (
    /* Cross */
    <Parallax className={styles.parallaxImg2} y={[-100, 100]} tagOuter="figure">
        <svg width="133px" height="136px" viewBox="0 0 133 136" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path-4" fill="#15318F"
                         points="0 47.2261489 45.3886777 47.2261489 45.3886777 0 89.0378734 0 89.0378734 47.2261489 133 47.2261489 133 89.4970211 89.0378734 89.4970211 89.0378734 136 45.3886777 136 45.3886777 89.4970211 0 89.4970211"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage3 = () => (
    /* Red cross */
    <Parallax className={styles.parallaxImg3} y={[-150, 150]} tagOuter="figure">
        <svg width="64px" height="64px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M46,-4 L46,26 L76,26 L76,46 L46,46 L46,76 L26,76 L26,46 L-4,46 L-4,26 L26,26 L26,-4 L46,-4 Z" id="Combined-Shape" fill="#A12B56" transform="translate(36.000000, 36.000000) rotate(45.000000) translate(-36.000000, -36.000000) "/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage4 = () => (
    /* Red cross */
    <Parallax className={styles.parallaxImg4} y={[-50, 50]} tagOuter="figure">
        <svg width="85px" height="60px" viewBox="0 0 85 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M18,52.9655172 L18,39.4482759 L53.4827586,39.4482759 L53.4827586,-18 L67,-18 L67,52.9655172 L53.4827586,52.9655172 L18,52.9655172 Z" id="Combined-Shape" fill="#CDC64F" transform="translate(42.500000, 17.482759) rotate(45.000000) translate(-42.500000, -17.482759) "/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage5 = () => (
    /* Red cross */
    <Parallax className={styles.parallaxImg5} y={[-50, 50]} tagOuter="figure">
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Rectangle-Copy" fill="#003D62" x="0" y="0" width="22" height="22"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage6 = () => (
    /* little square */
    <Parallax className={styles.parallaxImg6} y={[-50, 50]} tagOuter="figure">
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Rectangle-Copy" fill="#003D62" x="0" y="0" width="22" height="22"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage7 = () => (
    /* little square */
    <Parallax className={styles.parallaxImg7} y={[-50, 50]} tagOuter="figure">
        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Rectangle-Copy" fill="#003D62" x="0" y="0" width="22" height="22"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage8 = () => (
    /* Red cross */
    <Parallax className={styles.parallaxImg8} y={[-100, 100]} tagOuter="figure">
        <svg width="164px" height="300px" viewBox="0 0 164 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Path" fill="#38C0B8" points="0 0 81.6771831 150 0 300 66.6385133 300 163.354366 150 66.6385133 0"/>
            </g>
        </svg>
    </Parallax>
);

const ParallaxImage9 = () => (
    /* Red cross */
    <Parallax className={styles.parallaxImg9} y={[-150, 150]} tagOuter="figure">
        <svg width="64px" height="64px" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M46,-4 L46,26 L76,26 L76,46 L46,46 L46,76 L26,76 L26,46 L-4,46 L-4,26 L26,26 L26,-4 L46,-4 Z" id="Combined-Shape" fill="#A12B56" transform="translate(36.000000, 36.000000) rotate(45.000000) translate(-36.000000, -36.000000) "/>
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
            <ParallaxImage7/>
            <ParallaxImage8/>
            <ParallaxImage9/>
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



