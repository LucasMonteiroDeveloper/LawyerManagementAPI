using Microsoft.EntityFrameworkCore;
using LawyerManagementAPI.Models;

namespace LawyerManagementAPI.Data
{
    public class LawyerContext : DbContext
    {
        public LawyerContext(DbContextOptions<LawyerContext> options) : base(options) { }

        public DbSet<Lawyer> Lawyers { get; set; }
    }
}
