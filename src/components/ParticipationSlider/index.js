import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { ReactComponent as ChevronLeft } from 'assets/svg/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/svg/chevron-right.svg';
import cyan from '@material-ui/core/colors/cyan';
import SwipeableViews from 'react-swipeable-views';
import Post from './Post';

const useStyles = makeStyles(theme => ({
  boldText: {
    fontWeight: 600,
    fontSize: '1.2rem'
  },
  lightText: {
    fontWeight: 400
  },
  btn: {
    width: '30px',
    height: '30px',
    minWidth: 'unset',
    minHeight: 'unset',
    margin: '0 3px',
    backgroundColor: cyan[500]
  },
  textWhite: { color: 'white' }
}));

function ParticipationSlider() {
  const classes = useStyles();
  const [indexCurrent, setIndexCurrent] = useState(0);

  const swipeSlider = () => {
    setIndexCurrent((indexCurrent + 1) % 2);
  };
  return (
    <Box mt={4}>
      <Grid container justify="space-between" style={{ marginBottom: 20 }}>
        <div>
          <p className={classes.boldText}>On the front page</p>
          <p className={classes.lightText}>
            Discover the current content selected by Fluicity
          </p>
        </div>
        <div>
          <Fab
            onClick={swipeSlider}
            size="small"
            classes={{ root: classes.btn }}
          >
            <ChevronLeft className={classes.textWhite} height="18" width="18" />
          </Fab>
          <Fab
            onClick={swipeSlider}
            size="small"
            classes={{ root: classes.btn }}
          >
            <ChevronRight
              className={classes.textWhite}
              height="18"
              width="18"
            />
          </Fab>
        </div>
      </Grid>

      <SwipeableViews index={indexCurrent} animateHeight enableMouseEvents>
        <div>
          <Grid container>
            {[1, 2, 3, 4].map(i => (
              <Grid item xs={3} key={i}>
                <Post>{i}</Post>
              </Grid>
            ))}
          </Grid>
        </div>
        <Grid container>
          {[1, 2, 3, 4].map(i => (
            <Grid item xs={3} key={i}>
              <Post>{i}</Post>
            </Grid>
          ))}
        </Grid>
      </SwipeableViews>
    </Box>
  );
}

export default ParticipationSlider;
