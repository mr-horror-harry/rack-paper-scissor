const pickOne = () =>{
    let array = ['Rock','Paper','Scissors']
    const index = Math.floor(Math.random()*3)
    return array[index]
  }
  const getresult =(computer,user)=>{
    let score
    if(computer===user){
      score = 0
    }
    else if((user==='Rock'&& computer==='Scissors')||
            (user==='Paper' && computer==='Rock')||
            (user==='Scissors'&& computer==='Paper')){
      score =1
    }
    else score = -1
    return score
  }
  
  
  const buttonclick = (choice) => {
    const computer = pickOne()
    const user = choice.value 
    //console.log(computer,' ',user)
    const playerResult = document.getElementById('player-score')
    const choices = document.getElementById('hands')
    choices.innerText = `You chose: ${user} and Comp chose: ${computer}`
    const score = getresult(computer,user)
    if(score===0){
      playerResult.innerText = "It's a Tie"
    }
    else if(score===1){
      playerResult.innerText = "You Won!!!"
      //user_score+=1
    }
    else{
      //user_score-=1
      playerResult.innerText = "You Lose :("
    }
    //return user_score
  }
  
  const end = document.getElementById('endGameButton')
  let user_score =0
  end.onclick = () =>{
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
  }
  const button = document.querySelectorAll('.rpsButton')
  button.forEach(btn =>{
    btn.onclick = () =>{
      buttonclick(btn)
      //console.log(user_score)
    }
  })