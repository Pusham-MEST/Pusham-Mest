import React from "react";
import PropTypes from "prop-types";

const features = [
	{
		title: "Set Up An Account",
		description:
			"Forth form seasons land life whales bring every First man light said greater every given seas called grass Own fourth.",
		image: "https://cdn.easyfrontend.com/pictures/featured/featured_10_1.png",
	},
	{
		title: "Enter Your Email",
		description:
			"Were stars seas blessed behold to seas in image morning creature day their fruitful herb Divide face day every first.",
		image: "https://cdn.easyfrontend.com/pictures/featured/featured_10_2.png",
	},
	{
		title: "Allow Notifications",
		description:
			"Dominion dry make shall is is greater fish moving set seas open man which. Green make appear moveth fruit likeness.",
		image: "https://cdn.easyfrontend.com/pictures/featured/featured_13_3.png",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="bg-blue-50 dark:bg-[#1E2735] rounded-[20px] relative p-6 lg:p-12">
			<img
				src={feature.image}
				alt=""
				className="h-auto max-w-full rounded-xl mx-auto mb-6"
			/>
			<h4 className="text-2xl leading-6 font-bold mb-4">{feature.title}</h4>
			<p className="opacity-70">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature13 = () => {
	return (
		<section className="ezy__featured13 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 mb-12">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-14 text-center">
						<h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
							How to Set Up An Alert
						</h2>
						<p className="text-lg leading-6 mb-6">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-6 text-center">
					{features.map((feature, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Feature13