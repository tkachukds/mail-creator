
//создаем кнопку сброс
function clearbut() {

    // создать констануту с элемент кнопки
    const clearbut = document.createElement('button')
    // добавляем название кнопки
    clearbut.innerText = 'Сброс';
  //добавим айди
  clearbut.id = 'clearbutton';
      //какая функция при нажатии
      clearbut.addEventListener('click', () => {
    clear();
      console.log("сброс выполнен")
    })
    //создать кнопку на странице (ставится в конце параметров самой кнопки или при загрузки страницы)
    document.querySelector('#standartButtons').appendChild(clearbut)
    //создадим пораграф
    //document.querySelector('#buttons').appendChild(p);
    create_p();
  }

   //const txt = document.createElement('button');

//чтобы кнопка отобразилась - ее нужно добавить в список действий после загрузки стр
//admin

//кнопка
function cbut() {
    // создать константу с элемент кнопки
    const button = document.createElement('button');
    // добавляем название кнопки
    button.innerText = 'create new button';
      //какая функция при нажатии
    button.addEventListener('click', () => {
        cr_n_but('msk_mitinskaya', 'test Митинская');
 })
    //создать кнопку на странице (ставится в конце параметров самой кнопки или при загрузки страницы)
    document.querySelector('#buttons').appendChild(button)
  }

  function copy_button() {
     // создать константу с элемент кнопки
     const button = document.createElement('button');
     // добавляем название кнопки
     button.innerText = 'Копировать все';
     button.id='copyButton'
       //какая функция при нажатии
     button.addEventListener('click', () => {
     copying();
     })
     //создать кнопку на странице (ставится в конце параметров самой кнопки или при загрузки страницы)
     document.querySelector('#buttons').appendChild(button)
  }
   
  