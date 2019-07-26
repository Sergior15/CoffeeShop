using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeShop.Migrations
{
    public partial class addedFBDetailsList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_FBDetails_MenuItemId",
                table: "FBDetails",
                column: "MenuItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_FBDetails_MenuItems_MenuItemId",
                table: "FBDetails",
                column: "MenuItemId",
                principalTable: "MenuItems",
                principalColumn: "MenuItemId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FBDetails_MenuItems_MenuItemId",
                table: "FBDetails");

            migrationBuilder.DropIndex(
                name: "IX_FBDetails_MenuItemId",
                table: "FBDetails");
        }
    }
}
