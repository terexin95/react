import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider'

const Repair = styled.div`
		color: #fff;
		font-weight: 700;
		line-height: 50px;
		font-size: 40px;
		text-shadow: 4px 4px 4px #333;

		span{
			display: block;
			line-height: 24px;
			font-size: 26px;
			text-shadow: 4px 4px 4px #333;
		}
`

const LightText = styled.div`
		color: #fff;
		font-size: 18px;
		font-weight: 300;
		line-height: 28px;
		margin-top: 54px;
`

const CallBtn = styled.button`
		color: #fff;
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
		margin-top: 32px;
		border-radius: 30px;
		background-color: #ffa14b;
		padding: 20px 35px;
		border: none;
		box-shadow: 2px 2px 2px #333;
		border: 4px solid transparent;

		&:hover{
			background-color: transparent;
			border: 4px solid #ffa14b;
		}
`

class Main extends React.Component {
	render(){
		return(
			<Row>

				<Col lg={5}>
				<Repair>
					Качественный ремонт
					<span> iphone за 35 минут и гарантия 1 год </span>
				</Repair>

				<LightText>
					Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!
				</LightText>
				<CallBtn>
					Отпраить заявку!
				</CallBtn>
				</Col>

				<Col lg={6} lgOffset={1}>

					<Slider />

				</Col>

			</Row>
		);
	}
}

export default Main