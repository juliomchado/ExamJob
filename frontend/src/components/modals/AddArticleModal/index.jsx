import React, { useEffect, useCallback } from 'react';
import Modal from 'react-modal';

import { FiUpload } from 'react-icons/fi';
import MessageModal from '../MessageModal';

import Button from '../../Button';
import Input from '../../Input';
import TextArea from '../../TextArea';

import { Container, ContentContainer, CloseIcon } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100vh',
    padding: '0',
    background: '',
  },
};

Modal.setAppElement('#root');

const AddArticleModal = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = React.useState(isOpen);
  const [isSucessModal, setIsSucessModalModal] = React.useState(false);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const openSucessModal = useCallback(() => {
    setIsOpen();
    setIsSucessModalModal(!isSucessModal);
  }, [isSucessModal, setIsOpen]);

  return (
    <Modal
      isOpen={modalStatus}
      onAfterOpen={afterOpenModal}
      onRequestClose={setIsOpen}
      style={customStyles}
      contentLabel="Details Content"
    >
      <Container>
        <ContentContainer>
          <CloseIcon onClick={setIsOpen} />
          <h3>CRIAR</h3>
          <Input name="text" label="Título" />
          <TextArea />
          <Button color="#00145F" width={114}>
            <FiUpload />
            <span>IMAGEM</span>
          </Button>
          <Button width={114} onClick={openSucessModal}>
            <span>SALVAR</span>
          </Button>
        </ContentContainer>

      </Container>
      <MessageModal setIsOpen={openSucessModal} isOpen={isSucessModal} text="ARTIGO CRIADO" />
    </Modal>
  );
};

export default AddArticleModal;
