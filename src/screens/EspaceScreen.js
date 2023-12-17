import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const EspaceScreen = () => {
  return (
    <>
    <div className='monEspace'>
      Mon Espace
    </div>
    <div className="espace">
    <LinkContainer to="/emploiTemps">
      <div className="btn1">
        <Button style={{ width: '200px', height: '100px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Consulter mon emploi du temps</Button>
      </div>
    </LinkContainer>
    <LinkContainer to="/cours">
      <div className="btn2">
      <Button style={{ width: '200px', height: '100px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Déposer un cours</Button>
      </div>
    </LinkContainer>
    <LinkContainer to="/message">
      <div className="btn3">
        <Button style={{ width: '200px', height: '100px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Boite à message</Button>
      </div>
    </LinkContainer>
  </div>
  </>
  )
}

export default EspaceScreen
