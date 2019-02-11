var scores, roundScore, activePlayer, gamePlaying, diceTotal;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		//1. Random Number
	var dice1= Math.floor(Math.random() * 6) +1;
	var dice2= Math.floor(Math.random() * 6) +1;
	//2. Display the result
	document.getElementById('dice-1').style.display= 'block';
	document.getElementById('dice-2').style.display= 'block';
	document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
	document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
		diceTotal = dice1 + dice2;
	//3. update the roundScore but only if the rolled number is not 1
		if(dice1 === 6 && dice2 === 6)
			{
				scores[activePlayer]= 0;
				document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
				nextPlayer();
			}
		else if(dice1 !== 1 || dice2 != 1){
		//add score
		roundScore += diceTotal;
		document.getElementById('current-' + activePlayer).textContent = roundScore;
		}
	else{
			// next player turn
		nextPlayer();
			}
	}
	});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying)
		{
			//add currentScores to Global and update 
	scores[activePlayer] += roundScore;
	document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
			
			var input= document.querySelector('.final-score').value;
	
			if(input)
				{
					var winningScore= input;
				}
			else{
				winningScore= 100;
			}
	// winning player 
	if(scores[activePlayer] >= winningScore)
		{
			document.getElementById('name-'+ activePlayer).textContent = 'winner';
			document.getElementById('dice-1').style.display= 'none';
	        document.getElementById('dice-2').style.display= 'none';
			document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
	else{
			//Next player turn
	        nextPlayer();
	}
		}
	
});

function nextPlayer()
{
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.getElementById('dice-1').style.display= 'none';
	    document.getElementById('dice-2').style.display= 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
	scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
	gamePlaying = true;
	document.getElementById('dice-1').style.display= 'none';
	document.getElementById('dice-2').style.display= 'none';
    document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner'); 
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
}


	
