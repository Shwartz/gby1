import React from 'react';
import styles from './ContactForm.module.scss';
import {InputWhiteBlueButton} from '../buttons/Buttons';

const ContactForm = (props) => {
    // expected props theme: light | dark
    const theme = props.theme === 'light' ? styles.light : '';

    return (
        <div className={`${styles.wrap} ${theme}`}>
            <form
                action="https://formspree.io/svarcs.01@gmail.com"
                method="POST"
            >
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                    />
                </label>
                <label>
        <textarea
            name="message"
            placeholder="Your message"
        />
                </label>
                <label>
                    <InputWhiteBlueButton
                        value="Send"
                    />
                </label>
            </form>
        </div>
    );
};

export default ContactForm;




