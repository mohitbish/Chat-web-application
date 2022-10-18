INSTALLATION 

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



