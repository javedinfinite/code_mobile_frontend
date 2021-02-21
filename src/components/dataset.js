import React, { Component } from 'react'
import { Pagination,Grid, Loader, Table, Label,Modal,Button, Header,Icon} from 'semantic-ui-react'
// import DatasetList from './datasetList';
import {getusers, getSomeUsers} from '../actions/socialAction'
import { connect } from 'react-redux';
import _ from 'lodash'

class Dataset extends Component {
    state = {
 
        data:[],
        page_number:1,
        show_model:false,
        item_id:''
      
      }

  handleDeleteRow = (vehicle_id,page_number) => {
    console.log("delete is clicked",vehicle_id)
    console.log("page_number is clicked",page_number)
    this.setState({show_model: false  })
    // this.props.dispatch(deleteVehicle(vehicle_id)).then(  ( ) =>  { this.props.dispatch(getSomeUsers(page_number)) ; }   );
    // this.props.dispatch(deleteVehicle(vehicle_id));
    // this.props.dispatch(getSomeVehicleList(page_number));
  }

  handleModel = (value) =>{
    this.setState({show_model: value  })
  }

  setIdToDelete = (item_id) => {
    this.setState({ item_id: item_id, show_model: true  })
  }

  componentDidMount(){
    this.props.dispatch(getSomeUsers(1));
  }

  return_model = (item_id,page_number) => {
    const model_ui =   <Modal  open={this.state.show_model} basic size='small'>
    <Header icon='archive' content='Archive Vehicle' />
    <Modal.Content>
      <p>
        Are you sure you want to unlist this item ?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted  onClick={() => this.handleModel(false)}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick={() => this.handleDeleteRow(item_id,page_number)} >
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>

  return model_ui
  }
  
  render() {
    // console.log("from dataset",this.state.tcount)
    // const { someVehicleList} = this.props;
    const { error, isLoading, someUsers, totalVehicleCount, page_number} = this.props;
    
    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else{

      if(_.isEmpty(this.props.someUsers)  )
      return null;

      return (
        <div style = {{padding:'20px', backgroundColor:'white', width:'100%'}}>

        <div>
            {(() => {
              if (this.state.show_model) {
                return (
                  this.return_model(this.state.item_id, page_number)
                )
              }   
            })()}
          </div>

        <div  >
            <Table celled   selectable inverted>
                <Label color='green' ribbon>Social Users Table</Label>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>avatar</Table.HeaderCell>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>userid</Table.HeaderCell>
                        <Table.HeaderCell>name</Table.HeaderCell>
                        <Table.HeaderCell>email</Table.HeaderCell>
                        <Table.HeaderCell>view</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>

                        {/* <Table.HeaderCell>Notes</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {someUsers.map( (item, index) => (
                    <Table.Row>
                        <Table.Cell>{item.avatar}</Table.Cell>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.userid}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell textAlign="center" selectable style={{color:'green'}} onClick={() => this.setIdToDelete(item.id)}>
                        <i aria-hidden="true"  color='red' class="edit alternate icon"></i>
                        </Table.Cell>
                        <Table.Cell textAlign="center" selectable style={{color:'red'}} onClick={() => this.setIdToDelete(item.id)}>
                        <i aria-hidden="true"  color='red' class="trash alternate icon"></i>
                        </Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
        </div>
      )
    }

  }
}


const mapStateToProps = (state, props) => {
    console.log("from dataset..............",state.socialReducers.someUsers)
  return {
    someUsers: state.socialReducers.someUsers,
    error:  state.socialReducers.error,
    isLoading: state.socialReducers.isLoading
  };
};

export default connect(mapStateToProps)(Dataset);

