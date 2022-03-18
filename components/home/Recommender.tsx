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
			<div>
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
			</div>
		</StyledRecommender>
	);
};
export default Recommender;
const StyledRecommender = styled.div`
	h1 {
		font-size: 2rem;
	}
`;
