/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styled, { keyframes } from "styled-components";
// import Container from "../layouts/Container";
import Image from "next/image";
import Layout from "../layouts/Layout";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Button, Carousel, Container } from "react-bootstrap";
import React from "react";
import Recommender from "../components/home/Recommender";
import fakeData from "../constants";
const Datas: Array<object> = [{ hello: "world" }, { hello: "world" }];
const Home: NextPage = () => {
	return (
		<Layout pageTitle="Main">
			<Container>
				<Carousel>
					{Datas.map((el, idx) => {
						return (
							<Carousel.Item key={idx}>
								<img
									src="/images/man1.png"
									alt="logo"
									width={"100%"}
									height={300}
									// layout="fill"
								/>
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
									<Button variant="dog">응시하기</Button>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Container>

			<Container>
				<div className="left">
					<Recommender title={"일간 인기 테스트"} datas={fakeData} />
				</div>
				<div className="right">
					<Recommender title={"주간 인기 테스트"} datas={fakeData} />
				</div>
			</Container>
		</Layout>
	);
};

export default Home;

// const Button = styled.button`
// 	width: 132px;
// 	height: 44px;
// 	border-radius: 25px;
// 	background-color: rgba(0, 0, 0, 0);
// 	border: 2px solid ${({ theme }) => theme.white};
// 	color: ${({ theme }) => theme.white};
// 	font-weight: 100;
// 	transition-property: background-color, color;
// 	transition-duration: 0.2s;
// 	transition-timing-function: ease-in-out;
// `;
