#Give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/personal-node-app

#go into working directory
cd /home/ec2-user/personal-node-app

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  


#installing dependencies and starting app

npm install
