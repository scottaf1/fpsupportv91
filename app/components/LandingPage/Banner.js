import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import link from 'dan-api/ui/link';
import styles from './landingStyle-jss';
import BannerParallax from './BannerParallax';
import reduxLogo from 'dan-images/logo/redux.png';
import finproLogo from 'dan-images/logo/finproLogo.png';

function Banner(props) {
  const { classes, slideMode } = props;

  const reducer = 'ui';
  const gradient = useSelector(state => state.getIn([reducer, 'gradient']));
  return (
    <div
      className={
        classNames(
          classes.banner,
          gradient ? classes.gradient : classes.solid,
          slideMode ? classes.out : classes.fit
        )
      }
    >
      {!slideMode && <BannerParallax />}
      <div className={!slideMode ? classes.container : ''}>
      <img src={finproLogo} alt="FINPRO IT" />
        <Typography component="p" variant="h8" gutterBottom>SERVING EASTERN NC  – OFFICES IN WILSON AND GREENVILLE NC</Typography>
        <div className={classes.btnArea}>
          <Button
            size="small"
            variant="outlined"
            className={classNames(classes.button, classes.btnLight)}
            component={Link}
            to={link.contact}
          >
            GET IN TOUCH
          </Button>
          <Button
            size="medium"
            variant="outlined"
            className={classNames(classes.button, classes.btnLight)}
            component={Link}
            to={link.login}
          >
            CUSTOMER PORTAL
          </Button>
          <Button
            size="medium"
            variant="outlined"
            className={classNames(classes.button, classes.btnLight)}
            component={Link}
            to={link.dashboard}
          >
            CUSTOMER PORTAL
          </Button>
        </div>
       
        <div className={classes.previewApp}>
          <Hidden smDown>
            <div className={classNames(classes.m2, classes.screen, slideMode ? classes.bottom : '')}>
              <img src="/images/screen/crm.jpg" alt="crm dashboard" />
            </div>
          </Hidden>
          <div className={classNames(classes.m1, classes.screen)}>
            <img src="/images/screen/personal.jpg" alt="personal dashboard" />
          </div>
          <Hidden smDown>
            <div className={classNames(classes.m3, classes.screen, slideMode ? classes.bottom : '')}>
              <img src="/images/screen/crm.jpg" alt="crypto dashboard" />
            </div>
          </Hidden>

        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Banner.defaultProps = {
  slideMode: false
};

const MemoedBanner = memo(Banner);
export default (withStyles(styles)(MemoedBanner));
