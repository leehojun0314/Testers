import React from "react";
import styled from "styled-components";
import RecommendModule from "./RecommendModule";
interface RecommenderProps {
	title: string;
	datas: {
		title: string;
		grade: number;
		imgUrl: string;
		questionNum: number;
	}[];
}
const Recommender: React.FC<RecommenderProps> = ({ title, datas }) => {
	console.log("datas: ", datas);
	return (
		<StyledRecommender>
			<h1>{title}</h1>
			<StyledDiv>
				{datas.map((el, idx) => {
					return (
						<RecommendModule
							key={idx}
							title={el.title}
							grade={el.grade}
							imgUrl={el.imgUrl}
							questionNum={el.questionNum}
						/>
					);
				})}
			</StyledDiv>
		</StyledRecommender>
	);
};
export default Recommender;
const StyledRecommender = styled.div`
	h1 {
		font-size: 2rem;
		background-color: #3993f3;
		border-radius: 15px;
		text-align: center;
		color: #fdfdfd;
	}
`;
const StyledDiv = styled.div`
	border-radius: 12px;
	margin-top: 10px;
`
