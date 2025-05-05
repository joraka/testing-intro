## 1. Repeat and check homework
## 2. VIM

When you apply commit without `-m` **VIM** text editor appear. Proceed following actions:
1. Type subject of message
2. Type message body - description
3. Save data:
   1. `SHIFT + ;` -> in order activate CLI mode (on MAC `SHIFT + :` )
   2. type `w` and press `ENTER` key in order to save
4. Exit from VIM
   1. `SHIFT + ;`
   2. type `q` and press `ENTER` key in order to exit


Open Vim from Linux terminal:
> type `vim` and press `Enter`
>

Close VIM:
>ESC, SHIFT + Z, SHIFT + Z
>

Close VIM from CLI mode:
>SHIFT + ;
> type `q` press `ENTER`
> type `q!` press `ENTER` (exit without saving)

EDIT
>`ESC` move to command mode
>`i` - insert, switched from command mode
>`s` - replaces a single character
>`x` - delete character
>`3x` - delete multiple characters
>`d` - press twice to delete a line
>`u` - undo changes
>
>Press `Shift + S` to replace multiple characters
>Press `Shift + A` to start writing at the end of a line
>
>`e` - in cmd mode move by words forward
>`b` - in cmd mode move by words backward
>`/` - in cmd mode search text
>
>`H`, `J`, `K`, `L` keys for navigation

**Force Saving:** To save changes, press `Shift + :` then type `w`


## 3. Figma/mockup
[Figma](https://www.figma.com)


## 4. Test Scenarios (TS) and Test Cases (TC)

Test Scenarios (TS) = 1 functionality

https://www.saucedemo.com/
1. Header (Web sites only)
2. Footer (Web sites only)
3. Hamburger menu
4. Login
5. Registration (Person and company)
6. Main-starting page
7. Item page
8. Rest of page (About, some category and etc.)
9. Navigation menu
10. Cart
11. Purchase
12. Filters, sorting etc.
13. Logout
14. Account removal

Desktop and web app:
1. Install
2. Uninstall
3. Close app
4. No tests for Header and Footers
   

Test Scenarios (TS) contains different Test Cases (TC)
Positive TC (with valid data)
Negative TC (with invalid data)

Always starting with positivist TC

Status: Pass/Fail/Blocked

TS.8. Login
TC.8.1. Login with valid data  
(first TC always must be positive)  
* 1. Enter user name: standard_user
* 2. Enter password: secret_sauce 
* 3. Click on button 'Login'

Status: Pass/Fail/Blocked
Expected result: Open shopping main page
Actual result:

TC.8.2. Login with incorrect user name
* 1. Enter user name: some_incorrect_user_name
* 2. Enter password: secret_sauce 
* 3. Click on button 'Login'

Status: Pass/Fail/Blocked
Expected result:   
    Epic sadface: Username and password do not match any user in this service  
Actual result:

TC.8.3. Login with empty user name
* 1. Enter user name: just empty field
* 2. Enter password: secret_sauce 
* 3. Click on button 'Login'

Status: Pass/Fail/Blocked
Expected result:   
    Epic sadface: Username is required   
Actual result:

TC.8.3. Login with empty password
* 1. Enter user name: standard_user
* 2. Enter password: just empty field 
* 3. Click on button 'Login'
* 
Status: Pass/Fail/Blocked
Expected result:   
    Epic sadface: Password is required  
Actual result:

[TC testsigma requirements](https://testsigma.com/guides/test-cases-for-manual-testing/)  
[TC cursera  requirements](https://www.coursera.org/articles/how-to-write-test-cases)  

[TC guru99 template](https://www.guru99.com/download-sample-test-case-template-with-explanation-of-important-fields.html)  
[TC smartsheet template](https://www.smartsheet.com/test-case-templates-examples)  
[TC templatelab template](https://templatelab.com/test-case/#google_vignette)  





