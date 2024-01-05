using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace RickAndMortyApi
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
       
    }

    public class Episode
    {
        public int Id { get; set; }
        public string Name { get; set; }
       
    }

    public class DataContext : DbContext
    {
        public DbSet<Character> Characters { get; set; }
        public DbSet<Episode> Episodes { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public class CharactersController : ControllerBase
    {
        private readonly DataContext _context;

        public CharactersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("api/characters")]
        public IEnumerable<Character> GetCharacters()
        {
            return _context.Characters.ToList();
        }

        [HttpGet("api/characters/{id}")]
        public Character GetCharacter(int id)
        {
            return _context.Characters.Find(id);
        }
    }
    public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<DataContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


}
}
