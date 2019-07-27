import Home from './home';
import MenuItems from './menu-item';
import apiActions from '../api/api-actions';
import singlemenuitem from './singlemenu-item';
import fbTypes from './fb-type';


pageBuild();

function pageBuild(){
    home();
    menuItems();
    fbType();
}

function home(){
    const body = document.getElementById('root');
    const home = document.getElementById('nav_home');

    home.addEventListener('click', function(){
        body.innerHTML = Home();
    });
};

function menuItems(){
    const app = document.getElementById('root');
    const menuItems = document.getElementById('nav_menu-item');
    menuItems.addEventListener('click', function(){
        apiActions.getRequest("https://localhost:44373/api/menuItems", menuItems => {
            app.innerHTML = MenuItems(menuItems);
        })
    })

    document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('add-menuItem_submit')){
            const menuItem = event.target.parentElement.querySelector('.add-menuItem_name').value;
            const image = event.target.parentElement.querySelector('.add-menuItem_image').value;
            const data = {
                MenuItemId: 0,
                FoodorBev: menuItem,
                Image: image
            }
            apiActions.postRequest("https://localhost:44373/api/menuItems/", data, menuItems => {
                document.querySelector('#root').innerHTML = MenuItems(menuItems);
            })
        }
    })

    document.getElementById('root').addEventListener("click", function() {
        if (event.target.classList.contains("delete-menuItemId__delete")) {
          const menuItem = event.target.parentElement.querySelector(".delete-menuItem__id").value;
          const data ={
              MenuItemId: menuItem,
          };
          apiActions.deleteRequest("https://localhost:44373/api/menuItems", data,
            menuItems => {
                document.querySelector('#root').innerHTML = MenuItems(menuItems);
            },           
            );
        }
    });

    document.getElementById('root').addEventListener("click", function(){
         if(event.target.classList.contains('edit-menuItem_submit')){
            const menuItem = event.target.parentElement.querySelector('.edit-menuItem__Id').value;            
            const name = event.target.parentElement.querySelector('.edit-menuItem_name').value;
            const data = {
                menuItemId: menuItem,
                FoodorBev: name,                
            }
            apiActions.putRequest("https://localhost:44373/api/menuItems", data, menuItems => {
                document.querySelector('#root').innerHTML = MenuItems(menuItems);
            })
        }
    })

    document.getElementById('root').addEventListener('click', function(){
        if (event.target.classList.contains('select-menuItemId__select')){
            const menuitemId = event.target.parentElement.querySelector('.select-menuItem__id').value
            apiActions.getRequest('https://localhost:44373/api/menuItems/'+ menuitemId, 
            MenuItem =>{
                document.querySelector('#root').innerHTML = singlemenuitem(MenuItem)
            })
        }
    })
};
function fbType(){
    
    const app = document.getElementById('root');
    const fobtype = document.getElementById('nav_fb-type');
    fobtype.addEventListener('click', function(){
        apiActions.getRequest("https://localhost:44373/api/fbDetails", fbDetails => {
            app.innerHTML = fbTypes(fbDetails);
        })
    })

    
}

