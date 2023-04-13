//как работает фунция. есть буфер(item_data)в него добавляются все данные, которые выводятся в текстбоксы
//передтдолавлением данных прошка проверчет, былт лт внесены текущие данные, если уже были добавлены - прошка не даст внести даннын еще раз
console.log('ТОП менеджеры подключены');
let line_topmantxt ='';
let filtered_txt ='';
let filter_data='';
let itemdata = [
    '',
  ];//глобальная перемення, в нее добавляются все вносимые данные, чтобы не было повторений. можно использлвать для всех данных
let filter_item_added=0; // объявим переменную, если 1 - значит можно добавлять топ менеджера
//функция отбора топ менеджеров
function selection_topman(txt){
//эта функция должна работать как фильтр чтобы ничего не повторялочь
l(filter_topman(txt))
if(filter_item_added ==1){addtopman(txt); filter_item_added = 0;}//передаем в функцию вывода/добавления топменеджера в текстбокс если все условия соблюдены
} 
  //добавить топ менеджера
function addtopman(txt) {
line_topmantxt = line_topmantxt + ' ' +txt;
filter_data = [...new Set(line_topmantxt)];
          edit_txtbox('topman', line_topmantxt)//edit_txtbox('айдишник чего редактируем', 'TestTEXT')
         l('добавлен Топ менеджер - '+txt)
        }
        
function add_itemdata(txt) //функция внесения данных в массив
{  itemdata.push(txt);}

let filter_topman = (value) => {
        for (let i = 0; i < itemdata.length; i++) {
          let current_value = itemdata[i];
          if (value === current_value) {
            return value + " уже есть такой ТОПменеджер, внесения не требуются. в массиве под номером " + i;
          }
        }
        //
      add_itemdata(value)//dнесем в массив данные, чтобы не повторялись
      filter_item_added =1;//добавим инфу в переменную, что доступ разрешен для добавления
        return value + " такого топ менеджера еще не вносили, добавленue топ менеджера logs массив и в тексбокс. massivov vsego "+itemdata.length;;
      };
