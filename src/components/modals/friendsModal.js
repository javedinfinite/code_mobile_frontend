import React from 'react'
import { Pagination,Grid, Loader, Table,Card, Image, Label,Modal,Button, Header,Icon} from 'semantic-ui-react'
import _ from 'lodash'
import avatarImages from '../extra/avatar_images'


export const friendshModal = ( closeModal, reactState) => {
  // const [open, setOpen] = React.useState(false)
  if(_.isEmpty(reactState.userFriends)){
  return (
    <Modal open={true} >
       <Modal.Header>No friends found of <p style={{ display: 'inline', color:'blue' }}>{reactState.selected_user.name}.</p> </Modal.Header>
       <Modal.Content  scrolling image></Modal.Content>
       <Modal.Actions>
        <Button onClick={() => closeModal('show_friends_model')} primary>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )}
  else{
  return (
    <Modal  open={reactState.show_friends_model}   >
      <Modal.Header>Friends List of <p style={{ display: 'inline', color:'blue' }}>{reactState.selected_user.name}.</p> </Modal.Header>
      <Modal.Content  scrolling image>
        <Grid>
      {reactState.userFriends.map( (item, index) => (
        
    <Grid.Row columns={2} divided>
      <Grid.Column> 
                  <Card
                  image= {avatarImages.AVATAR[item.avatar]}
                  header={item.name}
                  meta={"Email : "+item.email}
                  description={"UserId : "+item.userid}
                />
           </Grid.Column>
           <Grid.Column>
      <Modal.Description style={{padding:"10px"}}>
        <strong > This is description of <p style={{ display: 'inline', color:'blue' }}>{item.name}.</p>  Here we can describe everything about a friend. </strong>

        <p> “You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, 
          the ocean does not become dirty.” – Mahatma Gandhi
          “To deny people their human rights is to challenge their very humanity.” – Nelson Mandela 
          “Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.” 
          “The sole meaning of life is to serve humanity.” – Leo Tolstoy </p>
      </Modal.Description> 
      </Grid.Column>

      </Grid.Row>
))}
</Grid>
    </Modal.Content>
         
      <Modal.Actions>
        <Button onClick={() => closeModal('show_friends_model')} primary>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )}
}

