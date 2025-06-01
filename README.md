CPL Fantasy League App


The Idea:

The CPL Fantasy League app is a sports fantasy platform built around the Canadian Premier League (CPL). It takes inspiration from FIFA Ultimate Team (FUT), offering a familiar pack-based fantasy experience where users build their own squads by purchasing randomized player packs. These packs unlock real CPL players that users can collect and organize into weekly lineups. 

What makes this project unique is the integration of WonderChain’s SDK. Through WonderChain’s SDK, the app enables users to "purchase" player packs using cryptocurrency. This makes it a forward-thinking platform for sports and fantasy enthusiasts interested in blockchain-based ownership and payments, without requiring users to manage complex Web3 backend setups themselves. The app aims to introduce sports fans without crypto knowledge to blockchain-based transactions and digital collectibles in a user-friendly, mobile-first experience.


Implementation:
The app is structured around a clean, interactive home screen leading to several core sections. React-native and Native-wind were used to create this demo:
Featured Players of the Week: (Planned) Showcase top-performing CPL players.


Team of the Week: (Planned) Visual leaderboard displaying the best fantasy squads.


Highest Rated Players: (Planned) Player rankings based on real match data.


Player Packs: (Simulated) Users can purchase simulated player packs by position — Goalkeepers, Defenders, Midfielders, or Attackers. A confirmation modal appears before purchase, simulating a transaction, and then retrieves six randomized players using live data from API-FOOTBALL.


Leagues System: (Simulated) Users will be able to create private leagues and compete against friends, comparing total fantasy points week to week based on their collected players’ real-world performances.


Wallet Access: (Not implemented yet) Intended feature to display a user's simulated wallet address as well as process transactions via WonderChain SDK.


All player data — including names, photos, and performance info — is sourced through API-FOOTBALL, covering real-time CPL data such as fixtures, results, and player stats.


What's Next?
The next milestones for the project include:
Implement Remaining Features: Complete the Team Of The Week, Highest Rated Players, and Featured Players sections.


Integrate WonderChain SDK: Resolve current technical challenges to connect the WonderChain SDK for generating simulated wallet addresses and handling in-app simulated payments.


UI/UX Testing: Refine navigation, consistency, and performance for a smoother mobile experience.


Build an Authentication System: Add lightweight login functionality to allow users to save their players, track purchases, and manage league participation.


Enhance Pack Experience: Expand pack interactions with animations, rarity tiers, and trade options.


Though still a work-in-progress demo, the CPL Fantasy League app successfully demonstrates the core pack-opening mechanic using live CPL data and sets a clear, structured path toward a complete fantasy league platform.
