using Microsoft.AspNetCore.Mvc;

namespace MotoPose.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PhotosController : ControllerBase
{
    [HttpPost]
    public IActionResult Upload()
    {
        // Implementation for photo upload
        return Ok("upload endpoint working");
    }
}