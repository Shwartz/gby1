import React from 'react';
import {WhiteBlueButton} from '../../buttons/Buttons';
import styles from './Hero.module.scss';
import {Slideshow} from '../../slideshow/Slideshow';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

const ParallaxImage1 = ({img}) => {
    console.log('--- img: ', img);
    console.log('--- img.imgLogo....: ', img.imgLogo);
    return <Parallax className={styles.parallaxImg1} y={[-350, 150]} tagOuter="figure">
        <img src={img.imgLogo.childImageSharp.fixed.src} />
    </Parallax>;
};

export const Hero = (props) => {
    /* https://www.npmjs.com/package/react-scroll-parallax */
    console.log("props: ", props);
    console.log('logo: ', props.images.imgLogo.childImageSharp.fixed.src);
    return (
        <ParallaxProvider>
            <section className={styles.hero}>
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
                <ParallaxImage1 img={props.images} />
            </section>
        </ParallaxProvider>
    );
};

