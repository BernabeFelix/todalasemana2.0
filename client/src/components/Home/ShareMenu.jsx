import React from 'react';
import { string } from 'prop-types';
// import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SocialShare from 'material-ui/svg-icons/social/share';
import FontAwesome from 'react-fontawesome';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';
import { $gray } from '../../styles/variables';

const styles = {
  shareIconStyles: {
    fontSize: '24px',
    color: $gray
  },
  iconMenu: {
    iconStyle: {
      color: $gray,
      height: '18px',
      width: '18px'
    },
    style: { height: '18px', width: '18px', padding: 0 }
  }
};

const ShareMenu = ({ title, url }) => (
  <div className="btn-share">
    <IconMenu
      iconButtonElement={
        <IconButton
          iconStyle={styles.iconMenu.iconStyle}
          style={styles.iconMenu.style}
        >
          <SocialShare />
        </IconButton>
      }
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <FacebookShareButton url={url} quote={title} hashtag="#todalasemana.com">
        <MenuItem
          primaryText="Facebook"
          leftIcon={
            <FontAwesome
              name="facebook"
              className="share-icon"
              style={styles.shareIconStyles}
            />
          }
        />
      </FacebookShareButton>
      <TwitterShareButton url={url} quote={title}>
        <MenuItem
          primaryText="Twitter"
          leftIcon={
            <FontAwesome
              name="twitter"
              className="share-icon"
              style={styles.shareIconStyles}
            />
          }
        />
      </TwitterShareButton>
      <WhatsappShareButton url={url} quote={title} className="show-xs-only">
        <MenuItem
          primaryText="WhatsApp"
          leftIcon={
            <FontAwesome
              name="whatsapp"
              className="share-icon"
              style={styles.shareIconStyles}
            />
          }
        />
      </WhatsappShareButton>
    </IconMenu>
  </div>
);

ShareMenu.propTypes = {
  title: string.isRequired,
  url: string.isRequired
};

export default ShareMenu;
