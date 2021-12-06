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
	"id": "ayush-ai",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
	"name": "Ayush",
	"company": "cosaimosh",
	"blog": "https://techaway.com",
	"location": "Bangalore, India",
	"email": null,
	"bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft",
	"github_id": "ayush-ai",
	"linkedin_id": "Ayush",
	"codechef_id": "null",
	"hackerrank_id": "ayush",
	"twitter_id": "supermanayush",
	"medium_id": "null",
	"repos": [{
		"name": "awesome-learn-to-code",
		"html_url": "https://github.com/gcnit/awesome-learn-to-code",
		"description": "A list of awesome resources for learning to code",
		"updated_at": "2020-08-12T18:21:53Z"
	}]
}
```

#### Tech Stack

- Frontend - HTML, CSS, JavaScript
- Backend - php/Node

#### Possible Mentors 

- Procheta Bhattacharya - [Mail](bhattacharyya.procheta1999@gmail.com) [LinkedIn](https://www.linkedin.com/in/procheta-bhattacharyya-18890818b)
- Tanuka Mondal - [LinkedIn](https://www.linkedin.com/in/tanuka-mondal-923051199/)
- Sajal Kumar

For any queries, join [Whatsapp group](https://chat.whatsapp.com/H5zx8sAa73D65aKUcqxFyt).

##### What to include in proposals?
Apart from your details and your experience. You should include the following in your proposal:-

- Your understanding about the project idea.
- List of ideas you want to implement and a brief description of your approach.
- Any ideas you want to suggest/add.
- mockups and wireframe for the UI of the app.
