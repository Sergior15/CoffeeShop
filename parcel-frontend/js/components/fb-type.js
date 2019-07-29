export default function FbDetail (fbtypes){
    return `
    <h2>Food and Beverages</h2>
    <fbitems>
        ${fbtypes.map(fbDetails => {
        return `
            <fbdetail>
                <h3>${fbDetails.fbDescription}</h3>
                <arl> $${fbDetails.price}</arl> 
                <p>${fbDetails.calories} calories</p>
                <input class='select-fbDetail__id' type='hidden' value="${fbDetails.fBDetailId}">
                <button class="select-fbDetail_select">View Flavors</button>
            </fbdetail>                         
        `;
    })
    .join("")}
    </fbitems>
`
};