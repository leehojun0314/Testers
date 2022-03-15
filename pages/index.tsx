import type { NextPage } from "next";
import styled from "styled-components";
import Container from "../components/Container";
import Image from "next/image";
import Layout from "../components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
const Datas: Array<object> = [{ hello: "world" }, { hello: "world" }];
const Home: NextPage = () => {
	return (
		<Layout pageTitle="Main">
			<CarouselContainer>
				<Container>
					<Carousel
						showStatus={false}
						showThumbs={false}
						dynamicHeight={true}
						autoPlay={true}
						infiniteLoop={true}
						showArrows={false}
					>
						{Datas.map((el, idx) => {
							return (
								<CarouselElement key={idx}>
									<div className="left">
										<div className="author">Martin</div>
										<div className="title">리액트 개발자 되기</div>
										<button>응시하기</button>
									</div>

									<div className="rightImage">
										<Image
											key={idx}
											src="/images/man1.png"
											alt="logo"
											width={400}
											height={300}
										/>
									</div>
								</CarouselElement>
							);
						})}
					</Carousel>
				</Container>
			</CarouselContainer>
			<RecommendContainer>
				<Container>
					<div className="left">this is left</div>
					<div className="right">this is right</div>
				</Container>
			</RecommendContainer>
		</Layout>
	);
};

export default Home;

const CarouselContainer = styled.div`
	padding: 12px;
	background-color: ${({ theme }) => theme.blue};
	padding-bottom: 24px;
`;
const CarouselElement = styled.div`
	display: flex;
	flex-direction: row;
	width: 1080px;
	justify-content: space-around;
	.left {
		height: 300px;
		float: left;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 50px;
	}
	.rightImage {
		float: right;
		position: relative;
		right: 0px;
	}
	button {
		width: 132px;
		height: 44px;
		margin-top: 36px;
		border-radius: 25px;
		background-color: rgba(0, 0, 0, 0);
		border: 2px solid ${({ theme }) => theme.white};
		color: ${({ theme }) => theme.white};
		font-weight: 100;
	}
`;
const RecommendContainer = styled.div`
	.left {
		width: 300px;
		height: 700px;
		background-color: blue;
		box-shadow: 15px 15px 5px grey;
	}
	.right {
		width: 300px;
		height: 700px;
		background-color: orange;
	}
	${Container} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 24px;
	}
`;
