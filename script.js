
const menuItems = document.getElementById('menuItems');

        menuItems.style.maxHeight = '0px';
        menuItems.style.padding   = '0px';

        function toogleButton(){
            if(menuItems.style.maxHeight == '0px'){
                menuItems.style.maxHeight = '200px';
                menuItems.style.padding   = '15px';
            }else{
                menuItems.style.maxHeight = '0px';
                menuItems.style.padding   = '0px';
            }
        }
 