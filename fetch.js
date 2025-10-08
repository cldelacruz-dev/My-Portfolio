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

// --- GitHub Fetch ---
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const queryData = JSON.stringify({
    query: `
      {
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
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `
  });

  const githubOptions = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const githubReq = https.request(githubOptions, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, err => {
        if (err) return console.log(err);
        console.log("Saved file to public/profile.json");
      });
    });
  });

  githubReq.on("error", error => {
    console.error("GitHub request error:", error.message);
  });

  githubReq.write(queryData);
  githubReq.end();
}

// --- Medium Fetch (Safe) ---
if (MEDIUM_USERNAME) {
  try {
    console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
    const options = {
      hostname: "api.rss2json.com",
      path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      port: 443,
      method: "GET"
    };

    const req = https.request(options, res => {
      let mediumData = "";

      console.log(`statusCode: ${res.statusCode}`);

      res.on("data", chunk => {
        mediumData += chunk;
      });

      res.on("end", () => {
        if (res.statusCode !== 200) {
          console.warn(ERR.requestFailedMedium, `(status: ${res.statusCode})`);
          return;
        }

        fs.writeFile("./public/blogs.json", mediumData, err => {
          if (err) return console.log(err);
          console.log("Saved file to public/blogs.json");
        });
      });
    });

    req.on("error", error => {
      console.warn("Medium request error:", error.message);
    });

    req.end();
  } catch (err) {
    console.warn("Skipping Medium fetch due to error:", err.message);
  }
}
