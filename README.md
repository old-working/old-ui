# old-ui
A simple UI created in vanilla-extract-css

## Show components
You can visit see on
https://old-ui.vercel.app/

## How to make a release
After successfully build your last PR, merge on main and then
- create a new branch named as the new version: example v0.2.0
- bump the version inside the package.json to the new version
- open PR that start with: "BREAKING" if is a major, "feat" if is a minor, "fix" if is a patch
- Merge the PR
- Create a new release with description
- run the comand npm publish
