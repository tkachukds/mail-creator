l('дополнения (!!!admin права!!!) подключены');
//  showBaseData(); - показать базу
// showItemBaseData() - показать переделанную в массив БАЗУ ДАННЫХ

let i_txt=1;
//admin
let admin_code_txt = '';
let textbox_adminpanel;
//create textbox adminpanel
function create_txt_admpan(txt) {
textbox_adminpanel = document.createElement('textarea');//создадим переменную с текстбоксом
textbox_adminpanel.id='txt_adm_p'+i_txt;//добавим id
textbox_adminpanel.cols=50;
document.querySelector('#adminpanel').appendChild(textbox_adminpanel); //добавим переменную с текстбоксом в body_adminpanel
document.querySelector('#txt_adm_p'+i_txt).innerHTML = txt;//изменим текст админ панели , вставим текст их переменной admin_code_txt
i_txt++
}

function  create_txtbox_admin(txt){
    textbox_adminpanel = document.createElement('textarea');//создадим переменную с текстбоксом
    textbox_adminpanel.id=txt;//добавим id
    textbox_adminpanel.cols=50;
    document.querySelector('#adminpanel').appendChild(textbox_adminpanel); //добавим переменную с текстбоксом в body_adminpanel
    document.querySelector('#'+txt).placeholder = txt;//изменим текст админ панели , вставим текст их переменной admin_code_txt
}

function reed_admin_txtbx(){
   let basename = (document.getElementById('basename_admin').value);
   let namepps = (document.getElementById('namepps_admin').value);
   let topman = (document.getElementById('topman_admin').value);
   let man = (document.getElementById('man_admin').value);
   let adress = (document.getElementById('adress_admin').value);
    admin_create(basename,namepps,topman,man,adress)
}

function cr_admbut(txt,namebutt){//создать новую кнопку 
    const nametxt = txt;
    txt = document.createElement('button')
     // добавляем название кнопки
     txt.innerText = namebutt
     txt.id = nametxt;
     txt.addEventListener('click', () => {
reed_admin_txtbx();
       txt.style.backgroundColor= 'green';
       txt.disabled=true;
       txt.style.color='white';
    })
    document.querySelector('#adminpanel').appendChild(txt)//вывести в айди батонс //document.body.
    console.log(nametxt+' кнопка создана')
   }

function admin(){
    create_txtbox_admin('basename_admin');
    create_txtbox_admin('namepps_admin');
    create_txtbox_admin('topman_admin');
    create_txtbox_admin('man_admin');
    create_txtbox_admin('adress_admin');
    cr_admbut('adm','ADMIN create');
}
//
function help(){
    const infocreatebutten="пишем в консоль admin();"
    wrtxtbox('' + infocreatebutten);
}
//делаем авто создание кнопки. пишем admin_button(название кнопки, название ППС)
function admin_create(basename,namepps,topman,man,adress){
   

admin_code_txt = "['"+basename+"', '"+namepps+"', '"+topman+"', '"+man+"', '"+adress+"',],"
    console.log(admin_code_txt)
   create_txt_admpan(admin_code_txt);
   edit_txtbox('txtstandart', admin_code_txt)
} 