function getRandomColor() {
    const letters='0123456789ABCDEF';

    var color='#';
    for(var i=0; i<6;i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
} 
function calculateArea(x ,y, shape){
    x=parseInt(x);
    y=parseInt(y);
    
    if(shape =='Triangle'){
        
        return 0.5*x*y;
    }
    else if(shape=='Rectangle'){
        return x*y;
    }
    else if(shape=='Parallelogram'){
        return x*y;
    }
    else if(shape=='Rhombus'){
        return parseInt(x*y*0.5);
    }
    else if(shape=='Pentagon'){
        return 0.5*x*y;
    }
    else{
        
        return (Math.PI*x*y).toFixed(2);

    }
}
