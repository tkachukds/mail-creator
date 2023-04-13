console.log('менеджеры подключены');
//переменные
let line_mantxt ='';

//функция отбор менеджеров
function selection_man(txt){
//эта функция должна работать как фильтр чтобы ничего не повторялочь
l(filter_man(txt))
if(filter_item_added ==1){addman(txt); filter_item_added = 0;}//передаем в функцию вывода/добавления топменеджера в текстбокс если все условия соблюдены
   
// addman(txt); //добавляем топменеджера если все условия соблюдены
}

let filter_man = (value) => {
    for (let i = 0; i < itemdata.length; i++) {
      let current_value = itemdata[i];
      if (value === current_value) {
        return value + " уже есть такой менеджер, внесения не требуются. в массиве под номером " + i;
      }
    }
    //
  add_itemdata(value)//dнесем в массив данные, чтобы не повторялись
  filter_item_added =1;//добавим инфу в переменную, что доступ разрешен для добавления
    return value + " такого менеджера еще не вносили, добавленue топ менеджера logs массив и в тексбокс. massivov vsego "+itemdata.length;;
  };



//добавление менеджера
function addman(txt) {
    line_mantxt = line_mantxt + ' ' +txt
    edit_txtbox('man', line_mantxt)//edit_txtbox('айдишник чего редактируем', 'TestTEXT')
    l('добавлен менеджер - '+txt)
     }

     