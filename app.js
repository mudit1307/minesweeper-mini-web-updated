document.addEventListener('DOMContentLoaded',() =>
{
    const grid=document.querySelector(".grid");
    let width=10;
    let bombAmount=20;
    let squares=[];



    //create board
    function createBoard()
    {
        const bombArray=Array(bombAmount).fill("bomb");
        const emptyArray=Array(width*width - bombAmount).fill('valid');
        // console.log(bombArray,emptyArray);
        const gameArray=emptyArray.concat(bombArray);
        // console.log(gameArray);
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5);
        console.log(shuffledArray);

        for(let i=0;i<width*width;i++)
        {
            const square=document.createElement('div');
            square.setAttribute("id",i);
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);
        }
    }
    createBoard();





 


    //add numbers
    for(let i=0;i<squares.length;i++)
    {
        let total=0;
        const isLeftEdge= (i % width === 0);
        const isRightEdge =(i % width === width -1);
        
        if(squares[i].classList.contains('valid'))
        {
            if(i>0 && !isLeftEdge && squares[i-1].classList.contains('bobm')) total++;
            if(i >9 && !isRightEdge && squares[ i + 1 - width].classList.contains('bomb')) total++;
            if(i> 10  &&  squares[i-width].classList.contains('bomb')) total++;
            if(i> 11  &&& )
            squares[i].setAttribute('data',total);
            console.log(squares[i]);
        }
    }
})