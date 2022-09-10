import React, { useState, useMemo, useRef } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import '../style/index.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

const db = [
  {
    name: 'Richard Hendricks',
    url: 'assets/images/avatars/Abbott.jpg',
    intro: 'That\'s just me!!'
  },
  {
    name: 'Dinesh Helen',
    url: 'assets/images/avatars/Helen.jpg',
    intro: 'Elon the Musk'
  },
  {
    name: 'Alice Erlich',
    url: 'assets/images/avatars/alice.jpg',
    intro: 'Look at my pants dripping'
  },
  {
    name: 'Nora Hall',
    url: 'assets/images/avatars/Nora.jpg',
    intro: 'Ni**a am ghost'
  },
  {
    name: 'Arnold Dunn',
    url: 'assets/images/avatars/Arnold.jpg',
    intro: 'Play this shit for me'
  }
]


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Advanced () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const classes = useStyles();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    // <Grid container spacing={2}></Grid>
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />




<Grid container spacing={7}>
    <Grid item xs={4}>
    {/* <Item>xs=4</Item> */}
    
    <div className='cardContainer' style={{ paddingRight: '60px' }}>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
              <br/><br/><br/>
              <p style={{fontSize: '20px', position: 'absolute', left: '120%', top: '50%'}}>{character.intro}</p>
            </div>
          </TinderCard>
        ))}
      </div>


  </Grid>
  <Grid item xs={8}>
    {/* <Item>xs=8</Item> */}
    <h1>Ye West</h1><br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam cumque nulla dolorum repellat
       delectus, iure unde quibusdam asperiores eius impedit sint sed est alias corrupti sapiente sequi fugiat
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, consequuntur? In labore deserunt aliquam
        nulla itaque recusandae eius, odit voluptates architecto quae quos animi exercitationem mollitia dicta
         doloribus blanditiis vero!
        fuga!</p>
  </Grid>
</Grid>
        <Root>
        <Divider>
            <Chip label="CONNECT😉 | SKIP❌" />
        </Divider>
        </Root>
      <div className={classes.root}>
      {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group"> */}
      <ButtonGroup size="large" variant="contained" color="primary" aria-label="large contained primary button group">
        <Button style={{ backgroundColor: !canSwipe && '#1B2330' }} onClick={() => swipe('left')}>Skip</Button>
        <Button style={{ backgroundColor: !canGoBack && '#0891B2' }} onClick={() => goBack()}>Undo</Button>
        <Button style={{ backgroundColor: !canSwipe && '#1B2330' }} onClick={() => swipe('right')}>Invite</Button>
      </ButtonGroup>
      </div>
      {/* <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: canGoBack && '#0891B2' }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
      </div> */}
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText headerTwo'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText headerTwo'>
          .
        </h2>
      )}

    </div>
  )
}

export default Advanced