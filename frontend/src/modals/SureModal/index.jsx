import React, { useEffect } from 'react';
import { FiEdit2, FiDelete, FiX } from 'react-icons/fi';

import Modal from 'react-modal';

import Content from '../../assets/Conteudo1.png';

import Button from '../../components/Button';

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

function SureModal({ isOpen, setIsOpen }) {
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
          <img src={Content} alt="Content Image" />
          <div>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

            <Button>
              <FiEdit2 />
              <span>Editar</span>
            </Button>
            <Button color="#DC0000">
              <FiDelete />
              <span>Excluir</span>
            </Button>
          </div>
          <FiX
            style={{
              position: 'relative',
              top: '-25px',
              width: '14px',
              height: '14px',
            }}
            onClick={setIsOpen}
          />
        </ContentContainer>
      </Container>
    </Modal>
  );
}

export default SureModal;
