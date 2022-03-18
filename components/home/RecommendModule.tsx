import Image from "next/image";
import React from "react";
import styled from "styled-components";
interface RecommendModuleProps {
	title: string;
	grade: number;
	questionNum: number;
	imgUrl: string;
}
const RecommendModule: React.FC<RecommendModuleProps> = ({
	title,
	grade,
	questionNum,
	imgUrl,
}) => {
	console.log("title: ", title);
	console.log("grade: ", grade);
	console.log("questionNum : ", questionNum);
	console.log("imgUrl: ", imgUrl);
	return (
		<RecommendModuleContainer>
			<ImageContainer>
				<Image src={imgUrl} alt="recommendLogo" width="100" height={100} />
			</ImageContainer>
			<Title>{title}</Title>
			<QuestionNum>총 {questionNum}문항</QuestionNum>
			<Grade>{grade}</Grade>
		</RecommendModuleContainer>
	);
};
export default RecommendModule;
const RecommendModuleContainer = styled.div`
	&:after {
		content: "";
		display: block;
		clear: both;
	}
	background-color: green;
`;
const ImageContainer = styled.div`
	float: left;
`;
const Title = styled.div``;
const QuestionNum = styled.div``;
const Grade = styled.div``;
