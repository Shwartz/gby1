import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fac } from '@fortawesome/free-solid-svg-icons'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import styles from './Share.module.scss';

const Share = ({ socialConfig, tags }) => {
  console.log("socialConfig: ", socialConfig)
  console.log("tags: ", tags)
  const fb = styles.facebook;

  return (
    <div className="post-social">
      <FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      {/*<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
			</span>
      <span className="text">LinkedIn</span>
    </LinkedinShareButton>*/}
    </div>
  )
};

export default Share;

/*
* INFO: https://swas.io/blog/social-share-button-for-gatsby-blog-pages/
* */
