import Home from './home';
import MenuItems from './menu-item';
import apiActions from '../api/api-actions';
import singlemenuitem from './singlemenu-item';
import FbDetail from './fb-type';
import Flavors from './flavor';
import singlefbDetail from './singlefbDetail';


pageBuild();

function pageBuild(){
    home();
    menuItems();
    fbDetail();
    flavors();
    singleMenuitem();
    fbByMenuItem();
    
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

    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('album_name')){
            const albumId = event.target.parentElement.querySelector('.album_id').value
            
            apiActions.getRequest('https://localhost:44301/api/album/'+ albumId, 
            album =>{
                document.querySelector('#main-info').innerHTML = SingleAlbum(album)
            })
        }
    }) 
}    
    
function singleMenuitem(){    
    document.querySelector('#root').addEventListener("click", function(){
         if(event.target.classList.contains('add-fbItem_submit')){
           const menuitemId = event.target.parentElement.querySelector('.add-menuitem_Id').value;
           const fobtype = event.target.parentElement.querySelector('.add-fbItem_name').value;
           const data = {
                menuItemId: menuitemId,
                fbDetailsId: 0,
                foodorBev: fobtype
            }
            console.log(data)
           apiActions.postRequest("https://localhost:44373/api/menuItems/" + menuitemId, data, menuItems => {
                 document.querySelector('#root').innerHTML = singlemenuitem(menuItems);
            })
        } 
   })
}

function fbByMenuItem(){
    
    document.querySelector('#root').addEventListener("click", function() {
        if (event.target.classList.contains("select-menuItemId__select")) {
          const menuItemId = event.target.parentElement.querySelector(".select-menuItem__id")
            .value;
            console.log(menuItemId)
          ApiAction.getRequest("https://localhost:44373/api/fbDetails/"+ menuItemId,
            fbDetails => {
                document.querySelector('#root').innerHTML = AlbumsByArtist(fbDetails, artistId);
            },           
            );
        }
      });

      document.querySelector('#root').addEventListener("click", function(){
        if(event.target.classList.contains('add-album_submit')){
           const artist = event.target.parentElement.querySelector('.add-album_artistId').value;
           const album = event.target.parentElement.querySelector('.add-album_albumname').value;
           const label = event.target.parentElement.querySelector('.add-album_label').value;
           const albumimage = event.target.parentElement.querySelector('.add-album_albumimage').value;
           const data = {
           artistId: artist, 
           albumId: 0,
           recordLabel: label,
           albumTitle: album,
           imageUrl: albumimage
           }
           ApiAction.postRequest("https://localhost:44378/api/albums/", data, albumlist => {
            console.log(albumlist)
            document.querySelector('#app').innerHTML = AlbumsByArtist(albumlist, data.artistId);
           })      
       }
      })

   document.querySelector('#app').addEventListener("click", function() {
    if (event.target.classList.contains("delete-albumId__delete")) {
      const album = event.target.parentElement.querySelector(".delete-album__id")
        .value;
      ApiAction.deleteRequest("https://localhost:44378/api/albums/"+ album, album,
        albums => {
            document.querySelector('#app').innerHTML = AlbumsByArtist(albums);
        },           
        );
    }
  });

  document.querySelector('#app').addEventListener("click", function(){
    if(event.target.classList.contains('edit-album_submit')){
        const artist = event.target.parentElement.querySelector('.edit-album_artistId').value;
        const album = event.target.parentElement.querySelector('.edit-album__albumId').value;
        // const albumimage = event.target.parentElement.querySelector('.edit-album_albumimage').value;
        const name = event.target.parentElement.querySelector('.edit-album_name').value;
        const label = event.target.parentElement.querySelector('.edit-album_label').value;
        const data = {
            artistId: artist,
            albumId: album,
            albumTitle: name,
            recordLabel: label
            // ImageUrl: albumimage
        }
    ApiAction.putRequest("https://localhost:44378/api/albums/"+ album, data, albumlist => {
        document.querySelector('#app').innerHTML = AlbumsByArtist(albumlist);
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



