using CoffeeShop.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop
{
    public class CoffeeShopContext : DbContext
    {
        public DbSet<FBDetails> FBDetails { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Flavor> Flavors { get; set; }
       

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=CoffeeShop;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
            .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MenuItem>().HasData(
                new MenuItem
                {
                    MenuItemId = 1,
                    FoodorBev = "Coffee",
                    Image = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale"
                },

                new MenuItem
                {
                    MenuItemId = 2,
                    FoodorBev = "Tea",
                    Image = "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324771/close-up-of-a-cup-of-tea.jpg"
                },

                new MenuItem
                {
                    MenuItemId = 3,
                    FoodorBev = "Muffin",
                    Image = "https://i2.wp.com/wellplated.com/wp-content/uploads/2017/04/Low-Sugar-Healthy-Blueberry-Muffins.jpg"
                },
                new MenuItem
                {
                    MenuItemId = 4,
                    FoodorBev = "Bagel",
                    Image = "https://images.squarespace-cdn.com/content/5aa2d63e8f5130d49647afa1/1522333087444-J755FJ540LZ8IWK6W06G/Bagels.jpg?content-type=image%2Fjpeg"
                }
                ); 


                
            modelBuilder.Entity<FBDetails>().HasData(
                new FBDetails
                {
                    FBDetailsId = 1,
                    MenuItemId = 1,
                    Price = "2.15",
                    Calories = "14" ,
                    FBDescription = "Cold Brew"
                },

                new FBDetails
                {
                    MenuItemId = 1,
                    FBDetailsId = 2,
                    Price = "2.25",
                    Calories = "100",
                    FBDescription = "Mocha"

                },

                 new FBDetails
                 {
                     MenuItemId = 2,
                     FBDetailsId = 3,
                     Price = "2.05",
                     Calories = "0",
                     FBDescription = "Green"
                 },
                new FBDetails
                {
                    MenuItemId = 2,
                    FBDetailsId = 4,
                    Price = "2.10",
                    Calories = "10",
                    FBDescription = "Black"


                },
                 new FBDetails
                 {
                     MenuItemId = 3,
                     FBDetailsId = 5,
                     Price = "3.00",
                     Calories = "230",
                     FBDescription = "Jumbo"

                 },
                  new FBDetails
                  {
                      MenuItemId = 3,
                      FBDetailsId = 6,
                      Price = "4.00",
                      Calories = "150",
                      FBDescription = "Health nut"

                  },
                   new FBDetails
                   {
                       MenuItemId = 4,
                       FBDetailsId = 7,
                       Price = "3.50",
                       Calories = "178",
                       FBDescription = "Whole grain"

                   },
                    new FBDetails
                    {
                        MenuItemId = 4,
                        FBDetailsId = 8,
                        Price = "2.75",
                        Calories = "290",
                        FBDescription = "Mini"
                    }
                );




            modelBuilder.Entity<Flavor>().HasData(
                new Flavor
                {
                    FBDetailsId = 1,
                    FlavorId = 1,
                    FlavorName = "Black"
                },
                new Flavor
                {
                    FBDetailsId = 1,
                    FlavorId = 2,
                    FlavorName = "With skim milk"
                },
                 new Flavor
                 {
                     FBDetailsId = 2,
                     FlavorId = 3,
                     FlavorName = "White chocolate"
                 },
                  new Flavor
                  {
                      FBDetailsId = 2,
                      FlavorId = 4,
                      FlavorName = "Dark chocolate"
                  },
                   new Flavor
                   {
                       FBDetailsId = 3,
                       FlavorId = 5,
                       FlavorName = "Raspberry"
                   },
                    new Flavor
                    {
                        FBDetailsId = 3,
                        FlavorId = 6,
                        FlavorName = "Matcha"
                    },
                     new Flavor
                     {
                         FBDetailsId = 4,
                         FlavorId = 7,
                         FlavorName = "English Breakfast"
                     },
                      new Flavor
                      {
                          FBDetailsId = 4,
                          FlavorId = 8,
                          FlavorName = "Chai"
                      },
                       new Flavor
                       {
                           FBDetailsId = 5,
                           FlavorId = 9,
                           FlavorName = "Chocolate chip"
                       },
                        new Flavor
                        {
                            FBDetailsId = 5,
                            FlavorId = 10,
                            FlavorName = "Blueberry"
                        },
                         new Flavor
                         {
                             FBDetailsId = 6,
                             FlavorId = 11,
                             FlavorName = "Cranberry orange"
                         },
                          new Flavor
                          {
                              FBDetailsId = 6,
                              FlavorId = 12,
                              FlavorName = "Bran raisin"
                          },
                           new Flavor
                           {
                               FBDetailsId = 7,
                               FlavorId = 13,
                               FlavorName = "Oat"
                           },
                            new Flavor
                            {
                                FBDetailsId = 7,
                                FlavorId = 14,
                                FlavorName = "Onion"
                            },
                             new Flavor
                             {
                                 FBDetailsId = 8,
                                 FlavorId = 15,
                                 FlavorName = "Cinnamon swirl"
                             },
                              new Flavor
                              {
                                  FBDetailsId = 8,
                                  FlavorId = 16,
                                  FlavorName = "Plain"
                              }

                );



        }
    }
}
