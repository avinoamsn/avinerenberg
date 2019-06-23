import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
// import Menu from '../views/Menu' // TODO

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        {/* <Menu /> */}

        <BigTitle>
          Hello, <br /> I'm Avi.
        </BigTitle>

        <Subtitle>
          I build appealing and effective <br /> user experiences.
        </Subtitle>
      </Hero>

      <Projects offset={1}>
        {/* <Menu /> */}

        <Title>Experience</Title>

        <ProjectsWrapper>
          <ProjectCard
            title="Bonzai"
            link="http://ilovebonzai.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            I helped develop a React + Redux + Cordova social media application, including an external sharing feature
            powered by Node and Open Graph Protocol.
          </ProjectCard>
          <ProjectCard
            title="Last Call"
            link="https://last-call-82705.web.app/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I prototyped an Angular + Ionic + Firebase food ordering application, which lead to a partnership with
            Beefsteak. The prototype runs atop a functional Cloud Firestore DB.
          </ProjectCard>
          <ProjectCard
            title="Institute for Patient Access"
            link="https://instituteforpatientaccess.org/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            I developed a number of custom WordPress themes for Institute for Patient Access on a contractual basis.
          </ProjectCard>
          <ProjectCard
            title="html5blank Custom Fork"
            link="https://github.com/avinoamsn/html5blank-custom"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            I launched my own fork of the html5blank WordPress boilerplate for developing custom WordPress themes.
          </ProjectCard>
          <ProjectCard
            title="Hackital"
            link="http://hackital.io/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            I cofounded an annual international student hackathon at my alma mater in Foggy Bottom, developed responsive
            MailChimp email marketing campaigns that boosted pre-event registration by nearly 50%, and recruited
            sponsors such as Raytheon, Facebook, and Consensys.
          </ProjectCard>
          <ProjectCard
            title="Budbot"
            link="http://www.budbot.co/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I prototyped a textbot interface using Python + Plivo, and designed the brand and website.
          </ProjectCard>
          <ProjectCard
            title="Inkoo"
            link="http://new.inkoo.es/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            I designed, developed and maintained Inkoo's WordPress website.
          </ProjectCard>
          <ProjectCard
            title="Digital Media Academy"
            link="https://github.com/avinoamsn/html5blank-custom"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            I organized and lead several two- and three-week coding classes, where I built games in Java with high
            school students and designed Minecraft mods with elementary- and middle school students.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>

      <About offset={3}>
        <Title>About</Title>

        <AboutHero>
          <Avatar src={avatar} alt="Avi Nerenberg" />
          <AboutSub>One day I'll write a screenplay.</AboutSub>
        </AboutHero>

        <AboutDesc>
          But until then, I'll be building stuff. Maybe I'll build things that will change the world. Hopefully I'll
          build things that are easy and fun to use. <br />
          <br />I was once told that "all coding is just string manipulation. Is that true? I don't know. But it sounds
          like sage wisdom when you say it. All coding is just string manipulation.
        </AboutDesc>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:hello@avinerenberg.com">hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/avinerenberg">Twitter</a> &{' '}
            <a href="https://www.linkedin.com/in/avinoam-nerenberg/">LinkedIn</a>
          </ContactText>
        </Inner>

        <Footer>
          &copy; 2019 by Avi Nerenberg. <a href="https://github.com/avinoamsn/avinerenberg">Github Repository</a>.
          Original theme from <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
