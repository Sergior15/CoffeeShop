export default function FlavorbyFB(flavorbyid, fbDetailsId){
    return `
    <h2> Flavors </h2>
    <flavors>
    ${flavorbyid.map(flavor => {
        return `
        <flavor>
        <mainflavor>
            <sst>${flavor.flavorName}</sst>  
        </mainflavor>
            <flavorbyidinput>  
            <input class='select-flavor__id' type='hidden' value="${flavor.flavorId}">
            <input class='delete-flavor__id' type='hidden' value="${flavor.flavorId}">
            <button class='delete-flavorId__delete'>Delete Flavor</button>
            </br>    
            <input class='edit-flavor__flavorId' type='hidden' value="${flavor.flavorId}">
            <input class='edit-flavor_fbDetailsId' type='hidden' value="${fbDetailsId}">
            <input type="text" class="edit-flavor_flavorname" placeholder="Edit a flavor name.">
            <button class="edit-flavor_submit">Edit Flavor</button>
         </flavorbyidinput>                         
        </flavor>
    `;
    })
    .join("")}
    </flavors>
    <addflavor>
        <h2> Add a Flavor </h2> 
        <input class='add-flavor_fbDetailsId' type='hidden' value="${fbDetailsId}">
        <input type="text" class="add-flavor_flavorname" placeholder="Add a flavor.">
        <button class="add-flavor_submit"> Submit Flavor</button>
    </addflavor>
    `
};