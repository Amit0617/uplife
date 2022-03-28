
const { createAlchemyWeb3 } =  "@alch/alchemy-web3";

const apiKey = `${apiKey}`;

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
);

// The wallet address we want to query for NFTs:
const ownerAddr = `${get_from_search_bar}`;
const nfts = await web3.alchemy.getNfts({
  owner: ownerAddr
})

// Print owner's wallet address:
console.log("fetching NFTs for address:", ownerAddr);
console.log("...");

// Print total NFT count returned in the response:
console.log("number of NFTs found:", nfts.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nfts.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.id.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a crypto coven NFT...");
const response = await web3.alchemy.getNftMetadata({
  contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",
  tokenId: "1590"
})

// Uncomment this line to see the full api response:
// console.log(metadata);

// Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.id.tokenMetadata.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.metadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("===");

//count the no. of NFTs

//redirecting to the specific page accordingly
