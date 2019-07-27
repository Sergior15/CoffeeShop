export default function MenuItems(menuItems){
    return `
    <h1>Menu Items</h1>
    <menuitems>
        ${menuItems.map(menuItem => {
        return `
            <menuitems>
                <an class= 'select-menuItemId__select'>${menuItem.foodorBev}</an>
                <img class='select-menuItemId__select' src=${menuItem.image}>
                <input class='select-menuItem__id' type='hidden' value="${menuItem.menuItemId}">                
               
                
                <menuiteminput>
                <input class='delete-menuItem__id' type='hidden' value="${menuItem.menuItemId}">
                <button class='delete-menuItemId__delete'>Delete Menu Item</button> 

                <input class='edit-menuItem__Id' type='hidden' value="${menuItem.menuItemId}">
                <input class="edit-menuItem_name" type='text' value = "${menuItem.foodorBev}"> 
                <button class="edit-menuItem_submit">Edit Menu Item</button>
                </menuiteminput>   
                </br>     
            </menuitems>
        `;
    })
    .join("")}
        </menuitems>
        <addmenuitem> 
            <input class="add-menuItem_name" type="text" placeholder="Add a menu item.">
            <input class="add-menuItem_image" type="text" placeholder="Add a menu item image.">
            <button class="add-menuItem_submit"> Submit</button>
        </addmenuitem>
    `
    };