# Decentralized Voting Dapp with Next.js, TypeScript, Tailwind CSS

## Technology

This uses:

- Metamask
- Hardhat
- Infuria
- ReactJs
- Tailwind CSS
- Solidity
- EthersJs
- Faucet

## Running the demo

To run the demo follow these steps:

1. Clone the project with the code below.

   ```sh

   # Make sure you have the above prerequisites installed already!
   git clone https://github.com/Daltonic/dappVote PROJECT_NAME
   cd PROJECT_NAME # Navigate to the new folder.
   yarn install # Installs all the dependencies.
   ```

2. Update the `.env` file with the following details.
   ```sh
    NEXT_APP_RPC_URL=<http://127.0.0.1:8545>
   ```
3. Run the app using the following commands.
   ```sh
   yarn install
   yarn hardhat node
   yarn hardhat run scripts/deploy.js
   ```
4. On another terminal, run `yarn start` to launch the project on the browser.
5. Add some hardhat accounts, connect your wallet and interact with the app.
   <br/>
