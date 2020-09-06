import React, { useState, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import {
  FiLogOut, FiPlusCircle, FiEdit2, FiDelete,
} from 'react-icons/fi';

import Logo from '../../assets/Logo.svg';
import Button from '../../components/Button';

import Content from '../../assets/Conteudo1.png';
import DetailModal from '../../components/modals/DetailModal';
import SureModal from '../../components/modals/SureModal';
import AddArticleModal from '../../components/modals/AddArticleModal';
import EditArticleModal from '../../components/modals/EditArticleModal';

import {
  Container, Main, CardContainer, Card, CardContent,
} from './styles';

const Articles = () => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenSureModal, setIsOpenSureModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const history = useHistory();

  const openDetailModal = useCallback(() => {
    setIsOpenDetailModal(!isOpenDetailModal);
  }, [isOpenDetailModal]);

  const openSureModal = useCallback(() => {
    setIsOpenSureModal(!isOpenSureModal);
  }, [isOpenSureModal]);

  const openAddModal = useCallback(() => {
    setIsOpenAddModal(!isOpenAddModal);
  }, [isOpenAddModal]);

  const openEditModal = useCallback(() => {
    setIsOpenEditModal(!isOpenEditModal);
  }, [isOpenEditModal]);

  const handleLogout = useCallback(() => {
    history.push('/login');
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
          <Card>
            <CardContent>
              <img src={Content} alt="Content" onClick={openDetailModal} />
              <span>Lorem ipsum dolor sit amet,</span>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </CardContent>
            <div>
              <Button type="button" onClick={openEditModal}>
                <FiEdit2 />
                <span>Editar</span>
              </Button>
              <Button type="button" color="#DC0000" onClick={openSureModal}>
                <FiDelete />
                <span>Excluir</span>
              </Button>
            </div>
          </Card>
          <Card>
            <CardContent>
              <img src={Content} alt="Content" onClick={openDetailModal} />
              <span>Lorem ipsum dolor sit amet,</span>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </CardContent>
            <div>
              <Button onClick={openEditModal}>
                <FiEdit2 />
                <span>Editar</span>
              </Button>
              <Button color="#DC0000" onClick={openSureModal}>
                <FiDelete />
                <span>Excluir</span>
              </Button>
            </div>
          </Card>
          <Card>
            <CardContent>
              <img src={Content} alt="Content" onClick={openDetailModal} />
              <span>Lorem ipsum dolor sit amet,</span>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </CardContent>
            <div>
              <Button type="button" onClick={openEditModal}>
                <FiEdit2 />
                <span>Editar</span>
              </Button>
              <Button color="#DC0000" onClick={openSureModal}>
                <FiDelete />
                <span>Excluir</span>
              </Button>
            </div>
          </Card>
          <Card>
            <CardContent>
              <img src={Content} alt="Content" onClick={openDetailModal} />
              <span>Lorem ipsum dolor sit amet,</span>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </CardContent>
            <div>
              <Button type="button" onClick={openEditModal}>
                <FiEdit2 />
                <span>Editar</span>
              </Button>
              <Button color="#DC0000" onClick={openSureModal}>
                <FiDelete />
                <span>Excluir</span>
              </Button>
            </div>
          </Card>
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
