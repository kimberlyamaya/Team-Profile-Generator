 # Team Profile Generator
 
  ## Description
  This profile generator will prompt for employee data to collect and display in a clean looking web page. This web page will have a card per employee and display title, name, employee id, email, and other title related data. In the generated web page the emails and github profiles are hyperlinks. Technologies used include node.js module file system, npm inquirer, npm jest, javascript, bootstrap, and html.

  ## Table of Contents
  [Installation](#Installation)  
  [Usage](#Usage)  
  [Contributing](#Contributing)   
  [Testing](#Testing)  
  [Questions](#Questions)  
  [License](#License) 
  
  ## Installation
  1. See Contributing for forking the repo
  2. Once these files are local on your machine
  3. Run 'npm install' in the terminal to install npm to create the necessary dependencies
  
  ## Usage
  1. Run 'node index.js' in the terminal to initiate the team profile generator
  2. Follow the prompts in the terminal
  3. All questions are required to be answered
  4. After entering data for the Manager you will be prompted with the main menu. The options are to enter an Engineer, enter an Intern, or to be finished building team
  5. If you choose to enter an Engineer you'll be prompted with questions related to the title of Engineer and then lead back to the main menu
  6. If you choose to enter an Intern you'll be prompted with questions related to the title of Inttern and then lead back to the main menu
  7. If you choose to be finished building team then the prompts will end the the team-profile.html will be generated based on the data entered 
  8. Find the newly generated team-profile.html file to view what has been generated

  [Click here to see walk-thru video](https://watch.screencastify.com/v/oct44Uobl0gEaikiu81o)

  ![team-profile.html](assets/images/team-profile.png)

  ## Contributing  
  
  ### Add to Project  
  To work on or add to this project follow these steps  
  1. Fork the repository  
  2. Add you changes  
  3. Submit a pull request for approval  
  
  ### Issues
  To add issues in GitHub follow these steps
  1. Click on the issues tab
  2. Click 'New issue' button
  3. Give the issue a title and comments
  4. Click 'Submit new issue' button

  [Click here to view current GitHub Issues](https://github.com/kimberlyamaya/Team-Profile-Generator/issues)   

  ## Testing

  ### Jest Testing
  1. Run 'npm run test' in the terminal to initiate tests
  2. All class constructor files will pass

  ### Test prompts
  1. All prompts are required to enter a value, any value
  2. To test if these work on any question press Enter in terminal without entering any data
  4. PASS: You will be prompted to enter your information again
  5. FAIL: The command line will accept the empty answer and continue to the next question

  ## Questions

  ### Contact
  For any questions please contact Kimberly Amaya 
  
  Email: [Link to Email](mailto:kimberly_kimbell@yahoo.com)  
  GitHub: [Link to GitHub Account](https://github.com/kimberlyamaya)  
  
  ## License
  This project contains a license from MIT 
  [Click here to see the license](license.txt)
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 