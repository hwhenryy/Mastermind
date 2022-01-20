## This is a webpage dedicated to a game called Mastermind.

# How it works:
1. The Player selects the difficulty of the game by choosing the number of digits the random number will be. </br>

2. The player chooses how many lives they will have to guess the correct number. </br>

3. A Random number will be generated according to the selected digits. eg 5 digits could relay 49828. They will not know this number </br>

4. The player can select 5 digit numbers to compare with the unknown random number </br>

5. two functions will be run to check the number of "ticks" and "circles". </br>
A tick means that there is a correct digit in the correct position as the random number </br>
a circle means there is a correct digit in an incorrect position as the random number </br>

eg: random = 12345, guess = 22459 -> ticks = one, circles = two
the 2nd digit 2 is correct whilst the 3rd and 4th digits 4 and 5 exists but are incorrectly placed. </br>

6. One life is lost each time the random number is not perfectly guessed and the player will lose once all lives are lost. </br>

