using Microsoft.EntityFrameworkCore;
// using MotoPose.Api.Entities;

public class MotoPoseDbContext : DbContext
{
    public MotoPoseDbContext(DbContextOptions<MotoPoseDbContext> options) : base(options)
    {
    }

    public DbSet<Photo> Photos => Set<Photo>();
}