function logo(){
const tkachuk = 'by Tkachuk Denis';
    document.querySelector("#adminpanel").innerHTML = tkachuk;
    document.querySelector("#adminpanel").style.color = "gray";
    document.querySelector("#adminpanel").style.opacity = .2;;
            }
logo(); 
    
 
 let loaded_txtLINE=['',];
 let loaded_database=[];
 let loadedTXTfileDataBase=[];
 let changerARR=[];
 //function
 let p_object = document.createElement('p');
 function create_p(){
    l('создана новая строка')
    document.body.appendChild(p_object);
                    }

//открывает и обновляет текст бокса для всего текста
let txtallbox = document.createElement('textarea');
txtallbox.cols=100;//ширина
txtallbox.rows=20; //вниз сколько - длмна
txtallbox.id='alltxts'; //подключили айди
txtallbox.display='none';  
//document.body
document.getElementById('foralltxt').appendChild(txtallbox); 
document.getElementById("alltxts").style.display = "none";  
            
function lookingAllTxt(){
    document.getElementById("alltxts").style.display = "";
    let allTXTdata = '' +document.getElementById('txtstandart').value+document.getElementById('topman').value+document.getElementById('man').value+document.getElementById('all_text').value ;
    
edit_txtbox('alltxts', allTXTdata);
}



function copying(){

}


//cycle(baseData); //что делать с базой при каждом прочтении строки//это пример!
function cycle(arr){
    for (let i = 0; i < arr.length; i++){//цикл позваолиющий повторять одно и тоже действие, пока не закончатся строки
        a('нашел строку '+arr[i]) //покажет инфу что есть в массиве
      }
    }

    let changerIdforLet='';
function changeforid(txt){
let slitno;
slitno = txt.split(' '); 
//slitno = txt.split(' '); // рабочая
//slitno = txt.replace(/\s/g,''); //меняем
let changerIdfor1;
changerIdfor1= slitno[2].split('.')+slitno[3].split(',');
changerIdforLet = changerIdfor1.replace(/[\s.,-]/g, '');
}
//
function loading_from_pps_JS() {
    loaded_database = baseData; 
}
//
function showBaseData(){edit_txtbox('all_text', loadedTXTfileDataBase);}
//
function showItemBaseData(){edit_txtbox('all_text', changerARR);}

//
let ITEM=[];
let LineForItem=[];
let FinishArrForItem=[];
let txtFORarrLINE;
    let i_arr;
    let txtFORarrLINElength;

let itemForFILTERButton =[];
function filterCreaterBUTTON(nameid,namePPS){
    //if(){}  start цикла
    if (itemForFILTERButton == undefined){a('пусто')}
         else {
        for (let i = 0; i < txtFORarrLINE.length; i++) {//потому что счет колл массивов у нас в txtFORarrLINE
          let current_id = itemForFILTERButton[i];
          if (nameid === current_id) {
            return nameid + " уже есть такая кнопка, внесения не требуются. в массиве под номером " + i;
              }                                        }
 //функции , если id уникалет
 l(nameid);
        itemForFILTERButton.push(nameid);
        l('фильтр для кнопок имеет данные:'+itemForFILTERButton)
        CreateNewButtonPPS(nameid,namePPS);// CreateNewButtonPPS('REUTOV', 'ППС РЕУТОВ тест')
        return nameid + " такого топ менеджера еще не вносили, добавленue топ менеджера logs массив и в тексбокс. massivov vsego "+itemdata.length;

 
             }
}
    //if cycle end

function txtForArr(txt){
      //txtFORarrLINE = txt.split(/^\s+/g, '');       //разделить на строки\ пробуем убрать крансую строку
      txtFORarrLINE = txt.split('/'); //  рабочая строка
   // l('делим на новые строки'+ txt.split(/\n/))//разделить на строки\
//разбить на ;
for (i_arr = 0; i_arr < txtFORarrLINE.length; i_arr++){// for (let i = 0; i < arr.length; i++)
    LineForItem = txtFORarrLINE[i_arr].split(';');
    l(LineForItem);
    if(LineForItem == ''){}
     else{
        l(i_arr)
      //  baseDataunderChange.push(LineForItem);
      changeforid(LineForItem[4]);

      function otkladka(){
        l('НАЗВАНИЕ ID - '+changerIdforLet) 
        l('НАЗВАНИЕ '+LineForItem[0])
        l('ТОП ' +LineForItem[1]+';')
        l('МЕН' +LineForItem[2]+';')
        l('АДM ' +LineForItem[3]+';')
        l('АДРЕС ППС ' +LineForItem[4]+';')
      }

// otkladka();                  //показать как массив разбился на данные
//объявим не глобальные переменные
let nameid;
let namePPS;
let top;
let man;
let adress;

function loadinglets(){
nameid = changerIdforLet;
namePPS = LineForItem[0];
top = LineForItem[1]+';';
man = LineForItem[2]+';';
adress = LineForItem[3]+';'+LineForItem[4]+';';
namePPS = namePPS.replace(/^\s+/g, ''); //уберем пробелы вначале текста
}
loadinglets();//вставим в переменные данные из массивов
ITEM = [nameid,
    namePPS,
    top,
    man,
    adress,]
//let namePPSforBUTTON = namePPS.replace(/^\s+/g, '');  //костыль удалит пробелы до начала текста
//filterCreaterBUTTON(nameid,namePPS.replace(/^\s+/g, ''));//если такая кнопка уже создавалась, создана она не будет(имяАйди, имяППСдляНазвания кнопки)
filterCreaterBUTTON(nameid,namePPS);//если такая кнопка уже создавалась, создана она не будет(имяАйди, имяППСдляНазвания кнопки)
//CreateNewButtonPPS(nameid,namePPS);// открой и наййди причину дубляжа
    }
    //FinishArrForItem=FinishArrForItem+LineForItem; //список всех
   // FinishArrForItem = FinishArrForItem+LineForItem;
   add_in_database(ITEM)
 }

}
let client;
function readerTxtfile(){
    client = new XMLHttpRequest();
    client.open('GET', 'baseTXT.txt');
    client.onreadystatechange = function() {
    //  l(loadedTXTfileDataBase);
    loadedTXTfileDataBase = client.responseText;
txtForArr(loadedTXTfileDataBase);//отправляем на обработку из текста в массив
    }
    client.send();
}

    function loading_fromTXTfile() {
readerTxtfile();//readerTxtfile(куда вставить обработанный текст)

}

