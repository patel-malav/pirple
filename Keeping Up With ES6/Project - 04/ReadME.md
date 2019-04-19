#I Implemented My First Ever Serverless Function

##How Did I do it?
### Description
    So I was given a unique project to make a serverless function in Pirple
    Course of Keeping Up With ES6, To make a serverless function that squares
    a number that is given in get/post request.

    So I searched about gcloud a lot and watched videos on youtube which i already
    knew about what is serverless and etc. all but i never have executed or made one

    I have used or tried gcloud once to deploy a static website which i failed to
    do so i skipped it and found about 000webhost where i deploy my php code.

    similarly with aws i also failed so i gave up on cloud computing & at that
    time i hardly knew about using computer with console, i used cmd or terminal
    in linux just to execute what is written in textbook.

    so this was totally out of my thought that there is something called console,
    so anyways how i did it ?

###Setup
    step 1: I reactivated gcloud billing which cost me 1 Rupee which is refundable
    then the usual payment information etc.

    step 2: make a gcloud project -> name it and all etc.

    step 3: open navigation menu.

    step 4: in compute find cloud functions.

    step 5: create a function in menu.

    step 6: give name to the function.

    step 7: allocate lowest memory option
        We Don't need 128 megabit memory to square a number -.-

    step 8: choose trigger HTTP

    step 9: Choose runtime i choose node.js 8 you can choose node.js 8/1/python/go

    step 10: Write the functions
        My function

        exports.square = (req, res) => {
          let number = req.query.message || req.body.message || 'No Number Recieved';
          number = parseInt(number);
          number *= number;
          res.set('Access-Control-Allow-Origin', '*');
          res.status(200).send('Squared Value : ' + number.toString());
        };

    step 10: function to execute give the name here **square**

    step 11: Deploy the function and find the url
        My url - https://us-central1-serverless-function-238116.cloudfunctions.net/squarer

    step 12: test the function by sending get request or post request
        Here we have links to 5 different test condition to see if it is working

        https://us-central1-serverless-function-238116.cloudfunctions.net/squarer?message=18
        https://us-central1-serverless-function-238116.cloudfunctions.net/squarer?message=7
        https://us-central1-serverless-function-238116.cloudfunctions.net/squarer?message=20
        https://us-central1-serverless-function-238116.cloudfunctions.net/squarer?message=60
        https://us-central1-serverless-function-238116.cloudfunctions.net/squarer?message=121

        **EXPECTED OUTPUTS**
        1: Squared Value : 324
        2: Squared Value : 49
        3: Squared Value : 400
        4: Squared Value : 3600
        5: Squared Value : 14641

###My Thoughts
    I got goosebumps when my code actually ran on my laptop & on tv i mean i entered the url
    on my smart TV and gave parameter in url and it showed output in TV that amazed me How
    the world has changed to run a script on demand from any device and from anywhere in the
    world yet we are lazy to enjoy it.
