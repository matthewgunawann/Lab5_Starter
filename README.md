# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Matthew Gunawan
Lab Partners None

Expose Link:
https://matthewgunawann.github.io/Lab5_Starter/expose.html
Explore Link:
https://matthewgunawann.github.io/Lab5_Starter/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No, I would not just perform a unit test to test the full message feature because the process of sending a message involves more than a unit test because the process of sending a message involves more than a unit test. Small portions of the feature can be tested using unit tests, but the entire message feature will be better tested using integration or end to end testing.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes, to test the max message length feature, I would use a unit test since it is a small, specific rule. A unit test can verify that messages containing 80 characters or less can be sent and messages containing more than 80 characters are denied.