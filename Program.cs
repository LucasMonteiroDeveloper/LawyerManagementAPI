using LawyerManagementAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configura��o do banco de dados (in-memory)
builder.Services.AddDbContext<LawyerContext>(opt =>
    opt.UseInMemoryDatabase("LawyerList"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000") // URL da aplica��o React
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

builder.Services.AddControllers();

var app = builder.Build();

//app.UseHttpsRedirection();

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
