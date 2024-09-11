import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)<{backgroundColor?: string, image?: boolean, height?: string}>(
	(props) => ({
		backgroundColor: props.backgroundColor ?? 'white',
		borderRadius: '5px',
		minHeight: '20vh',
		height: props.height ?? '20vh',
		padding: !props.image ? '1ch': '',
		width: '25%',
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		
		'& img': {
			width: '25vw',
			borderRadius: '5px',
		}
	})
);


const CustomBox = (props: { children: React.ReactNode, backgroundColor?: string, image?: boolean, height?: string }) => {
	return <StyledBox backgroundColor={props.backgroundColor} image={props.image} height={props.height}>{props.children}</StyledBox>
}

export default CustomBox;