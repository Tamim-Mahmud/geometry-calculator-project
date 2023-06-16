const allDiv = document.querySelectorAll('.hover');

for(const div of allDiv){
    div.addEventListener('mouseover',function(){
        div.style.backgroundColor =getRandomColor();
    });
}
