import React, { useEffect, useCallback, useState } from 'react';
import Modal from 'react-modal';
import MessageModal from '../MessageModal';

import Button from '../../Button';

import { Container, ContentContainer } from './styles';

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

const SureModal = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [isSucessModal, setIsSucessModalModal] = useState(false);

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
          <h3>Tem certeza de que deseja excluir?</h3>
          <div>
            <Button type="button" onClick={openSucessModal}>
              <span>SIM</span>
            </Button>
            <Button type="button" color="#DC0000" onClick={setIsOpen}>
              <span>NÃO</span>
            </Button>
          </div>
        </ContentContainer>
      </Container>
      <MessageModal setIsOpen={openSucessModal} isOpen={isSucessModal} text="ARTIGO EXCLUIDO COM SUCESSO" />
    </Modal>
  );
};

export default SureModal;
