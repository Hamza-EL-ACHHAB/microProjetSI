import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
  return (
    <div className="users">
      <LinkContainer to="/signIn">
        <div className="user1">
          <div className="image-container">
            <img src="/stud.png" alt="Developer 1" />
          </div>
          <p className="developer-name">Etudiant </p>
        </div>
      </LinkContainer>
      <LinkContainer to="/signIn">
        <div className="user2">
          <div className="image-container">
            <img src="/prog.jpg" alt="Developer 2" />
          </div>
          <p className="developer-name">Professeur</p>
        </div>
      </LinkContainer>
      <LinkContainer to="/signIn">
        <div className="user3">
          <div className="image-container">
            <img src="/inter.jpg" alt="Developer 3" />
          </div>
          <p className="developer-name">Intervenant </p>
        </div>
      </LinkContainer>
    </div>
  );
};

export default HomeScreen;
