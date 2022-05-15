const publish = (event) =>{
    event.preventDefault();
    let commentFwitt = document.querySelector('#comment-text').value;
    let fwittSection = document.querySelector('#comment-section');
    let newFwitt = document.createElement('div');
    newFwitt.classList.add('text-light');
    let id = Math.floor(Math.random()*100);
    newFwitt.id= id;
    newFwitt.innerHTML = `${commentFwitt}`;
    fwittSection.appendChild(newFwitt)
    document.getElementById('comment-form').reset()
}
