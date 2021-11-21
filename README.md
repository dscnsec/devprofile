# Devprofile

Create a platform where anyone can create their developer profile/porfolio.

We will be starting with an MVP where we take certain profile ids for each developer and create a basic profile for them including the following information:

- Profile URLs (github, linkedin, codechef, hackerrank, twitter, medium)
- Profile Information from Github API (name, bio, avatar_url, company, blog, location, email)
- Repo List (name, description, updated_at, html_url)
- You need to use the GitHub ID of the developer as the Unique ID to denote that developer on your website. Apart from Github, adding any other profile should be optional for the   developer while creating their profile.

Once a developer submits the form to create their profile, fetch their data from Github including profile and repo information and include it in the user information.

A Developer Profile should look like this at the backend:
```
{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
	"name": "Gaurav Chandak",
	"company": "workat.tech",
	"blog": "https://workat.tech",
	"location": "Bangalore, India",
	"email": null,
	"bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit",
	"repos": [{
		"name": "awesome-learn-to-code",
		"html_url": "https://github.com/gcnit/awesome-learn-to-code",
		"description": "A list of awesome resources for learning to code",
		"updated_at": "2020-08-12T18:21:53Z"
	}]
}
```
