import React, { useEffect, useCallback, useState } from 'react';
import Modal from 'react-modal';

import { FiUpload } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import MessageModal from '../MessageModal';

import Button from '../../Button';
import Input from '../../Input';
import TextArea from '../../TextArea';

import { Container, ContentContainer, CloseIcon } from './styles';
import api from '../../../services/api';
import EditArticle from '../../../store/modules/content/actions';

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

const EditArticleModal = ({ isOpen, setIsOpen, id }) => {
  // const dispatch = useDispatch();
  const stateContent = useSelector(state => state.content.items)


  const [modalStatus, setModalStatus] = useState(isOpen);
  const [isSucessModal, setIsSucessModalModal] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const openSucessModal = useCallback((content) => {
    // dispatch(EditArticle(content));

    setIsOpen();
    setIsSucessModalModal(!isSucessModal);
  }, [isSucessModal, setIsOpen]);

  useEffect((id) => {
    api.get(`articles/${id}`).then((response) => {
      setContent(response.data);
    });
  }, []);


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
          <h3>EDITAR</h3>
          {stateContent.map(item => (
            <>
          {console.log(item.content)}
              <Input value={item.content.title} name="title" label="Título" />
              <TextArea value={item.content.description} />
            </>
          ))}

          <Button color="#00145F" width={114}>
            <FiUpload />
            <span>IMAGEM</span>
          </Button>
          <Button width={114} onClick={() => openSucessModal(content)}>
            <span>SALVAR</span>
          </Button>
        </ContentContainer>
      </Container>
      ))

      <MessageModal setIsOpen={openSucessModal} isOpen={isSucessModal} text="ARTIGO ATUALIZADO" />
    </Modal>
  );
};

export default EditArticleModal;
