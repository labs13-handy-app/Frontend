// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import BidsForProject from './BidsForProject';
// import { getProjectById, deleteBid } from '../../actions';
// import Loader from 'react-loader-spinner';

// import './ProjectsById.css';

// class ProjectsById extends Component {
//   componentDidMount() {
//     const id = this.props.match.params.id;
//     this.props.getProjectById(id);
//   }

//   render() {
//     if (this.props.projects.bids === undefined) {
//       return (
//         <>
//           <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
//         </>
//       );
//     } else {
//       console.log(this.props.projects);
//       console.log(this.props.projects.bids);
//       return (
//         <div className="project-container">
//           {/* <div className='Project'>
//          <div className="project-image">
//         <img src={this.props.thumbnail ? this.props.thumbnail : ''} alt="" />
//       </div>
//         <div className="project-content">
//           <h2>{this.props.projects.title}</h2>

//          <p>Description: {this.props.projects.description}</p>

//          <p>Materials Included? {this.props.projects.materials_included}</p>
//          <div>
//           </div>
//           </div>
//          </div> */}
//           <h2>List of bids for your project</h2>
//           <div className="bid-container">
//             {this.props.projects.bids.map(bid => (
//               <BidsForProject
//                 bid={bid}
//                 key={bid.id}
//                 deleteBid={this.props.deleteBid}
//               />
//             ))}
//           </div>
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = ({ getProjectByIdReducer }, props) => {
//   return {
//     projects: getProjectByIdReducer.projects
//   };
// };
// export default connect(
//   mapStateToProps,
//   { getProjectById, deleteBid }
// )(ProjectsById);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BidsForProject from './BidsForProject';
import { getProjectById, deleteBid } from '../../actions';
import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { compose } from 'recompose';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6)
    // border: '1px solid red'
  },
  submit: {
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'hsl(120, 27%, 56%)'
    }
  }
});

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#70C55D'
//     },
//     secondary: {
//       main: '#B8E2AE'
//     }
//   },
//   typography: { useNextVariants: true }
// });

class ProjectsById extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProjectById(id);
  }

  render() {
    const { classes } = this.props;
    if (this.props.projects.bids === undefined) {
      return (
        <>
          <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
        </>
      );
    } else {
      console.log(this.props.projects);
      console.log(this.props.projects.bids);
      return (
        // <div className="project-container">
        //   <h2>List of bids for your project</h2>
        //   <div className="bid-container">
        //     {this.props.projects.bids.map(bid => (
        //       <BidsForProject
        //         bid={bid}
        //         key={bid.id}
        //         deleteBid={this.props.deleteBid}
        //       />
        //     ))}
        //   </div>
        // </div>
        <>
          <CssBaseline />
          <div className={classes.heroContent}>
            <CardActions>
              <NavLink
                to={`/dashboard-homeowner/users/${
                  localStorage.userID
                }/projects`}
              >
                {/* <button>Back to my dashboard</button> */}
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.submit}
                  align="left"
                >
                  Back to my dashboard
                </Button>
              </NavLink>

              <Container>
                <Typography variant="h4" gutterBottom>
                  List of bids for your project
                </Typography>
              </Container>
            </CardActions>
          </div>
          <div>
            {this.props.projects.bids.map(bid => (
              <BidsForProject
                bid={bid}
                key={bid.id}
                deleteBid={this.props.deleteBid}
              />
            ))}
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = ({ getProjectByIdReducer }, props) => {
  return {
    projects: getProjectByIdReducer.projects
  };
};
export default connect(
  mapStateToProps,
  { getProjectById, deleteBid }
)(compose(withStyles(styles))(ProjectsById));
