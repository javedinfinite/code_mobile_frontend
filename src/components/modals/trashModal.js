import { Pagination,Grid, Loader, Table, Label,Modal,Button, Header,Icon} from 'semantic-ui-react'

export const trashModal = (closeModal, reactState, handleDeleteRow) => {
    const model_ui =   <Modal  open={true} basic size='small'>
        
    <Header icon='archive' content='Archive user' />
    <Modal.Content>
      <p>
        {/* Are you sure you want to unlist this item ? */}
        This feature is not implemented yet
      </p>
    </Modal.Content>
    <Modal.Actions>
      {/* <Button basic color='red' inverted  onClick={() => closeModal('show_trash_model')}>
        <Icon name='remove' /> No
      </Button> */}
      <Button basic color='red' inverted  onClick={() => closeModal('show_trash_model')}>
        <Icon name='remove' /> This feature is not implemented yet, please close
      </Button>
      {/* <Button color='green' inverted onClick={() => handleDeleteRow(reactState.selected_user.id,reactState.page_number)} >
        <Icon name='checkmark' /> Yes
      </Button> */}
    </Modal.Actions>
  </Modal>
    return model_ui
}