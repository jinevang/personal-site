import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { theme } from "styles/BasicTheme";

const StyledBox = styled(Box)<{backgroundColor?: string, image?: boolean, height?: string}>(
	(props) => ({
		backgroundColor: props.backgroundColor ?? 'white',
		borderRadius: '5px',
		minHeight: '20vh',
		height: props.height ?? '20vh',
		padding: !props.image ? '1ch': '',
		width: '25%',
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		fontFamily: 'inherit',
		textAlign: 'center',
		alignItems: 'center',
		
		'caption': {
			marginTop: '0.5ch',
			fontSize: '14px'
		},

		'& img': {
			width: '100%',
			height: '100%',
			borderRadius: '5px',
		},

		[theme.breakpoints.down('md')]: {
			width: '90%',
			height: 'fit-content',
		}
	})

);


const CustomBox = (props: { children: React.ReactNode, backgroundColor?: string, image?: boolean, height?: string }) => {
	return <StyledBox backgroundColor={props.backgroundColor} image={props.image} height={props.height}>{props.children}</StyledBox>
}

export default CustomBox;