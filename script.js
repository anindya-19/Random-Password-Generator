const passwordGeneratorBtn = document.querySelector(".password-button")
const displayPassOne = document.querySelector(".display-pass-one")
const displayPassTwo = document.querySelector(".display-pass-two")

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ] 
function generateClicked(){
    const length = characters.length
    const passArray = []
    for(let i=0;i<2;i++)
    {
        let resultStr = ""
        for(let j=0;j<8;j++)
        {
            let randomIndex = Math.floor(Math.random() * length)
            resultStr += characters[randomIndex]
        }
        passArray.push(resultStr)
    }

    console.log(passArray)
    displayPassOne.textContent = passArray[0]
    displayPassTwo.textContent = passArray[1]
}
