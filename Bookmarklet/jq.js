console.log(('script loaded!'));

function createPopup(){
  function CreateElement(tagName, props, children) {
    var element = document.createElement(tagName);

    if (props) {
      for (var propName in props) {
          element.setAttribute(propName, props[propName]) || eval('element.'+propName+'=props[propName];');
      }
    }

    if (children) {
      for( var i = 2; i < arguments.length; i++ ) {
        element.appendChild(arguments[i]);
      }
    }
  return element
}
  function sendRequest(item){
    console.log(item);
    fetch('http://localhost:3000/api/items/add', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: new Headers({
    		'Content-Type': 'application/json'
    	}),
      mode: 'cors',
    })
  }


  function getLists() {
      fetch('http://localhost:3000/api/lists/all')
        .then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          return response.json()
            .then((data) => {
                data.map((item, idx) => {
                  list.appendChild(CreateElement('option', {value:item.id, innerText: item.name}));
                });
            })
           ;
        })
        .catch((err) =>  {
          console.log('Fetch Error :-S', err);
        });
    }

  getLists();

  var Url = window.location;
  var popUp = CreateElement('div', {id:'popup', style:'width:350px;height:200px;border:1px black solid;'});
  var urlHid = CreateElement('input', {id:'url_inp', name: 'url',type: 'hidden'});
  var title = CreateElement('input', {id:'title_inp', name: 'title',type: 'text'});
  var price = CreateElement('input', {id:'price_inp', name: 'price',type: 'text'});
  var list = CreateElement('select', {id:'list_selector'});

  popUp.appendChild(CreateElement('img', {id:'w_img', style: 'width:120px; float:left', src:'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2016/WinterHolidays2016/113016-gw-shoveler-bubbles-tpr-fire_final._CB522736198_.jpg'}));
  popUp.appendChild(CreateElement('div', {class:'inputBox'},
    CreateElement('span', {innerText: 'Title'}),
    urlHid,
    title)
  );
  popUp.appendChild(CreateElement('div', {class:'inputBox'},
    CreateElement('span', {innerText: 'Price'}),
    price)
  );
  popUp.appendChild(list);
  popUp.appendChild(CreateElement('button', {id:'w_img', innerText: 'add to list', onclick: () => {sendRequest({title: title.value, price: price.value, list: list.value, url: Url.href})} }));

  var popDiv = document.getElementById('popup');
  if (!popDiv){
    document.body.appendChild(popUp);
  } else {
    popDiv.remove();
  }

}
