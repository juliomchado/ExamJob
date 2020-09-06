import React, { useEffect } from 'react';

import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

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
  const [modalStatus, setModalStatus] = React.useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

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
          <FiX onClick={setIsOpen} />
          <h3>ARTIGO EXCLUIDO COM SUCESSO</h3>
        </ContentContainer>
      </Container>

    </Modal>
  );
};

export default SureModal;
