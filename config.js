/*
Since, protractor is a build from js, to manage it 
We use NPM, node package manager

	1. First setup node
	2. Check  cmd  and npm -ver
	3. Setup protector package using npm 
	4. Npm install -g protractor
	5. The above will setup protractor and webdriver-manager
	6. Check protractor cmd>  protractor --version
	7. Webdriver-manage is a helper class to run the selenium server running
	8. To get all its lib use cmd>webdriver-manager update
	9. Now start the selenium server cmd> webdriver-manager start
Browse the default server location as
*/
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js']
  };
  