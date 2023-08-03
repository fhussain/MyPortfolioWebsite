// Import Assets
import dex from '../assets/dex.png';
import portfolio from '../assets/portfolio.png';
import progress from '../assets/underProcess.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Dex</h3>
                    <img src={dex} alt="Dex" />
                    <p>This a solidity project from the course offered on moralis website.
                        I have built some functions like "Create market order" and "create limit orders"
                        I have also written test against them using chai assertion library
                    </p>

                    <a href="https://github.com/fhussain/DexProject_MoralisAcademy/blob/master/contracts/dex.sol" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fhussain/DexProject_MoralisAcademy/blob/master/contracts/dex.sol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Portfolio</h3>
                    <img src={portfolio} alt="Portfolio website" />
                    <p>Built my web 3.0 react portfolio website with help from Dapp university youtube channel.
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fhussain/MyPortfolioWebsite/tree/master" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Fake drug detector</h3>
                    <img src={progress} alt="under progress" />
                    <p>This fake drug detector will be web 3.0 application.
                        we will be using solidity in the backend and react on the front end.
                        It will be a full web application. We will talk to the blockchain using
                        ethereum web3 providers. 
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;