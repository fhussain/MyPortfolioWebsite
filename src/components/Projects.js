// Import Assets
import dex from '../assets/dex.png';
import portfolio from '../assets/portfolio.png';
import progress from '../assets/underProcess.png';

import { useState } from 'react'; // Import useState for managing state

const Projects = () => {
    const [expanded, setExpanded] = useState(null); // State to track which project is expanded

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index); // Toggle the expanded state
    };

    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">
                {/* Project 1 */}
                <div className="projects__card">
                    <h3>Dex - Decentralized Exchange (DEX)</h3>
                    <img src={dex} alt="Dex" />
                    <p className={`description ${expanded === 0 ? 'expanded' : ''}`}>
                        Developed key functionalities for a decentralized exchange (DEX) including "Create Market Order" and "Create Limit Orders".
                        Implemented smart contract logic using Solidity and tested contract behavior using the Chai assertion library to ensure correctness and reliability.
                        Leveraged the Truffle framework for smart contract deployment, testing, and debugging, ensuring secure and efficient transaction handling on the Ethereum blockchain.
                        Part of a larger project as part of a course offered by Moralis, designed to improve skills in smart contract development and decentralized finance (DeFi) applications.
                    </p>
                    <a href="https://github.com/fhussain/DexProject_MoralisAcademy/blob/master/contracts/dex.sol" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fhussain/DexProject_MoralisAcademy/blob/master/contracts/dex.sol" target="_blank" className="button">Code</a>
                    {/* Read more toggle */}
                    <button className="read-more" onClick={() => handleToggle(0)}>
                        {expanded === 0 ? 'Read Less' : 'Read More...'}
                    </button>
                </div>

                {/* Project 2 */}
                <div className="projects__card">
                    <h3>Portfolio Website (Web 3.0)</h3>
                    <img src={portfolio} alt="Portfolio website" />
                    <p className={`description ${expanded === 1 ? 'expanded' : ''}`}>
                        Built a personal portfolio website integrating Web 3.0 functionality using React and Web3.js, showcasing a range of blockchain projects and smart contract development work.
                        Utilized Dapp University tutorials to incorporate decentralized features and interactive elements, providing a seamless user experience and connecting to Ethereum for blockchain interactions.
                        Designed with a responsive layout to ensure compatibility across different devices, allowing for smooth user interaction and an intuitive interface.
                    </p>
                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fhussain/MyPortfolioWebsite/tree/master" target="_blank" className="button">Code</a>
                    {/* Read more toggle */}
                    <button className="read-more" onClick={() => handleToggle(1)}>
                        {expanded === 1 ? 'Read Less' : 'Read More...'}
                    </button>
                </div>

                {/* Project 3 */}
                <div className="projects__card">
                    <h3>Smart Contract Lottery</h3>
                    <img src={progress} alt="Lottery Smart Contract" />
                    <p className={`description ${expanded === 2 ? 'expanded' : ''}`}>
                        Developed a decentralized lottery smart contract using the Foundry framework, enabling transparent and secure lottery draws on the Ethereum blockchain.
                        Implemented essential lottery functions such as ticket purchasing, random number generation, and prize distribution, ensuring fairness and immutability of contract logic.
                        Built using the Foundry framework for efficient testing and deployment, providing high-quality code with optimized gas usage and robust security features.
                        GitHub Repository for source code and further details.
                    </p>
                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                    {/* Read more toggle */}
                    <button className="read-more" onClick={() => handleToggle(2)}>
                        {expanded === 2 ? 'Read Less' : 'Read More...'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
