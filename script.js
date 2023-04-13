
const standart = '"ТО рассылка" <help@mo-fonbet.ru>; 	"Оператор КЦ" <video@mo-fonbet.ru>;'; //перед всем текстом


window.onload = function() {//запустить при прочтении всей страницы //список действий после загрузки страницы
  //loading_from_pps_JS(); //временно, пока сервер не написал
  loading_fromTXTfile();
 // loading_from_json();  //включить, когда появятся сервер
 
// createAllButtonAfterLoadDatabase();//ПРОШКА АВТОМАТИЧЕСКИ СОЗДАСТ тест КНОПКИ
//load_button_oldbasedata();  //вывести на экран старую базу
//cbut(); //кнопка TEST шаблон
//создадим отдельный текстbox для стандарт текста
create_new_txtbox('txtstandart','txtbox_standart')//create_new_txtbox('новый айдишник текста','id куда бокс вставить')
edit_txtbox('txtstandart', standart)//edit_txtbox('айдишник чего редактируем', 'КАКОЙ ТЕКСТ ВСТАВЛЯЕМ')
//create_new_txtbox('новый айдишник текста','id куда бокс вставить')
create_new_txtbox('topman','txtbox_topman')
create_new_txtbox('man','txtbox_man')
  //постоянно
  all_textbox();//создадим текстбокс для alltxt
 
  ppslogtxt(); //создаем текстовую колонку для логов добавленных ппс
  clearbut();//создадим кнопку сброса

 //copy_button();//кнопка копирования
};


//движок, и его переменные
let textbox = document.createElement('textarea');//создадим переменную с текстбоксом
//параметры текстбокса
textbox.cols=150;//ширина
textbox.rows=6; //вниз сколько - длмна
textbox.id="all_text"; //подключили айди
textbox.disabled = true;
//создадим див для pps
const logppstxt =document.createElement('div'); //log text pps
//параметры текстлога
logppstxt.id='pps';

const p = document.createElement('p')  //создадим пораграф
let txt_line_adress_pps = '';//линия текста адресов ппс
let alltext ='' //весь текст для вывода в текстбоксе, оставим дл копирования

//объявление переменных текста
let top_man_text = '';//текстова линия топ менеджеров
let man_text = '';//линия менеджеров
let pps_text = '';//линия ппсов
let txt_line_log_added_pps ='';//имена ппсов
let FinishCnagedItem=['',];
//движок - его функции
     
function l(txt){
  console.log(txt)
}
//cr_n_but('НазваниеБазы', 'НазваниеППС')
function cr_n_but(txt,namebutt){//создать новую кнопку 
  const nametxt = txt;//добавить в константу данные названия
  txt = document.createElement('button')
   // добавляем название кнопки
   txt.innerText = namebutt
    // добавляем айди кнопки
   txt.id = nametxt;
   txt.addEventListener('click', () => {
past_data(nametxt);//добавить в переменные данные по ппс
      generation();//обработать данные
     txt.style.backgroundColor= 'green';
     txt.disabled=true;
     txt.style.color='white';
  })
  document.querySelector('#buttons').appendChild(txt)//вывести в айди батонс //document.body.
  console.log(nametxt+' кнопка создана')
 }
//функция создания нового текст бокса - create_new_txtbox('новый айдишник текста','id куда бокс вставить')
//create_new_txtbox('topman','txtbox')

//create_new_txtbox('id создаваемого ТекстБокса','id куда создать')
function create_new_txtbox(txt,id)
{nametxt=txt;
txt = document.createElement('textarea');
txt.cols=150;//ширина
txt.rows=2; //вниз сколько - длмна
txt.id=nametxt; //подключили айди
txt.disabled = true;
//document.body
document.getElementById(id).appendChild(txt) 
}
//функция редактирования определенного текстбокса - edit_txtbox('айдишник чего редактируем', 'TestTEXT')
// edit_txtbox('id текстбокса который нужно изменить', 'текст который вносим')
function edit_txtbox(id, txt){
    idd='#'+id
    document.querySelector(idd).innerHTML = ''+txt;
}
function a(txt){alert(txt);}
//функция должна вставить определенные данные в переменные.
//переменная = выполнить фнкцию('название функции любое'+'()')
function past_data(txt){let result = eval(txt+"()");} //выполнить функцию(назва+ни+еф+ун+кции())
//написать инфу в бокс для адресов ппс
function wrtxtbox(txt){document.querySelector('#all_text').innerHTML = txt;}
//создаем отдельный текст лист для уже добавленных ппс
function ppslogtxt(){
  document.getElementById("ppslogs").appendChild(logppstxt)
}
//создать текст бокс для вывода данных
function all_textbox() {
  //document.body - это если просто добавить на страницу
    //в элементе с айди тктбокс оздать переменную в которой лежит элемент текстбокса
  document.getElementById("txtbox").appendChild(textbox) 

}

  //функция сброс
function clear() {
  location.reload ();
}
//реализация буфера обмена
if (navigator.clipboard) {
  console.log('буфер обмена подключен')
  // поддержка имеется, включить соответствующую функцию проекта.
} else {
   console.log('буфер обмена не работает из-за ограничений браунзера')
  // поддержки нет. Придётся пользоваться execCommand или не включать эту функцию.
}


//переменные
let data_adresspps = '';
let data_namepps = '';
let data_topmanpps = '';
let data_manpps = '';
//  очистка кеша данных
function clearedata() {
data_adresspps = '';
data_namepps = '';
data_topmanpps = '';
data_manpps = '';
g_ppsadress='';
g_ppsname='';
g_ppstopman='';
g_ppsman='';
}

//функция добавляющая логи добавленных ппс
function add_logs_addedpps(txt){
        txt_line_log_added_pps = txt_line_log_added_pps + '<p>' + txt; 
        document.querySelector('#ppslogs').innerHTML = txt_line_log_added_pps;//вставляем 
}
//функция добавление адресов ППС
function addpps_adress(txt) {
    // добавляется адреса текущего ппс
    txt_line_adress_pps = txt_line_adress_pps + ' ' + txt;
    console.log('добавлен адрес - ' + txt)
  wrtxtbox(txt_line_adress_pps)  //выводим весь текст в текст бокс
}
//конец функций движка

