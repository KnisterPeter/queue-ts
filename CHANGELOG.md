Your git-log command is:
git log --format=%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n------------------------ >8 ------------------------ HEAD --no-merges
Your final context is:
{
  "commit": "commit",
  "issue": "issues",
  "date": "2019-01-21",
  "version": "0.1.1",
  "host": "https://github.com",
  "owner": "KnisterPeter",
  "repository": "queue-ts",
  "repoUrl": "https://github.com/KnisterPeter/queue-ts",
  "packageData": {
    "name": "queue-ts",
    "version": "0.1.1",
    "description": "A promise based worker queue with limited concurrency",
    "main": "dist/src/index.js",
    "files": [
      "dist",
      "index.d.ts",
      "src"
    ],
    "scripts": {
      "linter": "tslint --project ./tsconfig.json",
      "clean": "rimraf dist",
      "prebuild": "npm run clean",
      "build": "tsc --sourceMap",
      "pretest": "npm run build",
      "test": "mocha --require source-map-support/register --recursive dist/test",
      "changelog": "conventional-changelog -p angular -i CHANGELOG.md -w",
      "preversion": "npm test",
      "version": "npm run build && conventional-changelog -p angular -v -r 0 > CHANGELOG.md && git add -A .",
      "postversion": "git push && git push --tags",
      "prepublish": "not-in-install && npm run build || echo 'In install cycle, skipping prepublish'",
      "precoverage": "npm run clean && tsc --inlineSourceMap",
      "coverage": "nyc --reporter lcov ./node_modules/.bin/mocha dist/test/"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/KnisterPeter/queue-ts.git"
    },
    "author": {
      "name": "Markus Wolf",
      "email": "knister.peter@shadowrun-clan.de"
    },
    "license": "MIT",
    "devDependencies": {
      "@knisterpeter/standard-tslint": "1.7.1",
      "chai": "4.1.2",
      "conventional-changelog-cli": "1.3.22",
      "coveralls": "3.0.1",
      "cz-conventional-changelog": "^2.0.0",
      "in-publish": "2.0.0",
      "mocha": "5.2.0",
      "nyc": "12.0.1",
      "rimraf": "2.6.3",
      "source-map-support": "0.5.6",
      "tslint": "5.9.0",
      "typescript": "2.6.2"
    },
    "dependencies": {},
    "publishConfig": {
      "tag": "next"
    },
    "config": {
      "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
      }
    },
    "nyc": {
      "exclude": [
        "node_modules",
        "coverage",
        "dist/test"
      ]
    },
    "bugs": {
      "url": "https://github.com/KnisterPeter/queue-ts/issues"
    },
    "readme": "ERROR: No README data found!",
    "homepage": "https://github.com/KnisterPeter/queue-ts#readme",
    "_id": "queue-ts@0.1.1"
  },
  "gitSemverTags": [
    "v0.1.1"
  ],
  "linkReferences": true,
  "commitGroups": [
    {
      "title": "Chores",
      "commits": [
        {
          "type": "Chores",
          "scope": null,
          "subject": "dropped support for node 4",
          "merge": null,
          "header": "chore: dropped support for node 4",
          "body": null,
          "footer": "BREAKING CHANGE: Dropped support for node 4",
          "notes": [
            {
              "title": "BREAKING CHANGES",
              "text": "Dropped support for node 4",
              "commit": "[Circular ~.commitGroups.0.commits.0]"
            }
          ],
          "references": [],
          "mentions": [],
          "revert": null,
          "hash": "5c639cc",
          "gitTags": "",
          "committerDate": "2018-06-07",
          "raw": {
            "type": "chore",
            "scope": null,
            "subject": "dropped support for node 4",
            "merge": null,
            "header": "chore: dropped support for node 4",
            "body": null,
            "footer": "BREAKING CHANGE: Dropped support for node 4",
            "notes": [
              {
                "title": "BREAKING CHANGE",
                "text": "Dropped support for node 4"
              }
            ],
            "references": [],
            "mentions": [],
            "revert": null,
            "hash": "5c639ccc02389434171defa258c379736bfbbba8",
            "gitTags": "",
            "committerDate": "2018-06-07"
          }
        }
      ]
    }
  ],
  "noteGroups": [
    {
      "title": "BREAKING CHANGES",
      "notes": [
        {
          "title": "BREAKING CHANGES",
          "text": "Dropped support for node 4",
          "commit": {
            "type": "Chores",
            "scope": null,
            "subject": "dropped support for node 4",
            "merge": null,
            "header": "chore: dropped support for node 4",
            "body": null,
            "footer": "BREAKING CHANGE: Dropped support for node 4",
            "notes": [
              "[Circular ~.noteGroups.0.notes.0]"
            ],
            "references": [],
            "mentions": [],
            "revert": null,
            "hash": "5c639cc",
            "gitTags": "",
            "committerDate": "2018-06-07",
            "raw": {
              "type": "chore",
              "scope": null,
              "subject": "dropped support for node 4",
              "merge": null,
              "header": "chore: dropped support for node 4",
              "body": null,
              "footer": "BREAKING CHANGE: Dropped support for node 4",
              "notes": [
                {
                  "title": "BREAKING CHANGE",
                  "text": "Dropped support for node 4"
                }
              ],
              "references": [],
              "mentions": [],
              "revert": null,
              "hash": "5c639ccc02389434171defa258c379736bfbbba8",
              "gitTags": "",
              "committerDate": "2018-06-07"
            }
          }
        }
      ]
    }
  ],
  "isPatch": true,
  "previousTag": "v0.1.1",
  "currentTag": "v0.1.1",
  "linkCompare": true
}
Your final context is:
{
  "commit": "commit",
  "issue": "issues",
  "date": "2016-04-16",
  "version": "0.1.1",
  "host": "https://github.com",
  "owner": "KnisterPeter",
  "repository": "queue-ts",
  "repoUrl": "https://github.com/KnisterPeter/queue-ts",
  "packageData": {
    "name": "queue-ts",
    "version": "0.1.1",
    "description": "A promise based worker queue with limited concurrency",
    "main": "dist/src/index.js",
    "files": [
      "dist",
      "index.d.ts",
      "src"
    ],
    "scripts": {
      "linter": "tslint --project ./tsconfig.json",
      "clean": "rimraf dist",
      "prebuild": "npm run clean",
      "build": "tsc --sourceMap",
      "pretest": "npm run build",
      "test": "mocha --require source-map-support/register --recursive dist/test",
      "changelog": "conventional-changelog -p angular -i CHANGELOG.md -w",
      "preversion": "npm test",
      "version": "npm run build && conventional-changelog -p angular -v -r 0 > CHANGELOG.md && git add -A .",
      "postversion": "git push && git push --tags",
      "prepublish": "not-in-install && npm run build || echo 'In install cycle, skipping prepublish'",
      "precoverage": "npm run clean && tsc --inlineSourceMap",
      "coverage": "nyc --reporter lcov ./node_modules/.bin/mocha dist/test/"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/KnisterPeter/queue-ts.git"
    },
    "author": {
      "name": "Markus Wolf",
      "email": "knister.peter@shadowrun-clan.de"
    },
    "license": "MIT",
    "devDependencies": {
      "@knisterpeter/standard-tslint": "1.7.1",
      "chai": "4.1.2",
      "conventional-changelog-cli": "1.3.22",
      "coveralls": "3.0.1",
      "cz-conventional-changelog": "^2.0.0",
      "in-publish": "2.0.0",
      "mocha": "5.2.0",
      "nyc": "12.0.1",
      "rimraf": "2.6.3",
      "source-map-support": "0.5.6",
      "tslint": "5.9.0",
      "typescript": "2.6.2"
    },
    "dependencies": {},
    "publishConfig": {
      "tag": "next"
    },
    "config": {
      "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
      }
    },
    "nyc": {
      "exclude": [
        "node_modules",
        "coverage",
        "dist/test"
      ]
    },
    "bugs": {
      "url": "https://github.com/KnisterPeter/queue-ts/issues"
    },
    "readme": "ERROR: No README data found!",
    "homepage": "https://github.com/KnisterPeter/queue-ts#readme",
    "_id": "queue-ts@0.1.1"
  },
  "gitSemverTags": [
    "v0.1.1"
  ],
  "linkReferences": true,
  "type": null,
  "scope": null,
  "subject": null,
  "merge": null,
  "header": "0.1.1",
  "body": null,
  "footer": null,
  "notes": [],
  "references": [],
  "mentions": [],
  "revert": null,
  "hash": "62006e478a6c5882860b9d944a7851874e53a44b",
  "gitTags": " (tag: v0.1.1)",
  "committerDate": "2016-04-16",
  "commitGroups": [
    {
      "title": "Features",
      "commits": [
        {
          "type": "Features",
          "scope": null,
          "subject": "Initial version",
          "merge": null,
          "header": "feat: Initial version",
          "body": null,
          "footer": null,
          "notes": [],
          "references": [],
          "mentions": [],
          "revert": null,
          "hash": "bf109bd",
          "gitTags": "",
          "committerDate": "2016-04-16",
          "raw": {
            "type": "feat",
            "scope": null,
            "subject": "Initial version",
            "merge": null,
            "header": "feat: Initial version",
            "body": null,
            "footer": null,
            "notes": [],
            "references": [],
            "mentions": [],
            "revert": null,
            "hash": "bf109bdead0764533c436b47986eca19ca133564",
            "gitTags": "",
            "committerDate": "2016-04-16"
          }
        }
      ]
    }
  ],
  "noteGroups": [],
  "isPatch": true,
  "currentTag": "v0.1.1",
  "previousTag": "bf109bd",
  "linkCompare": true
}
<a name="0.1.1"></a>
## [0.1.1](https://github.com/KnisterPeter/queue-ts/compare/bf109bd...v0.1.1) (2016-04-16)


### Features

* Initial version ([bf109bd](https://github.com/KnisterPeter/queue-ts/commit/bf109bd))



