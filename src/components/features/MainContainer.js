import React from 'react'
import { Tab, Nav,  Container, Row, Col } from 'react-bootstrap';
import MapContainer from '../features/MapContainer';
import Countries from '../features/Countries';
import SafetyTips from '../features/SafetyTips';
import LocalData from './LocalData';

function MainContainer({loading,countries}) {
    return (
        <>
        <Container fluid>
                <Row>
                <Col sm={3}>
                </Col>
                <Col sm={20} style={{ marginTop: '70px' }}>
                    <Tab.Container defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Nav fill variant='pills' defaultActiveKey='first'>
                                <Nav.Item>
                                <Nav.Link className='btn-info' eventKey='first'>
                                    Covid-19 Map
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ marginLeft: '5px'}}>
                                <Nav.Link eventKey='second' className='btn-info'>
                                    All Countries
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={3}></Col>
                        </Row>
                        <Row>
                            <Col  sm={10}>
                            <Tab.Content style={{ marginLeft: '5px',marginRight: '10px'}}>
                                <Tab.Pane eventKey='first'>
                                <MapContainer />

                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <Row>
                                    <Col>
                                    <Countries loading={loading} countriesArr={countries}/>
                                    </Col>
                                    <Col>
                                        <SafetyTips />
                                    </Col>
                                </Row>

                                </Tab.Pane>
                            </Tab.Content>
                            
                            </Col>
                        </Row>
                        </Tab.Container>
                    </Col>
                    </Row>
                    <Row>
                    <Col></Col>
                    </Row>
                </Container>
                <LocalData />
                </>
    )
}

export default MainContainer
