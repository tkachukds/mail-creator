//объявляем переменные для генератора. потом туда поступает информация о выбранном ппс
let g_ppsname;
let g_ppstopman;
let g_ppsman;
let g_ppsadress;
    //функция отправки данных в генератор. сюда можно впихнуть функцию отбора определенного ппс
function data_in_generation() {
    g_ppsadress=data_adresspps;
    g_ppsname=data_namepps;
    g_ppstopman=data_topmanpps;
    g_ppsman=data_manpps;
    }
//генератор просто выполняет готовые функции. сам он нихрена не умеет(прям как твоя бывшая)
function generation() {
data_in_generation();//вставляем данные в генератор
selection_topman(g_ppstopman);//отбор топ менеджеров - лежит в topman.js
selection_man(g_ppsman);//отбор менеджеров - лежит в man.js
addpps_adress(g_ppsadress); //добавить адреса ППС лежит в script.js  
add_logs_addedpps(g_ppsname);//добавим логи добавленных ппс
clearedata();//очистим генератор//лежит в script.js
}