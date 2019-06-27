import React from 'react';

const Feedback = props => {
  return (
    <div className="Bid">
      <p>Reviewer: {props.review.reviewer_name}</p>
      <p>Title: {props.review.title}</p>
      <p>Description: {props.review.description}</p>
      <p>Rating: {props.review.rating}</p>
      <p>Would recommend: {props.review.recommend}</p>
    </div>
  );
};

export default Feedback;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 840
//   }
// });

// export default function Feedback(props) {
//   const classes = useStyles();

//   return (
//     <>
//       <Box mt={5} />
//       <Card className={classes.card}>
//         {/* <CardActionArea> */}
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Reviewer: {props.review.reviewer_name}
//           </Typography>
//           <Typography gutterBottom variant="h5" component="h2">
//             Title: {props.review.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Description: {props.review.description}
//           </Typography>
//         </CardContent>

//         {/* </CardActionArea> */}
//         <CardActions>
//           <Button size="small" color="primary">
//             Rating: {props.review.rating}
//           </Button>
//           <Button size="small" color="primary">
//             Would recommend: {props.review.recommend}
//           </Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// }