function loading_from_json() {
    loaded_database = baseData; //пока так, потом заменим . вообще в эту переменную мы загружаем базу из другого файла
    // переменная (массив) в которую мы будем загружать БАЗУ ППС(в массиве) из джейсон файла
    //загрузить данные из файла джейсон
    //далее нужен сервак
readTextFile("/dataBase.json", function(text){
   let readerdata = JSON.parse(text);
    l(readerdata);
    loaded_database = readerdata;
})};
  
    //loaded_database = данные из файла


function add_in_database(txt) {//функция внесения данных в массив, не готова до конца
    loaded_database.push(txt);
    //2. Сохранить переменную loaded_database в джейсон файл
}

//создает кнопки под ппс
//createAllButtonAfterLoadDatabase(pps_arr);
function createAllButtonAfterLoadDatabase(arr){
    // CreateNewButtonPPS('REUTOV', 'ППС РЕУТОВ тест')
    for (let i = 0; i < loaded_database.length; i++){//цикл позваолиющий повторять одно и тоже действие, пока не закончатся строки
        //функция при прочтении строки
let ReadedLineArr = loaded_database[i];//добавим в переменную инфу из строки массива
l('название базы '+ReadedLineArr[0]+', создаю кнопку - '+ReadedLineArr[1])
        CreateNewButtonPPS(ReadedLineArr[0],ReadedLineArr[1])
        a("цикл создания кнопок")
      }


//основная функция цикла
//  
}
function findPPSinDatabase(id) {//по id найти строку и загрузить ее в глобальную переменную loaded_txtLINE  
//1. поиск по строке[0]
 let whatfound = id;//убери ковычки
function findTxtLineinDATABASE(nameData) {
  return nameData[0] === whatfound;
}

 let result = loaded_database.find(findTxtLineinDATABASE)
  loaded_txtLINE = result;
// l(loaded_txtLINE);
}
        // функцияПеределатьТекствМассив(найденая инфа, название переменной в которую добавить массив);
function changeTxtInItem(txt) {    //1.переделать текст в массив(необработанный текст)
      let finish_item = txt.split(';'); //сделать массив, разделитель - ;
        FinishCnagedItem = finish_item;
    }
    
    //CreateNewButtonPPS('Luberci', 'ППС Люберцы, Октябрьский пр-т')
function CreateNewButtonPPS(id,namebutt){//создать новую кнопку с новой логикой функций - НЕДОДЕЛАН!!!
        findPPSinDatabase(id);//из id загрузить инфу в переменную loaded_txtLINE
        const nametxt = id;//добавить в константу данные из id
      id = document.createElement('button')
       // добавляем название кнопки
       id.innerText = namebutt
        // добавляем айди кнопки
       id.id = nametxt;
       id.addEventListener('click', () => {
        //какие фукнкции исполняет кнопка при нажатии 
        
findPPSinDatabase(nametxt)//по id найти строку и загрузить ее в глобальную переменную loaded_txtLINE  
   //теперь нужно его внести и сгенерировать
      GeneretionFromArr(loaded_txtLINE);//вывод данных из обработонного массива одного ППС в текстбоекс
           lookingAllTxt();
        //отключает кнопку при нажатии
         id.style.backgroundColor= 'green';
         id.disabled=true;
         id.style.color='white';
      })
      document.querySelector('#buttons').appendChild(id)//создать кнопку в определенном месте (в айди баттон)
      l(nametxt+' кнопка создана '+namebutt)
     }

     //GeneretionFromArr(pps_arr); // массив pps_arr добавить в текстбоксы. Тоесть когда мы получаем данные разобранные на массив(pps_arr), функция добавт все в текстбоксы как обычно
function GeneretionFromArr(arr){//из переделанного массива сделает переменные для генератора и запустит его(тем самым будет вывод на текстбоксы)
    data_namepps = arr[1];
    data_topmanpps = arr[2];
    data_manpps = arr[3];
    data_adresspps = arr[4];
    generation();
}
