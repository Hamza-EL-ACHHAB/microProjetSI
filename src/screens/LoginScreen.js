import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import FormContainer from '../components/FormContainer'
import {Form ,Button, Row ,Col} from 'react-bootstrap'




const LoginScreen = () => {
    const navigate=useNavigate()


    const submitHandler=(e)=>{
        e.preventDefault()
        navigate('/espace')
    }
    
  return (
    <FormContainer >
        <Form onSubmit={submitHandler} className='mt-5'>
            <Form.Group controlId='IDENTIFIANT' >
                <Form.Label  style={{ color: 'black' }}>IDENTIFIANT</Form.Label>
                <Form.Control  placeholder='Entrer IDENTIFIANT'> 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password' className='mt-3'>
                <Form.Label style={{ color: 'black' }}>Mot De Passe </Form.Label>
                <Form.Control type='password' placeholder='Entrer mot de passe'> 
                </Form.Control>
            </Form.Group>
            <Row  className="justify-content-center">
            <Button type='submit' variant='primary' className='mt-3' style={{ width: '150px',color:'black' }}>Se connecter</Button>
            </Row>
        </Form>
        <Row className='py-3'>
          <Col>Mot de passe oublié</Col>
          <Col className='text-end'>  1ère Connexion</Col>
        </Row>
        <Row className="d-flex justify-content-center mt-3">Créer un espace vacataire</Row>
    </FormContainer>
  )
}

export default LoginScreen
