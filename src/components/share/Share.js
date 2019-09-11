import React from "react"

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon
} from "react-share"

import "./Share.scss"

const Share = ({ socialConfig, tags }) => {
  console.log("socialConfig: ", socialConfig)
  console.log("tags: ", tags)

  const fbShareCount = (
    <FacebookShareCount url='https://migraine-detective.com'>
      {shareCount => {
        return (
          <span className="myShareCountWrapper">{shareCount ? shareCount : null}</span>
        )
      }}
    </FacebookShareCount>
  );

  return (
    <div className="post-social">
      <FacebookShareButton url="https://migraine-detective.com">
        <FacebookIcon size={32} round={true}/>
        <div className="SocialMediaShareTitle">Facebook</div>
        {fbShareCount}
      </FacebookShareButton>

      <TwitterShareButton
        title="The digital diary which helps to find triggers for your migraine"
        url="https://migraine-detective.com"
        via={socialConfig.twitterHandle.split('@').join('')}
        hashtags={['migraine', 'diary', 'headache']}
      >
        <TwitterIcon size={32} round={true}/>
        <div className="SocialMediaShareTitle">Twitter</div>
      </TwitterShareButton>
    </div>
  )
}

export default Share

/*
* INFO: https://swas.io/blog/social-share-button-for-gatsby-blog-pages/
*
* react-share module changes in file: FacebookShareCount.js (node_modules)

import jsonp from 'jsonp';

import shareCountFactory from './utils/shareCountFactory';

function getFacebookShareCount(shareUrl, callback) {
  // var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;
  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl + '&fields=og_object{engagement}';

  jsonp(endpoint, function (err, data) {
     // callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
     callback(!err && data && data.og_object && data.og_object.engagement && data.og_object.engagement.count
                ? data.og_object.engagement.count
                : undefined
     );
  });
}

export default shareCountFactory(getFacebookShareCount);

* */
