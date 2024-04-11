-- Display female passengers who survived and are older than 30.

SELECT * From tested Where survived >=1 AND age >= 30 AND sex = "female";


-- Find the average age of men who didn't survive.

SELECT AVG(age) from tested where sex = "male" and survived = 0;  resultado = 30.27273170731707

-- Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."


SELECT * From tested Where fare BETWEEN 20 AND 50 and embarked = "C";


-- Find the total number of the survivors in the first class.

SELECT count(passengerid) from tested WHERE pclass = 1 and survived >= 1;  resultado = 50

-- Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

SELECT * From tested Where embarked = "C" and fare >= 75;





