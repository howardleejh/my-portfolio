import { Row, Col } from 'antd'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import img1 from '../../Assets/GA.png'
import img2 from '../../Assets/Centaur-md.png'
import img3 from '../../Assets/Igloo.png'
import img4 from '../../Assets/Facebook.png'

import './ExperienceComponent.scss'

const ExperienceComponent = () => {
  return (
    <div className='exp-component'>
      <h1 id='exp-title'>Experience</h1>
      <Row align='middle' justify='center'>
        <Col className='exp-item'>
          <ExperienceCard
            company='Meta | Facebook'
            jobTitle='Events Operations Technician'
            fromTo='December 2017 - October 2021'
            jobDesc='Working at Facebook under Monolith Technologies was probably the most inspiring time of my career. It was what inspired me to pursue Software Engineering and step out to the next phase of my life, No regrets at all.'
            jobDescLong={
              <>
                <p>
                  My experience here allowed me to gain highly proficient
                  knowledge of various AV equipment workflows and integrations,
                  able to design and set up events with custom graphics and
                  visuals, cater to audio requirements, lighting design, signal
                  routing to multiple sources and locations and implement full
                  show control on various AV aspects with the Bitfocus Companion
                  and the Elgato Streamdeck. It also gave me experience with
                  Live streaming and cross-posting on multiple Facebook
                  platforms including cloud streaming services and various
                  hardware and software encoders. My most notable achievement at
                  Facebook was developing a documentation on the utilites and
                  workflows of the Elgato Streamdeck and Bitfocus Companion
                  which is now being utilized by various teams across Meta
                  globally. I also participated in two official openings of the
                  Meta Offices, both in Singapore and Hong Kong as part of the
                  event operations team working with key appointment holders
                  with an audience consisting of external media and government
                  officials amongst our audiences.
                </p>
                <ul>
                  <li>
                    Authored documentation of Elgato Streamdeck and Bitfocus
                    Companion and shared with the wider teams at Meta
                  </li>
                  <li>
                    Participated in 2 official Meta office openings as part of
                    the event operations team catering to an audience of
                    external media and government officials amongst our
                    audiences
                  </li>
                  <li>
                    Worked with the wider operations teams to assist with online
                    live streaming on multiple platforms such as Facebook and
                    Instagram
                  </li>
                  <li>
                    Worked with the VSET team to onboard and stress test on
                    multiple hardware and software technologies during the
                    commissioning of the new Meta offices in Singapore and Hong
                    Kong
                  </li>
                </ul>
              </>
            }
            frontStyle={{
              background: `#ffffff url(${img4}) no-repeat center`,
              backgroundSize: '10em',
            }}
            backStyle={{
              background: `linear-gradient(25deg, rgba(0,99,223,1) 0%, rgba(2,129,251,1) 52%, rgba(104,148,242,1) 100%)`,
            }}
          />
        </Col>
        <Col className='exp-item'>
          <ExperienceCard
            company='General Assembly Singapore'
            jobTitle='Student'
            fromTo='March 2021 - September 2021'
            jobDesc='I was a part of class SEIF-5 at General Assembly for 6 months while still working full time at Facebook. I learnt so much about software engineering and made a lot of great contacts along the way.'
            jobDescLong={
              <>
                <p>
                  During the entirety of my course, I've developed a passion for
                  blockchain technology, DEFI, Crypto, NFTs and Javascript 3D
                  Libraries. I learnt about the basics of becoming a software
                  developer, learnt to use various tools and libraries to assist
                  with web development. My main Tech Stack would be the MERN
                  stack, comprising of MongoDB, Express JS. React JS and Node
                  JS. I also had experiences with Python and basics of
                  frameworks such as Django and Flask. I developed a total of 4
                  projects:
                </p>
                <ul>
                  <li>
                    Chess3d - A classic game of chess with 3D implementations
                  </li>
                  <li>Bazaar Malam - My first Mock NFT Marketplace</li>
                  <li>
                    TeamUp! - A group project to create and manage Events, we
                    took on the wedding scenario as an example in our app.
                  </li>
                  <li>
                    Gacha10 - An online platform that allows for users to create
                    shops to sell their digital assets within the Ethereum
                    Blockchain!
                  </li>
                </ul>
              </>
            }
            frontStyle={{
              background: `#ffffff url(${img1}) no-repeat center`,
              backgroundSize: '10em',
            }}
            backStyle={{
              background: `linear-gradient(25deg, rgba(175,9,18,1) 0%, rgba(226,29,39,1) 22%, rgba(224,139,143,1) 100%)`,
            }}
          />
        </Col>
        <Col className='exp-item'>
          <ExperienceCard
            company='Centaur Finance'
            jobTitle='Full Stack Blockchain Developer'
            fromTo='October 2021 - April 2022'
            jobDesc='I joined Centaur Finance when I graduated from General Assembly, and immediately got into learning more about Blockchain and DEFI. With the amazing support from my CTO, I managed Solidity and writing Smart Contracts while working on NFT projects on the side.'
            jobDescLong={
              <>
                <p>
                  At Centaur Finance, I learnt so much about the Blockchain
                  Technologies, understanding Decentralized Finance and learning
                  how to write Smart Contracts with Solidity. I was taught to
                  study multiple EIP standards and to utilize Open Zeppelin for
                  all of my smart contract creations. I worked with 3 main tools
                  while developing for the blockchain, mainly Hardhat, Ethers JS
                  and Remix IDE. I am now able to create smart contracts for
                  different deployments, using the ERC standards to develop
                  tokens for NFT projects, creating automated Escrow Contracts
                  and creating simple gamification utilities such as lotteries.
                  I am also able to connect to providers such as Metamask,
                  Infura and Alchemy when interacting with my deployed smart
                  contracts, creating Interfaces with React JS to complete the
                  entire experience of a DAPP. I utilize IPFS for decentralized
                  storage and pinning services such as Pinata to retrieve
                  required data, most evidently used when developing NFT
                  projects. For more information, please refer to my LinkedIn
                  and Github links provided in my web page.
                </p>
                <ul>
                  <li>
                    Developing experience with both mainnets and testnets in
                    Ethereum
                  </li>
                  <li>Developing with Open Zeppelin</li>
                  <li>
                    Using ERC20, ERC721 and ERC1155 standards when developing
                    specific tokens for projects
                  </li>
                  <li>Using Tenderly to monitor transactions and debugging</li>
                  <li>
                    Able to connect Metamask and providers to Front End apps for
                    blockchain interaction
                  </li>
                  <li>
                    Experience with using IPFS and Pinata pinning services
                  </li>
                </ul>
              </>
            }
            frontStyle={{
              background: `#ffffff url(${img2}) no-repeat center`,
              backgroundSize: '10em',
            }}
            backStyle={{
              background: `linear-gradient(25deg, rgba(37,129,37,1) 25%, rgba(51,204,51,1) 81%, rgba(116,221,116,1) 100%)`,
            }}
          />
        </Col>
        <Col className='exp-item'>
          <ExperienceCard
            company='Igloo Insure'
            jobTitle='Blockchain Developer'
            fromTo={
              <>
                April 2022 - <strong>PRESENT</strong>
              </>
            }
            jobDesc='Currently at Igloo Insure as a Blockchain Developer. I work to incorporate blockchain technologies to the various insurance policies that will provide decentralization, transparency and confidence for our users.'
            jobDescLong={
              <>
                <p>
                  A Blockchain Developer at Igloo Insure currently based in
                  Singapore. My most notable project with Igloo Insure was to
                  develop and deploy a set of solutions on the blockchain based
                  off multiple smart contracts, that has various interactions
                  with the multiple insurance policies. We utilized both
                  off-chain and on-chain data to facilitate monetary exchanges
                  between the various stakeholders. We also used tokenomics,
                  algorithms and oracles to retrieve data and automate this
                  process while providing transparency and decentralization to
                  boost our users' confidence as we continue to strive to become
                  the most simple, painless and honest insurance for all. The
                  project is still in development phase but we've successfully
                  completed and presented to our potential clients on our
                  proof-of-concept.
                </p>
                <ul>
                  <li>
                    Developed multiple smart contracts that included ERC20
                    tokens, custom libraries and using Oracles to fulfill
                    off-chain data retrievals
                  </li>
                  <li>
                    Experimented with multiple Chainlink products including
                    Oracles, Oracle Nodes, VRF and Keepers to assist with
                    automating processes on the blockchain
                  </li>
                  <li>
                    Road map to implement and expand on said technologies along
                    with the Backend development teams to create a fully
                    cohesive DAPP for our users
                  </li>
                </ul>
              </>
            }
            frontStyle={{
              background: `#ffffff url(${img3}) no-repeat center`,
              backgroundSize: '15em',
            }}
            backStyle={{
              background: `linear-gradient(25deg, rgba(108,108,254,1) 18%, rgba(254,103,81,1) 89%)`,
            }}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ExperienceComponent
