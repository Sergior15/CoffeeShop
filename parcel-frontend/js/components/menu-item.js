export default function MenuItems(menuItems){
    return `
    <h1>Menu Items</h1>
    <ul>
        ${menuItems.map(menuItem => {
        return `
        <an>${menuItem.foodorBev}</an>
        <img class='select-menuitemId__select' src=${menuItem.image}>
        <menuinput>
        <input class='delete-menuItem__id' type='hidden' value="${menuItem.menuItemId}">
        <button class='delete-menuItemId__delete'>Delete Menu Item</button> 
        </br>
        <input class='select-menuItem__id' type='hidden' value="${menuItem.menuItemId}">
        <input class='edit-menuItem__Id' type='hidden' value="${menuItem.menuItemId}">
        <input type="text" class="edit-menuItem_name" placeholder="Edit menu item name.">
        <button class="edit-menuItem_submit">Submit</button>
        </menuinput>        
        `;
    })
    .join("")}

        </ul>
        <section> 
            <input type="text" class="add-menuItem_name" placeholder="Add a menu item.">
            <input type="text" class="add-menuItem_image" placeholder="Add a menu item Image.">
            <button class="add-menuItem_submit"> Submit</button>
        </section>


    `
    };