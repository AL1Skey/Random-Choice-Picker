const textArea = document.getElementById('text-area');
const output = document.getElementById('text-output');

textArea.addEventListener('keyup', (e) => {
    //CREATE TAG WITHIN INPUT VALUE IN TEXT AREA
    createTag(e.target.value);
    //IF ENTER PRESSED
    if(e.key === 'Enter'){
        //RANDOMIZE HIGHLIGHT
        const interval = setInterval( () => {
            const tag = randomTag();

            hlTag(tag);

            setTimeout( ()=> {
                unhlTag(tag);
            },100)

        },100)
        /*STOP RANDOMIZE HIGHLIGHT WHEN 3S PASSED*/
        setTimeout( () =>{
            /*STOP THE RANDOMIZE*/
            clearInterval(interval);
            /*SET TIMEOUT SO HIGHLIGHT WILL STAY INDEFINETLY*/
            setTimeout(() => {
                hlTag(randomTag());
            },100)
            
        },3000)

    }
})

function createTag(input){

    /*
    1.)input.split(',') = split string between coma
    2.).filter(var => var.trim() !==) = prevent inserting ''
    3.).map(var => var.trim()) = prevent adding empty space 
    */
    const af = input.split(',').filter(something => something.trim() !== '').map(something => something.trim());
    
    output.innerHTML = '';

    /*
    FOR EACH LOOP 
    FOR EACH SOMETHING IN ARRAY, IT WILL DO FUNCTION WITH:
    -)SOMETHING = ARRAY[INDEX]
    -)INDEX INCREASE UNTIL END OF ARRAY
    */
    af.forEach(sht => {
        const newTag = document.createElement('p');
        newTag.classList.add('output');
        newTag.innerText = sht;

        output.appendChild(newTag);
    });

    console.log(af);

}
//RANDOMIZE TAG FUNCTION
function randomTag(){
    const a = output.querySelectorAll('p');
    return a[Math.floor(Math.random() * a.length)];//RETURN TAG WITH RANDOMIZE INDEX
}

//HIGHLIGHT TAG
function hlTag(randomTag){
    randomTag.style.backgroundColor = 'coral';
}

function unhlTag(randomTag){
    randomTag.style.backgroundColor = '#f0932b';
}





