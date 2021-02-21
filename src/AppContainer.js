import React from 'react';
import {Loader,Grid, Pagination} from 'semantic-ui-react';
import {getVehicleList, getVehicleListCount, getSomeVehicleList} from './actions/socialAction';
import Dataset from './components/dataset'
import Header from './components/header'
import { connect } from 'react-redux';
import './App.css'
import _ from 'lodash'

class AppContainer extends React.Component {
  state = {
    activePage: 1,
    data:[],
    offset: 5,
    tcount: 10
  }
  
//   componentDidMount() {
 
//     if(_.isEmpty(this.props.totalVehicleCount)  )
//       this.props.dispatch(getVehicleListCount());
//   }

  handlePaginationChange = (e, { activePage }) => {
 
    // this.props.dispatch(getSomeVehicleList(activePage));

}
  render() {

    const { error, isLoading, totalVehicleCount} = this.props;
    
    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else {

      // if(_.isEmpty(this.props.totalVehicleCount)  )
      //   return null;
  
      return (
          
        <Grid celled='internally'>

            <Grid.Row>
              <Header/>
            </Grid.Row>

            <Grid.Row style={{ height : '85vh' , overflow: 'auto'}} >
               
                  <Dataset  />
               
            </Grid.Row>
            
            <Grid.Row>
              <Pagination inverted
                        // activePage = {this.state.activePage}
                        defaultActivePage = "1"
                        onPageChange = {this.handlePaginationChange}
                        // totalPages= {this.props.totalVehicleCount}
                        totalPages= {12}
                      />
            </Grid.Row>
 
          </Grid>
      )
    }
  }
}
// style={{ height : '80vh' , overflow: 'auto'}}
const mapStateToProps = (state, props) => {
  // console.log("state.socialReducers.....................",state.socialReducers)
  return {
      t:"sddsf"
    // totalVehicleCount: state.socialReducers,
    // error:  state.socialReducers.error,
    // isLoading: state.socialReducers.isLoading 
  };
};

export default connect(mapStateToProps)(AppContainer);