import Home from './home';
import MenuItems from './menu-item';
import apiActions from '../api/api-actions';




pageBuild();

function pageBuild(){
    home();
    menuItems();
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

    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("delete-menuItemId__delete")) {
          const menuItem = event.target.parentElement.querySelector(".delete-menuItem__id")
            .value;
          apiActions.deleteRequest("https://localhost:44373/api/menuItems/"+ menuItem,menuItem,
            menuItems => {
                document.querySelector('#root').innerHTML = MenuItems(menuItems);
            },           
            );
        }
      });

      document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('edit-menuItem_submit')){
            const menuItem = event.target.parentElement.querySelector('.edit-menuItem__Id').value;            
            const name = event.target.parentElement.querySelector('.edit-menuItem_name').value;
            const data = {
                menuItemId: menuItem,
                FoodorBev: name,                
            }
            apiActions.putRequest("https://localhost:44373/api/menuItems/"+ menuItem, data, menuItems => {
                document.querySelector('#root').innerHTML = MenuItems(menuItems);
            })
        }
    })
};
