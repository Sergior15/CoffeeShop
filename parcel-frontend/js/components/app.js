import Home from './home';
import MenuItems from './menu-item';
import apiActions from '../api/api-actions';
import singlemenuitem from './singlemenu-item';
import FbDetail from './fb-type';
import Flavors from './flavor';


pageBuild();

function pageBuild(){
    home();
    menuItems();
    fbDetail();
    flavors();
    
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
function fbDetail(){
    
    const app = document.getElementById('root');
    const fobtype = document.getElementById('nav_fb-type');
    fobtype.addEventListener('click', function(){
        apiActions.getRequest("https://localhost:44373/api/fBDetails", fbDets => {
            app.innerHTML = FbDetail(fbDets);
        })
    })
     document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('add-fbItem_submit')){
            const fbitemName = event.target.parentElement.querySelector('.add-fbItem_name').value;
            const price = event.target.parentElement.querySelector('.add-fbItem_price').value;
            const calories = event.target.parentElement.querySelector('.add-fbItem_calories').value;
            const menuItemId = event.target.parentElement.querySelector('.add-menuitem_Id').value;
            const data = {
                    fbDescription: fbitemName,
                    fbDetailsId: 0,
                    menuItemId: menuItemId,
                    price: price,
                    calories: calories
                        }
                apiActions.postRequest("https://localhost:44373/api/fBDetails/", data, menuItems => {
            document.querySelector('#root').innerHTML = singlemenuitem(menuItems);
                })
            }
    })
    

}

function flavors(){
    const app = document.getElementById('root');
    const flav = document.getElementById('nav_flavor');
    flav.addEventListener('click', function(){
        apiActions.getRequest("https://localhost:44373/api/flavors", flavors => {
            app.innerHTML = Flavors(flavors);
        })
    })
}



