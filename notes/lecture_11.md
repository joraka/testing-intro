1. Repeat and check homework 
2. Boundary values
3. Pesticide paradox
4. Exercise to register bugs into Jira


## 1. Repeat and check homework 

## 2. Boundary values

https://www.alphabin.co/blog/boundary-value-analysis-in-software-testing  

ex:

Balsavimo biuletenis (balsuoti gali asm. 18-50 m):
balsuoti gali: 
1. amzius[18]
2. amzius[19]?
3. amzius[49]?
4. amzius[50]

balsuoti negali: 
1. amzius[17]
2. amzius[51]

galima ikelti iki 20 nuotrauku:
ikeliamos nuotraukos [1]
ikeliamos nuotraukos [20]
ikeliamos nuotraukos [21] - neleidzia


## 3. Pesticide paradox

https://bugbug.io/blog/software-testing/pesticide-paradox/  

The Pesticide Paradox in software testing is a principle stating that if the same set of test cases is executed repeatedly, they will eventually fail to detect new defects.  

This concept, introduced by Boris Beizer in Software Testing Techniques, draws an analogy to how insects develop resistance to pesticides when the same chemicals are used repeatedly.

#### Implications of the Pesticide Paradox
1. Diminishing Effectiveness – Running the same test cases repeatedly only finds the defects they are designed to catch, missing newly introduced bugs.  
   
2. Need for Test Case Evolution – Test cases must be regularly reviewed, modified, and expanded to remain effective.

3. Importance of Exploratory Testing – In addition to automated and scripted tests, exploratory testing can help uncover new defects.

4. Regression Testing Challenges – Automated regression tests should be updated as the application evolves to ensure they remain relevant.

#### How to Overcome the Pesticide Paradox
Review and update test cases to cover new functionalities and edge cases.  

Use different testing techniques such as boundary value analysis, equivalence partitioning, and risk-based testing.  

Incorporate exploratory testing alongside automated and manual testing.  

Leverage AI/ML-based test automation to adapt and generate new test cases dynamically.  

This paradox underscores the importance of continuous test improvement to maintain high software quality.


## 4. Exercise to register bugs into Jira 
https://academybugs.com/find-bugs/

Register and download Postman:  
https://www.postman.com/downloads/

