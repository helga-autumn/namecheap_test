## Task ##
**Task description:** 

Create E2E tests for Login and Profile pages with using following test-cases.

Create your own repository for finished task on GitHub. 
Share access to ‘namecheaptest’ account if you have private repository.
You should create new project from a scratch.
Use JavaScript or TypeScript
Project should be in the new branch.
Project should contain covered test cases that are described in task document and contain instructions how to build and run your project.

Application credentials:
- Home page - https://www.sbzend.ssls.com
- Email for login - ssls.automation+666@gmail.com
- Password for login - 123456
 
#### 1. Authorization page. Not registered user ####
Steps:
- Open Home page
- Click on "LOG IN" text
- On the authorization page enter not registered email and any password
- Click "Login" button
Expected Result:
- Home page has to be opened
- Authorization page has to be opened
- After click on "eye" icon in password field, password should be displayed
- If user not registered, errors messages such as: “Uh oh! Email or password is incorrect” should be displayed

#### 2. Authorization page (Welcome back!) #### 
Steps:
 - Open Home page
 - Click on "LOG IN" text
 - On the authorization page enter valid email and password for previously registered user (to check entered password, click on "eye” icon in password field.)
 - Click "Login" button

Expected Result:
 - Home page has to be opened
 - Authorization page has to be opened
 - After click on "eye" icon for password field, password should be displayed
 - "Log in" button has to be changed on "User@email" button (with dropdown menu) from the left side in the Header of the page

#### 3. My profile page. Client area #### 
Precondition:
 - Log in to the user’s account
 - Click on triangle near the "User@email" button
 - In drop-down menu select "Profile"
 - Save values to a variable(Do not change saved values) of such fields in Profile - Name, Email, Phone, Address, Support Pin, Newsletter
 - Log out
Steps:
 - Log in to Account
 - Click on triangle near the "User@email" button
 - In drop-down menu select "profile"
Expected Result:
 - After click on "Profile" opened page "Profile" should be displayed
 - Check that opened page has to contain values in the next fields and compare with values saved to variable from precondition:
 -- 2.1. Name
 -- 2.2. Email
 -- 2.3. Password (not empty)
 -- 2.4. Phone
 -- 2.5. Address
 -- 2.6. Support pin
 -- 2.7. Newsletter


## Build and run ##
### Step 1: Clone Repo ###
```bash
git clone https://github.com/helga-autumn/namecheap_test.git 
```

### Step 2: Navigate to project root dir and install Cypress via [NPM](https://www.npmjs.com/) ###
```bash
npm install cypress --save-dev
```

[more info](https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install)

### Step 4 (optional): Add %FULL_PATH_TO_PROJECT_ROOT%/node_modules/.bin to PATH Environment Variables on Windows ###
```bash
PATH %PATH%;%cd%\node_modules\.bin
```

### Step 5: Run Cypress Tests ###
```bash
cypress run
```



