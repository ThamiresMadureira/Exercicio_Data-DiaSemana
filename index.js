function DiaDaSemanaTexto(diaSemana){

let diaSemanaTexto;

switch(diaSemana){
    case 0:
     diaSemanaTexto = 'Domingo'  
     return diaSemanaTexto;  
}
switch(diaSemana){
    case 1:
    diaSemanaTexto = 'Segunda-Feira';
    return diaSemanaTexto;   
}
switch(diaSemana){
    case 2:
    diaSemanaTexto = 'Terça-Feira';
    return diaSemanaTexto;   
}
switch(diaSemana){
    case 3:
    diaSemanaTexto = 'Quarta-Feira';
    return diaSemanaTexto;    
}
switch(diaSemana){
    case 4:
    diaSemanaTexto = 'Quinta-Feira';
    return diaSemanaTexto;    
}
switch(diaSemana){
    case 5:
    diaSemanaTexto = 'Sexta-Feira';
    return diaSemanaTexto;  
}
switch(diaSemana){
    case 6:
    diaSemanaTexto = 'Sabado';
    return diaSemanaTexto;   
}
}

const data = new Date('2002-07-27 09:20:00');
const diaSemana = data.getDay();
const diaSemanaTexto = DiaDaSemanaTexto(diaSemana);
console.log( diaSemana, diaSemanaTexto);