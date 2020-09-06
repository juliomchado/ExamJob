import React, { useState, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import {
  FiLogOut, FiPlusCircle, FiEdit2, FiDelete,
} from 'react-icons/fi';

import Logo from '../../assets/Logo.svg';
import Button from '../../components/Button';

import Content from '../../assets/Conteudo1.png';
import DetailModal from '../../modals/DetailModal';
import SureModal from '../../modals/SureModal';

import {
  Container, Main, CardContainer, Card, CardContent,
} from './styles';

const Articles = () => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenSureModal, setIsOpenSureModal] = useState(false);

  const history = useHistory();

  const openDetailModal = useCallback(() => {
    setIsOpenDetailModal(!isOpenDetailModal);
  }, [isOpenDetailModal]);

  const openSureModal = useCallback(() => {
    console.log('oi');
    setIsOpenSureModal(!isOpenSureModal);
  }, [isOpenSureModal]);

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
          <Button color="#00145F">
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
              <Button type="button">
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
              <Button>
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
              <Button>
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
              <Button>
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
    </Container>
  );
};

export default Articles;
