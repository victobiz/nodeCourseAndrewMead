use express get and send methods and set up a server on port 3000. require express. create a public folder
and use middleware (create our own) to set up a page using the app.use and .static methods. Next
use template packages like ejs, handlebar to create a view. use git commands such as add, init, and status. add a .gitignore
file to the main repo.

create a ssh connection to github.
generate a key with:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# start the ssh-agent in the background
eval $(ssh-agent -s)

add the ssh to the agent
ssh-add ~/.ssh/id_rsa


pushing to git after you make a repository:

git remote add origin https://github.com/victobiz/nodeCourseAndrewMead.git
git push -u origin master


with heroku use command heroku login to login
use heroku keys:add to scan system for keys and add ssh key
use heroku keys:remove to remove the key
ssh -v git@heroku.com

to see your enviornment variables SET on windows env on linux
