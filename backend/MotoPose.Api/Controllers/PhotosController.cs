using Microsoft.AspNetCore.Mvc;
using MotoPose.Api.Dtos;

namespace MotoPose.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class PhotosController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;

    public PhotosController(IWebHostEnvironment environment)
    {
        _environment = environment;
    }
    [HttpPost]
    public async Task<IActionResult> Upload([FromForm] UploadPhotoRequest request)
    {

        // Build the absolute path to wwwroot/uploads.
        var uploadFolder = Path.Combine(_environment.WebRootPath, "uploads");
        
        Directory.CreateDirectory(uploadFolder);

        //preserve the original file name with a unique guid to prevent duplicates
        var extension = Path.GetExtension(request.File.FileName);
        var uniqueFileName = $"{Guid.NewGuid()}{extension}";

        //build the full path to save the file
        var filePath = Path.Combine(uploadFolder, uniqueFileName);

        //create filestream pointing to the file path and close and disposes the stream afterwards
        await using var stream = new FileStream(filePath, FileMode.Create);

        //copy the upload file bytes into the destination file
        await request.File.CopyToAsync(stream);

        // Implementation for photo upload
        return Ok(new
        {
            fileName = uniqueFileName,
            originalFileName = request.File.FileName,
            riderName = request.RiderName,
            notes = request.Notes,
            fileUrl = $"/uploads/{uniqueFileName}"
        });
    }
}