import React from "react"

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
} from "react-share"

import "./Share.scss"

const Share = ({ socialConfig }) => {
  const {title, url, hashTags, twitterHandle} = socialConfig;
  const fbShareCount = (
    <FacebookShareCount url='https://migraine-detective.com'>
      {shareCount => {
        return (
          <span className="myShareCountWrapper">{shareCount ? shareCount : null}</span>
        )
      }}
    </FacebookShareCount>
  )

  return (
    <div className="post-social">
      <FacebookShareButton
        quote={title}
        url={url}
        hashtags={hashTags}
      >
        <FacebookIcon
          size={32}
          round={true}
        />
        <div className="SocialMediaShareTitle">Facebook</div>
        {fbShareCount}
      </FacebookShareButton>

      <TwitterShareButton
        title={title}
        url={url}
        via={socialConfig.twitterHandle.split("@").join("")}
        hashtags={hashTags}
      >
        <TwitterIcon size={32} round={true}/>
        <div className="SocialMediaShareTitle">Twitter</div>
      </TwitterShareButton>
    </div>
  )
}

export default Share

/*
* INFO:
* I change API in node_module, probably this should be moved into our solution
Some ideas:
https://swas.io/blog/social-share-button-for-gatsby-blog-pages/
https://www.npmjs.com/package/react-share
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
