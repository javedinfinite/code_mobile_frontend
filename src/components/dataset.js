import React, { Component } from 'react'
import { Pagination,Grid, Image, Loader, Table, Label,Modal,Button, Header,Icon} from 'semantic-ui-react'
import {getusers, getSomeUsers, getUserFriends, getUserFofF} from '../actions/socialAction'
import { trashModal } from './modals/trashModal'
import {friendshModal} from './modals/friendsModal'
import { fofFModal} from './modals/fofFriends'
import { connect } from 'react-redux';
import _, { truncate } from 'lodash'
import avatar_images from './extra/avatar_images'
import '../App.css'

class Dataset extends Component {
    state = {
 
        data:[],
        page_number:1,
        show_trash_model:false,
        show_foff_model:false,
        show_friends_model:false,
        userFriends:[],
        selected_user:'',
        userFofF:[]
      
      }

  handleDeleteRow = (user_id,page_number) => {
    console.log("delete is clicked",user_id)
    console.log("page_number is clicked",page_number)
    this.setState({show_trash_model: false  })
    // this.props.dispatch(deleteUser(user_id)).then(  ( ) =>  { this.props.dispatch(getSomeUsers(page_number)) ; }   );
  }

  setActionId = (item, model_to_show, modalState) => {
    this.setState({ selected_user: item, [`${model_to_show}`]: modalState  })
    if(model_to_show=='show_friends_model'){
      console.log('clicked userfriends................')
      this.props.dispatch(getUserFriends(item.id)).then(  ( ) =>  { 
        this.setState({ userFriends: this.props.userFriends}) 
      });
    }

    else if(model_to_show=='show_foff_model'){
      console.log("from dispatch fofffriends............",this.props.userFofF)
      this.props.dispatch(getUserFofF(item.id)).then(  ( ) =>  { 
        this.setState({ userFofF: this.props.userFofF}) 
      });
    }

  }

  closeModal = (model_to_close) => {
    this.setState({ [`${model_to_close}`]: false  })
  }

  componentDidMount(){
    this.props.dispatch(getSomeUsers(1));
  }
  
  render() {
    // console.log("from dataset",this.state.tcount)
    // const { someVehicleList} = this.props;
    const { error, isLoading, someUsers, userFriends, page_number} = this.props;
    
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
              if (this.state.show_trash_model) {
                return (
                  trashModal(this.closeModal, this.state, this.handleDeleteRow)
                )
              }   
              else if (this.state.show_foff_model) {
                return (
                  fofFModal(this.closeModal, this.state)
                )
              } 
              else if (this.state.show_friends_model) {
                return (
                  friendshModal( this.closeModal, this.state)
                )
              } 
              else{
                return null
              }

            })()}
          </div>

        <div  >
            <Table celled   selectable   color='green'>
                <Label color='green' ribbon>Social Users Table</Label>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>AVATAR</Table.HeaderCell>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>USER ID</Table.HeaderCell>
                        <Table.HeaderCell>USER NAME</Table.HeaderCell>
                        <Table.HeaderCell>USER EMAIL</Table.HeaderCell>
                        <Table.HeaderCell>USER FRIENDS</Table.HeaderCell>
                        <Table.HeaderCell>FRIENDS OF FRIENDS</Table.HeaderCell>
                        <Table.HeaderCell>REMOVE</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {someUsers.map( (item, index) => (
                    <Table.Row>
          <Header as='h4' image>
            <Image src={avatar_images.AVATAR[item.avatar]} rounded size='mini' />
            <Header.Content>
              {item.name}
              <Header.Subheader>Id: {item.id}</Header.Subheader>
            </Header.Content>
          </Header>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.userid}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell className='action_items' textAlign="center" selectable style={{color:'green'}} onClick={() => this.setActionId(item,'show_friends_model',true)}>
                        <i aria-hidden="true"  color='red' class="facebook f alternate icon"></i>
                        </Table.Cell>
                        <Table.Cell className='action_items' textAlign="center" selectable style={{color:'green'}} onClick={() => this.setActionId(item,'show_foff_model',true)}>
                        <i aria-hidden="true"  color='red' class="users alternate icon"></i>
                        </Table.Cell>  
                        <Table.Cell className='action_items' textAlign="center" selectable style={{color:'red'}} onClick={() => this.setActionId(item,'show_trash_model',true)}>
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
  // if(!_.isEmpty(state.socialReducers.userFofF))
      // console.log("from dataset..............",state.socialReducers.userFofF)
  return {
    someUsers: state.socialReducers.someUsers,
    error:  state.socialReducers.error,
    isLoading: state.socialReducers.isLoading,
    userFriends: state.socialReducers.userFriends,
    userFofF: state.socialReducers.userFofF
  };
};

export default connect(mapStateToProps)(Dataset);

