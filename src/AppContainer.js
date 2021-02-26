import React from 'react';
import {Loader,Grid, Pagination} from 'semantic-ui-react';
import {  getUsersCount, getSomeUsers} from './actions/socialAction';
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
  
  componentDidMount() {
 
    if(_.isEmpty(this.props.totalUsersCount)  )
      this.props.dispatch(getUsersCount());
  }

  handlePaginationChange = (e, { activePage }) => {
 
    this.props.dispatch(getSomeUsers(activePage));

}
  render() {

    const { error, isLoading, totalUsersCount} = this.props;
    
    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else {

      if(_.isEmpty(this.props.totalUsersCount)  )
        return null;
  
      return (
          
        <Grid celled='internally'>

            <Grid.Row>
              <Header/>
            </Grid.Row>

            <Grid.Row style={{ height : '80vh' , overflow: 'auto'}} >
               
                  <Dataset page_number={this.state.activePage} />
               
            </Grid.Row>
            
            <Grid.Row>
              <Pagination inverted
                        // activePage = {this.state.activePage}
                        defaultActivePage = "1"
                        onPageChange = {this.handlePaginationChange}
                        totalPages= {this.props.totalUsersCount/10}
                        // totalPages= {12}
                      />
            </Grid.Row>
 
          </Grid>
      )
    }
  }
}
const mapStateToProps = (state, props) => {
  console.log("from appcontainer.....................",state.socialReducers.totalUsersCount)
  return {
    totalUsersCount: state.socialReducers.totalUsersCount,
    error:  state.socialReducers.error,
    isLoading: false
  };
};

export default connect(mapStateToProps)(AppContainer);