
var bookmarkletAPI = (function() {
  var current = 0, imgArray;
  var Url = window.location;
  var scrollTop = window.scrollY + 50;
  var imgArray = document.getElementsByTagName('img');
  var style1 = "font-weight: normal;color: rgb(102, 102, 102);font-family: Arial, Helvetica, Verdana, sans-serif;font-variant-ligatures: normal;font-variant-caps: normal;margin: 0px;padding: 0px;font-style: normal;font-stretch: normal;font-size: 100%;line-height: 130%;border-collapse: collapse;border-width: 0px;border-spacing: 0px;text-align: left;outline: 0px;float: none;text-transform: none;vertical-align: top;/* background: url(&quot;https://images-na.ssl-images-amazon.com/images/G/01/x-locale/communities/gifting/universal/bkm/Amazon_Wish_List_longlogo-new._CB149468553_.png&quot;) center top no-repeat white; */table-layout: auto;min-width: 0px;min-height: 0px;text-shadow: none;box-shadow: none;box-sizing: content-box;border-radius: 0px;/* width: 479px; */display: block;position: relative;height: 43px;"
  var styleA = "font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px 7px 0px 0px; padding: 0px; font-style: normal; font-stretch: normal; font-size: 100%; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto; position: absolute; right: 5px; top: 2px;" ;
  var imgStyle = "font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px; padding: 2px 0px; font-style: normal; font-stretch: normal; font-size: 100%; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto;"
  var style2 = "float: left; overflow-y: hidden; width: 120px; height: 120px; display: flex; flex-direction: column; align-items: center;margin-bottom: 5px;"
  var style3 = "font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px; padding: 4px 0px 0px; font-style: normal; font-stretch: normal; font-size: 100%; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: center; outline: 0px; float: none; text-transform: none; vertical-align: middle; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto; display: block;";
  var styleImgPrev = "-webkit-user-select: none; margin-left: 30px;font-weight: bold; color: rgb(136, 149, 162); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 2px 8px 0px 0px; padding: 0px; font-style: normal; font-stretch: normal; font-size: 20px; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: middle; background: url(&quot;https://images-na.ssl-images-amazon.com/images/G/01/x-locale/communities/gifting/universal/bkm/arrow-new._CB148257769_.png&quot;) 0px 0px no-repeat; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: 6px; display: inline; height: 15px;"
  var styleImgNext = "-webkit-user-select: none; margin-left: 30px;font-weight: bold; color: rgb(136, 149, 162); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 2px 0px 0px 8px; padding: 0px; font-style: normal; font-stretch: normal; font-size: 20px; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: middle; background: url(&quot;https://images-na.ssl-images-amazon.com/images/G/01/x-locale/communities/gifting/universal/bkm/arrow-new._CB148257769_.png&quot;) -6px 0px no-repeat; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: 6px; display: inline; height: 15px;"
  var nobrStyle ="font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 3px; padding: 0px; font-style: normal; font-stretch: normal; font-size: 10px; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: center; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto;"
  var popupStyle = "box-shadow: rgba(0, 0, 0, 0.74902) 0px 0px 15px 0px; right: 50px; top: "+scrollTop+"px; width: 450px; height: 225px; border: 1px solid rgba(0, 0, 0, 0.137255); position: absolute; z-index: 9999999; padding: 10px; background-color: rgb(255, 255, 255);";
  var style4 ="font-weight: normal; color: rgb(51, 51, 51); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 5px auto; padding: 0px; font-style: normal; font-stretch: normal; font-size: 13px; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: 100%; display: block;"
  var spanStyle =" font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px; padding: 4px 3px 3px; font-style: normal; font-stretch: normal; font-size: 100%; line-height: 130%; border-collapse: collapse; border: 1px solid rgb(221, 221, 221); border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: 92%; display: inline-block;"
  var inputStyle = "font-weight: normal; color: rgb(51, 51, 51); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px; padding: 0px; font-style: normal; font-stretch: normal; font-size: 13px; line-height: 13px; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: bottom; background-color: white; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: 100%; height: 16px; display: inline-block;"
  var spanStyle2 = "font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px; padding: 4px 3px 3px; font-style: normal; font-stretch: normal; font-size: 100%; line-height: 130%; border-collapse: collapse; border: 1px solid rgb(221, 221, 221); border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto; display: inline-block;"
  var inpStyle3 = "font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 0px; padding: 0px; font-style: italic; font-stretch: normal; font-size: 13px; line-height: 13px; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: bottom; background-color: white; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto; height: 16px; display: inline-block;"
  var style5 = "font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; /*margin: 5px auto;*/ padding: 0px; font-style: normal; font-stretch: normal; font-size: 100%; line-height: 130%; border-collapse: collapse; border-width: 0px; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; background-color: transparent; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: auto; display: block;";
  var textArea ="font-weight: normal; color: rgb(102, 102, 102); font-family: Arial, Helvetica, Verdana, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal; margin: 1px 0px 0px; padding: 5px; font-style: italic; font-stretch: normal; font-size: 12px; line-height: 130%; border-collapse: collapse; border-spacing: 0px; text-align: left; outline: 0px; float: none; text-transform: none; vertical-align: top; table-layout: auto; min-width: 0px; min-height: 0px; text-shadow: none; box-shadow: none; box-sizing: content-box; border-radius: 0px; width: 92%; overflow: auto; height: 31px; resize: vertical;"
  var style6 ="font-weight: normal;color: rgb(102, 102, 102);font-family: Arial, Helvetica, Verdana, sans-serif;font-variant-ligatures: normal;font-variant-caps: normal;margin: 0px;padding: 0px;font-style: normal;font-stretch: normal;font-size: 100%;line-height: 130%;border-collapse: collapse;border-width: 0px;border-spacing: 0px;text-align: left;outline: 0px;float: none;text-transform: none;vertical-align: top;background-color: transparent;table-layout: auto;min-width: 0px;min-height: 0px;text-shadow: none;box-shadow: none;box-sizing: content-box;border-radius: 0px;width: auto;height: auto;position: relative;top: 0px;left: 0px;display: flex; align-items: baseline;white-space: nowrap;margin-top: 5px;";
  var buttonStyle = "width: 145px;display: inline-block;padding: 6px 12px;margin-bottom: 0px;font-size: 14px;font-weight: normal;line-height: 1.42857;text-align: center;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 4px;";

  return {
    createPopup() {
        var header =
          this.createElement('div', {style: style1},
            this.createElement('img', {style: imgStyle, style:"float: left;", border: "0", src: "http://localhost:3000/assets/components/Header/logo-small.png", alt:"Logo"}),
            this.createElement('p', {innerText: "Add Your Wish", style: "font-size: 25px;padding: 5px;margin: 0 45px;;"}),
            this.createElement('a', {style: styleA, href:"#", width:"17px" , target:"_self"},
            this.createElement('img', {style: imgStyle, border: "0", src: "http://localhost:3000/close.png", alt:"Close", onclick: ()=> this.hidePopup()} )
            )
          )

        var img_container =
          this.createElement('div', {style: "float: left; text-align: center;"},
            this.createElement('div', {style: style2},
              this.createElement('img', {id:"w_img", style:"width: 110px; float: left; margin: 10px;", src:""} )
            ),
            this.createElement('div', {},
              this.createElement('div', {style: style3,  align:"center"},
                this.createElement('span', {innerText: "<<", onclick:() => this.slide('prev'), style: styleImgPrev,  alt:"Previous image"} ),
                //this.createElement('nobr', {style: nobrStyle, innerText: '1 of 26'} ),
                this.createElement('span', {innerText: ">>", onclick:() => this.slide('next'), style: styleImgNext,  alt:"Next image"} )
              )
            )
          )

        var inputTitle=
          this.createElement('div', {style:"position: relative; display: flex; flex-direction: column;"},
            this.createElement('input', {id:"url_inp", name:"url", type:"hidden", value: Url}),
            this.createElement('div', {style: style4},
                this.createElement('span', {style: spanStyle} ,
                  this.createElement('input', {style: inputStyle, id:"i_title", name:"title", type:"text", maxlength:"250", value: document.title} )
                )
              )
          )

        var inputPrice =
          this.createElement('div', {style:"position: relative; text-align: end;"},
            this.createElement('div', {style: style4},
              this.createElement('span', {style: spanStyle2} ,
                this.createElement('input', {style: inpStyle3, id:"i_price", name:"price", type:"number", placeholder:"Price", size:"14"} )
              )
            )
          )


        var inputDescr =
          this.createElement('div', {style: "display: flex; flex-direction: column;"},
            this.createElement('span', {style: "margin-right: 10px; font-size: 11px;-webkit-user-select: none;"} ),
              this.createElement('div', {style: style5} ,
                this.createElement('textarea', {style: textArea, id: "descr", name: "descr", rows:"4",  placeholder:"Comments", onkeypress: "if ( window.event ? window.event.keyCode : event.which >= 32) { if (this.value.length >= 500) { this.value = this.value.substring(0, 500);return false;}} return true;" })
              )
            )

        var footer =
            this.createElement('div', {style: style6},
              this.createElement('button', {style: buttonStyle, innerText:"Add to List", onclick: () => { this.sendRequest({ title: this.convertQuery(document.getElementsByName('title')[0].value), price: document.getElementsByName('price')[0].value, list:  document.getElementById('list_selector').value, descr: this.convertQuery(document.getElementsByName('descr')[0].value), src: document.getElementById('w_img').src, url: Url.href}) } }),
                this.createElement('select', {id:"list_selector", style:"width: 140px;height: 33px;padding: 7px;line-height: 1em;"}
                )
              )

        var popUp =  this.createElement('div', {id:'wPopup', style: popupStyle }, header, img_container, inputTitle, inputPrice, inputDescr, footer)


      document.body.appendChild(popUp);
      this.getLists(); //get list of WishList from DB
      var img = document.getElementById('w_img');
      if (imgArray[0]){
        img.setAttribute('src', imgArray[0].src)
      }
    },

    hidePopup() {
      document.body.removeChild(document.getElementById('wPopup'));
    },

    createElement(tagName, props, children) {
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
    },

    sendRequest(item) {
      return fetch('http://localhost:3000/api/items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: new Headers({
      		'Content-Type': 'application/json'
      	}),
      }).then((response) => {
        switch (response.status) {
          case 200:
            document.body.removeChild(document.getElementById('wPopup'));
            break;
          case 500:
            alert('Item already exists in your Wishilsts');
            break;
          default:
            break;
          }
        }).catch((err)=> {
          console.log(err);
        })
    },

    getLists() {
        fetch('http://localhost:3000/api/lists',{
          headers: new Headers({
        		'Content-Type': 'application/json'
        	}),
        })
          .then((response) => {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            return response.json()
              .then((data) => {
                  data.map((item, idx) => {
                    document.getElementById('list_selector').appendChild(
                      this.createElement('option', {value:item.id, innerText: item.name})
                    );
                  });
              })
             ;
          })
          .catch((err) =>  {
            console.log('Fetch Error :-S', err);
          });
    },

    slide(dir){
      var img = document.getElementById('w_img');

      if (dir == 'next'){
        if (current < imgArray.length-1){
          current++;
        } else {
          current = imgArray.length-1;
        }
        imgArray[current].src ? img.setAttribute('src', imgArray[current].src) : img.setAttribute('src', imgArray[current++].src)
      }
      if(dir == 'prev'){
        if (current > 0){
          current--;
        }else {
          current = 0;
        }
        img.setAttribute('src', imgArray[current].src)
      }
      return current
    },

    convertQuery(str) {
        return str.replace(/"/g,'');
    }
  }
})()
