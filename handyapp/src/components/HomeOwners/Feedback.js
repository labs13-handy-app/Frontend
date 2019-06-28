import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

import './Feedback.css';

class Feedback extends React.Component {
  state = {
    rating: this.props.review.rating ? this.props.review.rating : null
  };
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  };
  render() {
    return (
      <div className="Feedback">
        <h5>{this.props.review.reviewer_name}</h5>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick}
        />
        <p>{this.props.review.description}</p>

        {/* <p>Rating: {this.props.review.rating}</p> */}
        <p
          className={`recommend ${
            this.props.review.recommend === 'yes' ? 'yes' : 'no'
          }`}
        >
          {this.props.review.recommend === 'yes'
            ? 'I would totally recommend this contractor'
            : 'I would not recommend this contractor'}
        </p>
      </div>
    );
  }
}

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
