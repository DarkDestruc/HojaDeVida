'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('ligth-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "ligth-theme"){
        this.textContent = "Dark";
    }else{
        this.textContent = "Ligth";
    }

    console.log('current class name: '+ className);

}); 