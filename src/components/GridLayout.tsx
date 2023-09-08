import React from 'react'
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material'

export default function GridLayout() {
    return (
        <Grid container sx={{
            border: '2px solid red'
        }} rowSpacing={12}
        >
            <Grid item sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '12px',
                border: '3px solid red'
            }} xs={12} md={6} xl={3}>
                <Card>
                    <CardMedia title="cardImage" sx={{
                        height: '20vh'
                    }} image="https://fastly.picsum.photos/id/465/200/300.jpg?hmac=GloUvp2VmlLW7pBsz3VDy5QNZizjay1SWjEmqisahZs" component={"img"} />
                    <CardContent>
                        <Typography variant="h4">Title of the card</Typography>
                        <Typography variant="body2" component={"div"} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi iusto dicta provident commodi iste aut consequuntur fugit quis laboriosam earum at excepturi minus voluptatibus labore, doloribus vero consequatur exercitationem.</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '12px',
                border: '3px solid red',

            }} xs={12} md={6} xl={3} ><Card>
                    <CardMedia title="cardImage" sx={{
                        height: '20vh'
                    }} image="https://fastly.picsum.photos/id/465/200/300.jpg?hmac=GloUvp2VmlLW7pBsz3VDy5QNZizjay1SWjEmqisahZs" component={"img"} />
                    <CardContent>
                        <Typography variant="h4">Title of the card</Typography>
                        <Typography variant="body2" component={"div"} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi iusto dicta provident commodi iste aut consequuntur fugit quis laboriosam earum at excepturi minus voluptatibus labore, doloribus vero consequatur exercitationem.</Typography>
                    </CardContent>
                </Card></Grid>
            <Grid item sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '12px',
                border: '3px solid red'
            }} xs={12} md={6} xl={3}><Card>
                    <CardMedia title="cardImage" sx={{
                        height: '20vh'
                    }} image="https://fastly.picsum.photos/id/465/200/300.jpg?hmac=GloUvp2VmlLW7pBsz3VDy5QNZizjay1SWjEmqisahZs" component={"img"} />
                    <CardContent>
                        <Typography variant="h4">Title of the card</Typography>
                        <Typography variant="body2" component={"div"} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi iusto dicta provident commodi iste aut consequuntur fugit quis laboriosam earum at excepturi minus voluptatibus labore, doloribus vero consequatur exercitationem.</Typography>
                    </CardContent>
                </Card></Grid>
            <Grid item sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '12px',
                border: '3px solid red'
            }} xs={12} md={6} xl={3}><Card>
                    <CardMedia title="cardImage" sx={{
                        height: '20vh'
                    }} image="https://fastly.picsum.photos/id/465/200/300.jpg?hmac=GloUvp2VmlLW7pBsz3VDy5QNZizjay1SWjEmqisahZs" component={"img"} />
                    <CardContent>
                        <Typography variant="h4">Title of the card</Typography>
                        <Typography variant="body2" component={"div"} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi iusto dicta provident commodi iste aut consequuntur fugit quis laboriosam earum at excepturi minus voluptatibus labore, doloribus vero consequatur exercitationem.</Typography>
                    </CardContent>
                </Card></Grid>
            <Grid item sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '12px',
                border: '3px solid red'
            }} xs={12} md={6} xl={3} ><Card>
                    <CardMedia title="cardImage" sx={{
                        height: '20vh'
                    }} image="https://fastly.picsum.photos/id/465/200/300.jpg?hmac=GloUvp2VmlLW7pBsz3VDy5QNZizjay1SWjEmqisahZs" component={"img"} />
                    <CardContent>
                        <Typography variant="h4">Title of the card</Typography>
                        <Typography variant="body2" component={"div"} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi iusto dicta provident commodi iste aut consequuntur fugit quis laboriosam earum at excepturi minus voluptatibus labore, doloribus vero consequatur exercitationem.</Typography>
                    </CardContent>
                </Card></Grid>
            <Grid item sx={{
                backgroundColor: 'skyblue',
                color: 'white',
                padding: '12px',
                border: '3px solid red'
            }} xs={12} md={6} xl={3}><Card>
                    <CardMedia title="cardImage" sx={{
                        height: '20vh'
                    }} image="https://fastly.picsum.photos/id/465/200/300.jpg?hmac=GloUvp2VmlLW7pBsz3VDy5QNZizjay1SWjEmqisahZs" component={"img"} />
                    <CardContent>
                        <Typography variant="h4">Title of the card</Typography>
                        <Typography variant="body2" component={"div"} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi iusto dicta provident commodi iste aut consequuntur fugit quis laboriosam earum at excepturi minus voluptatibus labore, doloribus vero consequatur exercitationem.</Typography>
                    </CardContent>
                </Card></Grid>
        </Grid>
    )
}
