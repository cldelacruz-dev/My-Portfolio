const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// Helper to fetch HTTPS JSON data
function fetchHttpsJson(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      console.log(`statusCode: ${res.statusCode}`);

      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode === 200) resolve(data);
        else reject(new Error(`Request failed with status ${res.statusCode}`));
      });
    });

    req.on("error", reject);

    if (postData) req.write(postData);
    req.end();
  });
}

async function fetchGitHub() {
  if (USE_GITHUB_DATA !== "true") return;

  if (!GITHUB_USERNAME) {
    console.error(ERR.noUserName);
    return;
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const postData = JSON.stringify({
    query: `{
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers { totalCount }
                  url
                  id
                  diskUsage
                  primaryLanguage { name color }
                }
              }
            }
          }
        }
    }`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json"
    }
  };

  try {
    const data = await fetchHttpsJson(options, postData);
    fs.writeFileSync("./public/profile.json", data);
    console.log("Saved GitHub profile to public/profile.json");
  } catch (err) {
    console.error("GitHub fetch failed:", err.message);
  }
}

async function fetchMedium() {
  if (!MEDIUM_USERNAME) return;

  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);

  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  try {
    const data = await fetchHttpsJson(options);
    fs.writeFileSync("./public/blogs.json", data);
    console.log("Saved Medium blogs to public/blogs.json");
  } catch (err) {
    console.warn("Medium fetch failed:", err.message);
  }
}

// Run both fetches
(async function main() {
  await fetchGitHub();
  await fetchMedium();
  console.log("Fetch complete.");
})();
