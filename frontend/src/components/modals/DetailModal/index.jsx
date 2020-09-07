import React, { useEffect, useCallback } from 'react';
import { FiEdit2, FiDelete, FiX } from 'react-icons/fi';

import Modal from 'react-modal';
import Button from '../../Button';

import Content from '../../../assets/Conteudo1.png';
import MessageModal from '../MessageModal';

import { Container, ContentContainer } from './styles';
import EditArticleModal from '../EditArticleModal';
import { useSelector } from 'react-redux';

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

function DetailModal({ isOpen, setIsOpen }) {
  const [modalStatus, setModalStatus] = React.useState(isOpen);
  const [isSucessModal, setIsSucessModalModal] = React.useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = React.useState(false);

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

  const openEditModal = useCallback(() => {
    setIsOpenEditModal(!isOpenEditModal);
  }, [isOpenEditModal]);

  const state = useSelector(state => state.content)

  console.log(state)
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
          <img src={Content} alt="Content" />
          <div>
            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

            <Button type="button" onClick={openEditModal}>
              <FiEdit2 />
              <span>Editar</span>
            </Button>
            <Button color="#DC0000" onClick={openSucessModal}>
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
              cursor: 'pointer',
            }}
            onClick={setIsOpen}
          />
        </ContentContainer>
      </Container>
      <MessageModal setIsOpen={openSucessModal} isOpen={isSucessModal} text="ARTIGO EXCLUIDO COM SUCESSO" />
      <EditArticleModal setIsOpen={openEditModal} isOpen={isOpenEditModal} />

    </Modal>
  );
}

export default DetailModal;
