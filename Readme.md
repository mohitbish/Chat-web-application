INSTALLATION 
brew services start mongodb-community@6.0

TEST SETUP
npm install --save-dev mocha

ANGULAR SETUP 
    ng new part2
    npm install bootstrap --save
    ng generate component login
    ng generate component logout
    ng generate component profile
    ng generate component adduser
    ng generate component superadmin
    ng generate component groupadmin
    ng generate component addgroup
    ng generate component addchannel
    ng generate component addusertochannel
    ng generate component users
    ng generate component groupview
    ng generate component channelview
    ng generate component groupassis


SERVER SETUP
    npm init
    npm install express --save
    npm install body-parser --save
    npm install cors --save
    npm install mangodb
    npm install socket.io


GIT DOCUMENTATION

Github was used to track modifications to the source code of repository. Git tracks a running history of changes to the code base. As software projects grow in lines of code, git became  a critical tool to alleviate the strain of growing development. Regular commits were pushed to maintain version control and backup data. 
Following practises were applied to insure version control
    >Commit Changes regulary. ...
    >Write Good Commit Messages. ...
    >Don't Break Builds. ...
    >Reviews Before Committing to Repository. ...
    >Make Sure Every Commit Is Traceable. ...
    >Follow Branching Best Practices.

Git Structure

The git repo has a folder and subfolder structer, Part2 is the main folder containing subfolder for server and frontend. Both server and client folders contain respective nodemodules and package json files.

Node modules            integration test       =>          test.js
Part2             =>    src                    =>          app comonent folders, object files and services  
Readme.md               Server                 =>          routes folder, sever.js

git llink: "https://github.com/mohitbish/SFA2.git"



DATA STRUCTURES

Group, User, Channel, Chat has data type of Objects. They are added with export interface to use in components.

Group contains a groupname, array of Userobj and array of Channelobj.
Groupobj : { Groupname: String, userlist : Userobj[], Channellist: Channelobj[] }

Channel contains a Channelname , array of Userobj and array of Chatobj.
Channelobj: {Channelname: string,  Userlist : Userobj[], chatList: Chatobj[]}

User contiains property username, password, email and role.
Userobj: {Username : string, Password: string, Email : string, Role: string}

Chat contains property Message and User
Chatobj { Message: String, User: Userobj}



Documentation - REST API

The Angular front end communicate with the Node.js server. Http server is listening on port3000 and angular is running on port 4200.Server folder has a subfolder containing all the routes which recive and send data to angular.

Routes:
('/adduser') => Parameters: Userobj, 
                Action: adds user to Users collection in database 
                Send: added Userobj

('/login') =>   Parameters: {Username; "", Password = ""},
                Action: checks Users collection in database to find the user 
                Send:  if found{userobj} else false

('/removegroup') => Parameters: groupobj,
                    Action: removes group from Groups collection in database 
                    Send:  Sends the updates Groups collection.

('/getgroups') =>   Parameters: none, (method: GET)
                    Action: finds Groups collection in database
                    Send:  Sends the Groups collection.

('/removeuser') =>  Parameters: Userobj
                    Action: removes user from Users collection
                    Send:  Sends the updated Users  collection.


('getusers') =>     Parameters: none, (method: GET)
                    Action: finds Users collection in databse,
                    Send:  Sends the  Users  collection.


('updateuser') =>    Parameters: {new:Userobj, old:Userobj]
                        Action: updates user to new values 
                        Send:  Sends the  updtes user 

('addchannel') =>    Parameters: {new:Grouoobj, old:Groupobj]
                        Action: updates Group to update the channellist 
                        Send:  Sends the updated group 


('getchannels') =>    Parameters: none, (method: GET)
                      Action: finds Groups collection
                      Send: Sends the groups 

('get1group') =>    Parameters: Groupobj
                    Action: finds group in groups collection
                    Send: Sends the group if found. 



Documentation - Angular Architecture

Agular setup contians components, services and object models.

Components
    login => shows login form, send login request to server and redirects after response
    logout => checks loginstatus and clears the local and session storage
    profile => checks loginstatus and seesion storage and redirects acoording to user role
    adduser => Shows form for adding user, sends userobj to server and redirects upon addeing
    superadmin => shows router links to adduser and userlist
    Users => shows the list of all the users. Controls the function to remove a user
    updateuser => shows the form  with old values, send request to upadte to new values.
    groupadmin => shows the list of gropus and link to add groups
    addgroup => shows form to add new group and send request to server
    addchannel => shows form to add channel and send request to update group
    addusertochannel => shows list of all userr and send request add user to channel
    groupview => shows all the channels and controls the function to remove and open the channel
    channelview => shows all the chats and users in the channel, shows the links to adduser and form to send chat

Services
    chatservice => manages socket and its methods for chatobj.

object models

    Groupobj : { Groupname: String, userlist : Userobj[], Channellist: Channelobj[] }
    Channelobj: {Channelname: string,  Userlist : Userobj[], chatList: Chatobj[]}
    Userobj: {Username : string, Password: string, Email : string, Role: string}
    Chatobj { Message: String, User: Userobj}
