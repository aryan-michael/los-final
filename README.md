# Quotes App

## Backend

#### Node, Express, Cors  dependencies & API installation

```
mkdir quotes-app
mkdir backend
npm init -y
npm i express cors webseries-quotes nodemon
```

##### Only this 2 functions are needed to run the backend file
```
npm install 
npm start
```

>> Create .env file and copy mongodb url and port

## Frontend

#### React, Axios and Bootstrap dependencies installation

```
npm i create-react-app
npx create-react-app frontend
npm i axios
npm i react-bootstrap bootstrap

```

```
npm i react-router-dom
npm i browser-router
npm i --save styled-components
npm i react-icons
```
sudo apt install curl

sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list

sudo apt update

sudo apt install brave-browser
Fedora, CentOS Stream/RHEL 
sudo dnf install dnf-plugins-core

sudo dnf config-manager --add-repo https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc

sudo dnf install brave-browser
OpenSUSE 
sudo zypper install curl

sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc

sudo zypper addrepo https://brave-browser-rpm-release.s3.brave.com/brave-browser.repo

sudo zypper install brave-browser
Snap 
You can find Brave in the Snapcraft Store, but while it is maintained by Brave Software, it is not yet working as well as our official packages. We currently recommend that users who are able to use our official package repositories do so instead of using the Snap.

Beta Channel Installation 
Debian, Ubuntu, Mint 
sudo apt install curl

sudo curl -fsSLo /usr/share/keyrings/brave-browser-beta-archive-keyring.gpg https://brave-browser-apt-beta.s3.brave.com/brave-browser-beta-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/brave-browser-beta-archive-keyring.gpg] https://brave-browser-apt-beta.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-beta.list

sudo apt update

sudo apt install brave-browser-beta
Fedora, CentOS Stream/RHEL 
sudo dnf install dnf-plugins-core

sudo dnf config-manager --add-repo https://brave-browser-rpm-beta.s3.brave.com/brave-browser-beta.repo

sudo rpm --import https://brave-browser-rpm-beta.s3.brave.com/brave-core-nightly.asc

sudo dnf install brave-browser-beta
OpenSUSE 
sudo zypper install curl

sudo rpm --import https://brave-browser-rpm-beta.s3.brave.com/brave-core-nightly.asc

sudo zypper addrepo https://brave-browser-rpm-beta.s3.brave.com/brave-browser-beta.repo

sudo zypper install brave-browser-beta
Nightly Channel Installation 
Debian, Ubuntu, Mint 
sudo apt install curl

sudo curl -fsSLo /usr/share/keyrings/brave-browser-nightly-archive-keyring.gpg https://brave-browser-apt-nightly.s3.brave.com/brave-browser-nightly-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/brave-browser-nightly-archive-keyring.gpg] https://brave-browser-apt-nightly.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-nightly.list

sudo apt update

sudo apt install brave-browser-nightly
Fedora, CentOS Stream/RHEL 
sudo dnf install dnf-plugins-core

sudo dnf config-manager --add-repo https://brave-browser-rpm-nightly.s3.brave.com/brave-browser-nightly.repo

sudo rpm --import https://brave-browser-rpm-nightly.s3.brave.com/brave-core-nightly.asc

sudo dnf install brave-browser-nightly
OpenSUSE 
sudo zypper install curl

sudo rpm --import https://brave-browser-rpm-nightly.s3.brave.com/brave-core-nightly.asc

sudo zypper addrepo https://brave-browser-rpm-nightly.s3.brave.com/brave-browser-nightly.repo

sudo zypper install brave-browser-nightly
GitHub 
(Pre-)releases for all channels are also available on GitHub in .deb/.rpm/.zip formats.

Unofficial packages 
NOTE: While we recommend you to use our official packages, there’s a section for unofficial package in the case where we don’t ship packages for your distribution. These packages are community maintained, and therefore we take no responsibility for them.

Arch 
The Arch packages are available as brave-bin, brave-beta-bin and brave-nightly-bin in the Arch User Repository. To install it, you’ll need to use an AUR helper, such as yay.

yay -S brave-bin
yay -S brave-beta-bin
yay -S brave-nightly-bin
Flatpak 
Brave is available as a Flatpak package from Flathub.

Manjaro 
pacman -S brave-browser
pacman -S brave-browser-beta
Solus 
sudo eopkg it brave
The Solus package is a repackaging of the .deb file in to the Solus software format (.eopkg). It is currently maintained by Jacalz.

Download Brave
