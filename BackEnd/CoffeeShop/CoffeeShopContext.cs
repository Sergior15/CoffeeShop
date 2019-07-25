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
        public DbSet<Beverages> Beverages { get; set; }
        public DbSet<Food> Food { get; set; }
        public DbSet<Coffee> Coffees { get; set; }
        public DbSet<Tea> Teas { get; set; }
        public DbSet<Bagels> Bagels { get; set; }
        public DbSet<Crepes> Crepes { get; set; }
        public DbSet<Muffins> Muffins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=CoffeeShop;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
            .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Beverages>().HasData(
                new Beverages
                {
                    BeverageId = 1,
                    DrinkType = "Coffee",
                },

                new Beverages
                {
                    BeverageId = 2,
                    DrinkType = "Tea",
                });


            modelBuilder.Entity<Food>().HasData(
                new Food
                {
                    FoodId = 1,
                    FoodType = "Bagels",
                    FoodImage = "https://images.squarespace-cdn.com/content/5aa2d63e8f5130d49647afa1/1522333087444-J755FJ540LZ8IWK6W06G/Bagels.jpg?content-type=image%2Fjpeg",
                },
                new Food
                {
                    FoodId = 2,
                    FoodType = "Crepes",
                    FoodImage = "https://www.fifteenspatulas.com/wp-content/uploads/2010/12/Crepes-Fifteen-Spatulas-1.jpg",
                },
                new Food
                {
                    FoodId = 3,
                    FoodType = "Muffins",
                    FoodImage = "https://i2.wp.com/wellplated.com/wp-content/uploads/2017/04/Low-Sugar-Healthy-Blueberry-Muffins.jpg",
                });



        }
    }
}
