import React from 'react'
import styled from 'styled-components'

let Button = props => {

	let StyledButton = styled.button`
	margin-top:${props.marginTop?props.marginTop:0};
	padding:10px;
	border-radius: ${props.borderAll?'20px':'0 20px 20px 0'};
	background-color: ${props.main?'white':'rgb(17,45,70)'};
	color:${props.main?'rgb(17,45,70)':'white'};
	border: solid 1px ${props.main?'rgb(17,45,70)':'white'};
	letter-spacing: 2px;
	font-weight: 500;
	width:${props.width};
	transition: 0.5s;
	cursor: pointer;
	:hover{
		color:${props.main?'white':'rgb(17,45,70)'};
		background: ${props.main?'rgb(17,45,70)':'white'};
	}
	`

	return(<StyledButton>{props.text}</StyledButton>)
}

export default Button