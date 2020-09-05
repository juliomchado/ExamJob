import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  FiLogOut, FiPlusCircle, FiEdit2, FiDelete,
} from 'react-icons/fi';

import Logo from '../../assets/Logo.svg';
import Button from '../../components/Button';

import Content from '../../assets/Conteudo1.png';

import {
  Container, Main, CardContainer, Card, CardContent,
} from './styles';

const Articles = () => (
  <Container>
    <div>
      <img src={Logo} alt="Lead Up" />

      <Button>
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
            <img src={Content} alt="Logo Conteudo" />
            <span>Lorem ipsum dolor sit amet,</span>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </CardContent>
          <div>
            <Button>
              <FiEdit2 />
              <span>Editar</span>
            </Button>
            <Button color="#DC0000">
              <FiEdit2 />
              <span>Excluir</span>
            </Button>
          </div>
        </Card>
        <Card>
          <CardContent>
            <img src={Content} alt="Logo Conteudo" />
            <span>Lorem ipsum dolor sit amet,</span>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </CardContent>
          <div>
            <Button>
              <FiEdit2 />
              <span>Editar</span>
            </Button>
            <Button color="#DC0000">
              <FiEdit2 />
              <span>Excluir</span>
            </Button>
          </div>
        </Card>
        <Card>
          <CardContent>
            <img src={Content} alt="Logo Conteudo" />
            <span>Lorem ipsum dolor sit amet,</span>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </CardContent>
          <div>
            <Button>
              <FiEdit2 />
              <span>Editar</span>
            </Button>
            <Button color="#DC0000">
              <FiEdit2 />
              <span>Excluir</span>
            </Button>
          </div>
        </Card>
        <Card>
          <CardContent>
            <img src={Content} alt="Logo Conteudo" />
            <span>Lorem ipsum dolor sit amet,</span>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
          </CardContent>
          <div>
            <Button>
              <FiEdit2 />
              <span>Editar</span>
            </Button>
            <Button color="#DC0000">
              <FiEdit2 />
              <span>Excluir</span>
            </Button>
          </div>
        </Card>
      </CardContainer>
    </Main>
  </Container>
);

export default Articles;
