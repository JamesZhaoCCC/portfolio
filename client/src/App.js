import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import frog3 from './images/frog3.jpg';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            {/* 
                appBar flex does not work - 
                REASON: Flex direction is being overwritten by .css-1cjrmu8-MuiPaper-root-MuiAppBar-root
                SOLUTION: force flexDirection using important in styles
            */}
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={frog3} alt='frog3' height='50'/>
            </AppBar>
            <Grow in>
                <Container>
                    {/* 
                        mainContainer flex does not work - 
                        REASON: Flex direction is being overwritten by .css-1vp1qdv-MuiGrid-root
                        SOLUTION: force flexDirection using important in styles
                    */}
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            
        </Container>
    );
}

export default App;