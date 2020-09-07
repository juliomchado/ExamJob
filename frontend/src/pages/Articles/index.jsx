import React, { useState, useCallback, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import {
  FiLogOut, FiPlusCircle, FiEdit2, FiDelete,
} from 'react-icons/fi';

import Logo from '../../assets/Logo.svg';
import Button from '../../components/Button';

import DetailModal from '../../components/modals/DetailModal';
import SureModal from '../../components/modals/SureModal';
import AddArticleModal from '../../components/modals/AddArticleModal';
import EditArticleModal from '../../components/modals/EditArticleModal';

import EditArticle from '../../store/modules/content/actions'

import {
  Container, Main, CardContainer, Card, CardContent,
} from './styles';
import api from '../../services/api';

const Articles = () => {
  const [content, setContent] = useState([]);

  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenSureModal, setIsOpenSureModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const openDetailModal = useCallback(() => {
    setIsOpenDetailModal(!isOpenDetailModal);
  }, [isOpenDetailModal]);

  const openSureModal = useCallback(() => {
    setIsOpenSureModal(!isOpenSureModal);
  }, [isOpenSureModal]);

  const openAddModal = useCallback(() => {
    setIsOpenAddModal(!isOpenAddModal);
  }, [isOpenAddModal]);

  const openEditModal = useCallback((content) => {
    dispatch(EditArticle(content))
    setIsOpenEditModal(!isOpenEditModal);
  }, [isOpenEditModal, dispatch]);

  const handleLogout = useCallback(() => {
    history.push('/login');
  }, [history]);

  useEffect(() => {
    api.get('articles').then((response) => {
      setContent(response.data);
    });
  }, []);

  return (

    <Container>
      <div>
        <img src={Logo} alt="Lead Up" />

        <Button onClick={(e) => handleLogout(e)}>
          <FiLogOut />
          <span>
            SAIR
          </span>
        </Button>
      </div>
      <Main>
        <div>
          <h1>ARTIGOS</h1>
          <Button color="#00145F" width={151} onClick={openAddModal}>
            <FiPlusCircle style={{ width: 14, height: 14 }} />
            <span>ADICIONAR</span>
          </Button>
        </div>
        <CardContainer>
          {content.map((data) => (
            <Card key={data.id}>
              <CardContent>
                <img src={data.image} alt="Content" onClick={openDetailModal} />
                <span>{data.title}</span>
                <p>{data.description}</p>
              </CardContent>
              <div>
                <Button type="button" onClick={() => openEditModal(data)}>
                  <FiEdit2 />
                  <span>Editar</span>
                </Button>
                <Button type="button" color="#DC0000" onClick={openSureModal}>
                  <FiDelete />
                  <span>Excluir</span>
                </Button>
              </div>
            </Card>
          ))}
        </CardContainer>
      </Main>
      <DetailModal setIsOpen={openDetailModal} isOpen={isOpenDetailModal} />
      <SureModal setIsOpen={openSureModal} isOpen={isOpenSureModal} />
      <AddArticleModal setIsOpen={openAddModal} isOpen={isOpenAddModal} />
      <EditArticleModal setIsOpen={openEditModal} isOpen={isOpenEditModal} />
    </Container>
  );
};

export default Articles;
