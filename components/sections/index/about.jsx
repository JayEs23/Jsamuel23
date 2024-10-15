// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top-level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am an experienced software engineer and technical architect, leading teams and building innovative systems across various industries."
				/>
				<section className={about.content}>
					<div className={about.image} style={{ filter: 'grayscale(100%)' }}>
						<Image src="/img/LaughingGuy.jpg" layout='fill' alt="Team photo"/>
						{/* <Image src="/img/team-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy}>
						<CopyBlock 
							title="Skills that power innovation"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'brain-circuit' ]}
							copy="Beyond my deep technical expertise, I excel in leadership, project management, and architecture design. As a technical lead and architect for numerous projects, including complex platforms like Reasns and Fidemit, I have built everything from scalable APIs to secure escrow systems. Outside of work, I enjoy mentoring teams and fostering innovation within development environments."
						/>
						<BadgesBlock 
							title="Research and Architecture Planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="blueprint"
							copy="My favorite aspect of software engineering is designing system architectures. From CI/CD pipelines to API development and database design, I focus on creating robust, scalable, and efficient systems that meet business needs."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'code-branch', 		name: 'API Development', 		type: 'fad' },
	{ key: 'database', 			name: 'Database Design', 		type: 'fad' },
	{ key: 'project-diagram', 	name: 'System Architecture', 	type: 'fad' },
	{ key: 'server', 			name: 'Cloud Infrastructure', 	type: 'far' },
	{ key: 'cogs', 				name: 'CI/CD Pipelines', 		type: 'fad' },
	{ key: 'user-cog', 			name: 'Team Leadership', 		type: 'fad' },
]
