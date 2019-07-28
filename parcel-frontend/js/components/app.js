import Home from './home';
import MenuItems from './menu-item';
import apiActions from '../api/api-actions';
import Singlemenuitem from './singlemenu-item';
import FbDetail from './fb-type';
import Flavors from './flavor';
import SingleFBType from './singleFBType';


pageBuild();

function pageBuild(){
    home();
    menuItems();
    fbDetail();
    flavor();
    singleMenuItem();
    singleFBType();
    
    
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
          
          apiActions.deleteRequest("https://localhost:44373/api/menuItems", menuItem,menuItem,
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
            apiActions.putRequest("https://localhost:44373/api/menuItems/" + menuItem, data, menuItems => {
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
        if (event.target.classList.contains("select-FBDetailId__select")) {
        const fBDetailsId = event.target.parentElement.querySelector(".select-FBDetail__id")
            .value;
            console.log(fBDetailsId)
        apiActions.getRequest("https://localhost:44373/api/flavors/"+ fBDetailsId,
            fbType => {
                document.querySelector('#root').innerHTML = SingleFBType(fbType);
        })         

    }
},

function singleMenuItem(){
    document.getElementById('root').addEventListener('click', function(){
        if (event.target.classList.contains('select-menuitemId__select')){
            const menuItemId = event.target.parentElement.querySelector('.select-menuItem__id').value
            apiActions.getRequest('https://localhost:44373/api/fBDetails/'+ menuItemId, 
            MenuItem =>{
                document.querySelector('#root').innerHTML = Singlemenuitem(MenuItem, menuItemId)
            })
        }
    })
},
document.querySelector('#root').addEventListener("click", function(){
    if(event.target.classList.contains('add-FBdetails_submit')){
       const MenuId = event.target.parentElement.querySelector('.add-FBdet_MenuItemId').value;
       const FBname = event.target.parentElement.querySelector('.add-_FBdetailname').value;
       const price = event.target.parentElement.querySelector('.add-FBdetailprice').value;
       const calories = event.target.parentElement.querySelector('.add-FBdetailcalories').value;
       const data = {
       menuItemId: MenuId, 
       fBDetailsId: 0,
       fbDescription: FBname,
       price: price,
       calories: calories
       }
       apiActions.postRequest("https://localhost:44373/api/fBDetails/", data, fblist => {
        
        document.querySelector('#root').innerHTML = Singlemenuitem(fblist, data.menuItemId);
       })      
   }
  }),
  document.querySelector('#root').addEventListener("click", function() {
    if (event.target.classList.contains("delete-fbdetailId__delete")) {
      const fBDetails = event.target.parentElement.querySelector(".delete-fbdetail__id")
        .value;
      apiActions.deleteRequest("https://localhost:44373/api/fBDetails/"+ fBDetails, fBDetails,
        details => {
            document.querySelector('#root').innerHTML = Singlemenuitem(details);
        },           
        );
    }
  }),
  document.querySelector('#root').addEventListener("click", function(){
    if(event.target.classList.contains('edit-FBdetails_submit')){
        const menuId = event.target.parentElement.querySelector('.edit-fbdetail_MenuItemId').value;
        const fBDetailsId = event.target.parentElement.querySelector('.edit-FBdetailId').value; 
        const name = event.target.parentElement.querySelector('.edit-fbdetail_name').value;
        const price = event.target.parentElement.querySelector('.edit-fbprice').value;
        const calories = event.target.parentElement.querySelector('.edit-fbcalories').value;
        const data = {
            menuItemId: menuId,
            fBDetailsId: fBDetailsId,
            fbDescription: name,
            calories: calories,
            price: price
        }
    apiActions.putRequest("https://localhost:44373/api/fBDetails/"+ fBDetailsId, data, details => {
        document.querySelector('#root').innerHTML = Singlemenuitem(details);
    })
    }
   }),

   function singleFBtype(){
    
    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("select-fbdetailId__select")) {
          const fBDetailsId = event.target.parentElement.querySelector(".select-fbdetail__id")
            .value;
            
          apiActions.getRequest("https://localhost:44373/api/flavors/"+ fBDetailsId,
            flavors => {
                document.querySelector('#root').innerHTML = SingleFBType(flavors, fBDetailsId);
            },           
            );
        }
    });

    document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('add-flavor_submit')){
            const fBDetailsId = event.target.parentElement.querySelector('.add-flavor_fbdetailid').value;
            const name = event.target.parentElement.querySelector('.add-flavor_flavorname').value;           
            const data = {
                flavorId: 0,
                fBDetailsId: fBDetailsId,
                flavorName: name
            }
            apiActions.postRequest("https://localhost:44373/api/flavors", data, flavors => {
                document.querySelector('#root').innerHTML = SingleFBType(flavors, data.fBDetailsId);
            })
        }
    })

    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("delete-flavorId__delete")) {
          const flavor = event.target.parentElement.querySelector(".delete-flavor__id")
            .value;
          apiActions.deleteRequest("https://localhost:44373/api/flavors/"+ flavor, flavor,
            flavors => {
                document.querySelector('#root').innerHTML = SingleFBType(flavors);
            },           
            );
        }
      });

    document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('edit-flavor_submit')){
            const FBdetail = event.target.parentElement.querySelector('.edit-flavor_FBdetId').value;
            const flavor = event.target.parentElement.querySelector('.edit-flavor__flavorId').value;
            const name = event.target.parentElement.querySelector('.edit-flavor_name').value;
            
            const data = {
                fBDetailsId: FBdetail,
                flavorId: flavor,
                flavorName: name                             
            }
        apiActions.putRequest("https://localhost:44373/api/flavors/"+ flavor, data, flavors => {
            document.querySelector('#root').innerHTML = SingleFBType(flavors);
        })
        }
       })

},  
  
function flavor(){
    const app = document.getElementById('root');
    const flav = document.getElementById('nav_flavor');
    flav.addEventListener('click', function(){
        apiActions.getRequest("https://localhost:44373/api/flavors", flavors => {
            app.innerHTML = Flavors(flavors);
        })
    })
    }
)}
