import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime = styled.div`
	color: #464646;
	font-size: 12px;
	font-weight: 300;
	line-height: 22px;
	
	span{
		display: block;
		font-weight: 700;
		font-size: 21px;
	}
`

const CallButtoon = styled.button`
	width: 100%;
	height: 48px;
	background-color: #3fc7db;
	border-radius: 30px;
	font-size 14px;
	font-weight: 400;
	line-height: 22px;
	border: none;
	color: #fff;

	&:hover{
		color: #333;
		border: 2px solid #3fc7db;
		background-color: transparent;
		transition: 0.5s ease
	}
`

class Adress extends React.Component {
	render(){
		return(
				<span> {this.props.addr} </span>
			)
	}
}

class Phone extends React.Component {
	render(){
		return(
				<span> {this.props.ph} </span>
			)
	}
}

class Menu extends React.Component {
	render(){
		return(
			<Row>
				<Col lg={3}>
					<Repair>
						Ремонт айфонов в сервисном центре и на выезде
					</Repair>
				</Col>
				<Col lg={3} lgOffset={1}>
					<WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Adress addr="Ленинская, 301" />
					</WorkTime>
				</Col>
				<Col lg={3}>
					<WorkTime>Звонки принимаются 24 часа
						<Phone ph="8 (846) 922 55 44 " />
					</WorkTime>
				</Col>
				<Col lg={2}>
					<CallButtoon>Заказать звонок</CallButtoon>
				</Col>
			</Row>
		);
	}
}

export default Menu