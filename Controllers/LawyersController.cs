using Microsoft.AspNetCore.Mvc;
using LawyerManagementAPI.Models;
using LawyerManagementAPI.Data;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class LawyersController : ControllerBase
{
    private readonly LawyerContext _context;

    public LawyersController(LawyerContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Lawyer>> GetLawyers()
    {
        return _context.Lawyers.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Lawyer> GetLawyer(int id)
    {
        var lawyer = _context.Lawyers.Find(id);

        if (lawyer == null)
        {
            return NotFound();
        }

        return lawyer;
    }

    [HttpPost]
    public ActionResult<Lawyer> Lawyer(Lawyer lawyer)
    {
        _context.Lawyers.Add(lawyer);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetLawyer), new { id = lawyer.Id }, lawyer);
    }

    [HttpPut("{id}")]
    public IActionResult PutLawyer(int id, Lawyer lawyer)
    {
        if (id != lawyer.Id)
        {
            return BadRequest();
        }

        _context.Entry(lawyer).State = EntityState.Modified;
        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteLawyer(int id)
    {
        var lawyer = _context.Lawyers.Find(id);

        if (lawyer == null)
        {
            return NotFound();
        }

        _context.Lawyers.Remove(lawyer);
        _context.SaveChanges();

        return NoContent();
    }
}
