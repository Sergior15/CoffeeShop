export default function MenuItems(menuItems){
    return `
    <h1>Menu Items</h1>
    <menuitems>
        ${menuItems.map(menuItem => {
        return `
            <menuitems>
                <an>${menuItem.foodorBev}</an>
                <img class='select-menuItemId__select' src=${menuItem.image}>
                <menuiteminput>
                <input class='delete-menuItem__id' type='hidden' value="${menuItem.menuItemId}">
                <button class='delete-menuItemId__delete'>Delete Menu Item</button> 
                </br>
                <input class='select-menuItem__id' type='hidden' value="${menuItem.menuItemId}">
                <input class='edit-menuItem__Id' type='hidden' value="${menuItem.menuItemId}">
                <input type="text" class="edit-menuItem_name" placeholder="Edit a menu item.">
                <button class="edit-menuItem_submit">Submit</button>
                </menuiteminput>        
            </menuitems>
        `;
    })
    .join("")}
        </menuitems>
        <addmenuitem> 
            <input type="text" class="add-menuItem_name" placeholder="Add a menu item.">
            <input type="text" class="add-menuItem_image" placeholder="Add a menu item image.">
            <button class="add-menuItem_submit"> Submit</button>
        </addmenuitem>
    `
    };