import Home from './home';
import MenuItems from './menu-item';
import apiActions from '../api/api-actions';
import FbDetail from './fb-type';
import Flavors from './flavor';
import DetailbyMenuItem from './DetailbyMenuItem';
import FlavorByFB from './FlavorbyFB';


pageBuild();

function pageBuild(){
    home();
    menuItems();
    fbDetail();
    flavors();
    fbByMenuItem();
    flavorbyFB();
    
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

    
};
function fbDetail(){
    
    const app = document.getElementById('root');
    const fobtype = document.getElementById('nav_fb-type');
    fobtype.addEventListener('click', function(){
        apiActions.getRequest("https://localhost:44373/api/fBDetails", fbDets => {
            app.innerHTML = FbDetail(fbDets);
        })
    })

    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("select-fbDetail__select")) {
        const detailsId = event.target.parentElement.querySelector(".select-fbDetail__id")
            .value;
            console.log(detailsId)
        apiActions.getRequest("https://localhost:44373/api/flavors/"+ detailsId,
            albums => {
                document.querySelector('#root').innerHTML = FlavorByFB(albums);
        },           
        );
    }
  });
}    
    


function fbByMenuItem(){
    
    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("select-menuItemId__select")) {
          const menuItemId = event.target.parentElement.querySelector(".select-menuItem__id")
            .value;
            console.log(menuItemId)
          apiActions.getRequest("https://localhost:44373/api/fbDetails/"+ menuItemId,
            fbDetails => {
                document.querySelector('#root').innerHTML = DetailbyMenuItem(fbDetails, menuItemId);
            },           
            );
        }
      });

      document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('add-fbDetail_submit')){
           const menu = event.target.parentElement.querySelector('.add-fbDetail_menuItemId').value;
           const pri = event.target.parentElement.querySelector('.add-fbDetail_price').value;
           const cal = event.target.parentElement.querySelector('.add-fbDetail_calories').value;
           const description = event.target.parentElement.querySelector('.add-fbDetail_description').value;
           const data = {
           menuItemId: menu, 
           albumId: 0,
           fBDescription: description,
           Calories: cal,
           Price: pri
           }
           apiActions.postRequest("https://localhost:44373/api/fbDetails/", data, detaillist => {
            console.log(detaillist)
            document.querySelector('#root').innerHTML = DetailbyMenuItem(detaillist, data.menuItemId);
           })      
       }
      })

   document.querySelector('#root').addEventListener("click", function() {
    if (event.target.classList.contains("delete-fbDetailId__delete")) {
      const detail = event.target.parentElement.querySelector(".delete-fbDetail__id")
        .value;
      apiActions.deleteRequest("https://localhost:44373/api/fbDetails/"+ detail, detail,
        details => {
            document.querySelector('#root').innerHTML = DetailbyMenuItem(details);
        },           
        );
    }
  });

  document.querySelector('#root').addEventListener("click", function(){
    if(event.target.classList.contains('edit-fbDetail_submit')){
        const menu = event.target.parentElement.querySelector('.edit-fbDetail_menuItemId').value;
        const detail = event.target.parentElement.querySelector('.edit-fbDetail_fbDetailId').value;
        const description = event.target.parentElement.querySelector('.edit-fbDetail_description').value;
        const pri = event.target.parentElement.querySelector('.edit-fbDetail_price').value;
        const cal = event.target.parentElement.querySelector('.edit-fbDetail_calories').value;
        const data = {
            menuItemId: menu,
            fbDetailsId: detail,
            fBDescription: description,
            price: pri,
            calories: cal
        }
    apiActions.putRequest("https://localhost:44373/api/fbDetails/"+ detail, data, detailslist => {
        document.querySelector('#root').innerHTML = DetailbyMenuItem(detailslist);
    })
    }
   })

}

function flavorbyFB(){
    
    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("select-fbDetailId_select")) {
          const detailId = event.target.parentElement.querySelector(".select-fbDetail__id")
            .value;
            console.log(detailId)
          apiActions.getRequest("https://localhost:44373/api/flavors/"+ detailId,
            flavors => {
                document.querySelector('#root').innerHTML = FlavorByFB(flavors, detailId);
            },           
            );
        }
    });

    document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('add-flavor_submit')){
            const details = event.target.parentElement.querySelector('.add-flavor_fbDetailsId').value;
            const name = event.target.parentElement.querySelector('.add-flavor_flavorname').value;
            const data = {
                flavorId: 0,
                fbDetailsId: details,
                flavorName: name,
            }
            apiActions.postRequest("https://localhost:44373/api/flavors", data, flavors => {
                document.querySelector('#root').innerHTML = FlavorByFB(flavors, data.fbDetailsId);
            })
        }
    })

    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("delete-flavorId__delete")) {
          const flavor = event.target.parentElement.querySelector(".delete-flavor__id")
            .value;
          apiActions.deleteRequest("https://localhost:44373/api/flavors/"+ flavor, flavor,
            flavors => {
                document.querySelector('#root').innerHTML = FlavorByFB(flavors);
            },           
            );
        }
      });

    document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('edit-flavor_submit')){
            const detail = event.target.parentElement.querySelector('.edit-flavor_fbDetailsId').value;
            const flavor = event.target.parentElement.querySelector('.edit-flavor__flavorId').value;
            const name = event.target.parentElement.querySelector('.edit-flavor_flavorname').value;
            const data = {
                fbDetailsId: detail,
                flavorId: flavor,
                flavorName: name         
            }
        apiActions.putRequest("https://localhost:44373/api/flavors/"+ flavor, data, flavors => {
            document.querySelector('#root').innerHTML = FlavorByFB(flavors);
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



