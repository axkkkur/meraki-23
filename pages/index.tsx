import React from "react";
import styles from "@/styles/pages/Home.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Events, Hero } from "@/components/home";
import sampleEvents from "@/data/events.json";
import { IEvent } from "@/types/Event";

interface HomePageProps {
	events: IEvent[];
}

const classes = stylesConfig(styles, "home");

const HomePage: React.FC<HomePageProps> = ({ events }) => {
	return (
		<main className={classes("")}>
			<Hero />
			<Events events={events} />
		</main>
	);
};

export default HomePage;

export const getServerSideProps = async () => {
	try {
		return {
			props: {
				events: sampleEvents,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				events: [],
			},
		};
	}
};
