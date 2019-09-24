import React from 'react';
import {WhiteBlueButton} from '../../buttons/Buttons';
import styles from './Hero.module.scss';
import {Slideshow} from '../../slideshow/Slideshow';

export const Hero = (props) => {

    return (
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
            <div className="parallax">
                <div className="parallax__layer parallax__layer--back">
                    <p>this is back</p>
                </div>
                <div className="parallax__layer parallax__layer--base">
                    <p>This is front</p>
                </div>
            </div>
        </section>
    );
};

