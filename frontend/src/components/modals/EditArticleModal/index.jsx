import React, {
  useEffect, useCallback, useState,
} from 'react';
import Modal from 'react-modal';

import { FiUpload } from 'react-icons/fi';
import MessageModal from '../MessageModal';

import Button from '../../Button';
import Input from '../../Input';
import TextArea from '../../TextArea';

import { Container, Form, CloseIcon } from './styles';

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

const EditArticleModal = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [isSucessModal, setIsSucessModalModal] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const openSucessModal = useCallback(() => {
    setContent(content);
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
        <Form>
          <CloseIcon onClick={setIsOpen} />
          <h3>EDITAR</h3>
          <Input name="title" label="Título" />
          <TextArea />
          <Button color="#00145F" width={114}>
            <FiUpload />
            <span>IMAGEM</span>
          </Button>
          <Button type="submit" width={114} onClick={(e) => openSucessModal(e.target.value)}>
            <span>SALVAR</span>
          </Button>
        </Form>
      </Container>
      ))

      <MessageModal setIsOpen={openSucessModal} isOpen={isSucessModal} text="ARTIGO ATUALIZADO" />
    </Modal>
  );
};

export default EditArticleModal;
