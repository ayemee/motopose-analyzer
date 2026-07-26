using MotoPose.Api.Dtos;

namespace MotoPose.Api.Services;

public class PhotoService : IPhotoService
{
   private readonly IWebHostEnvironment _environment;

    public PhotoService(IWebHostEnvironment environment)
    {
        _environment = environment;
    }
    public async Task<UploadPhotoResponse> UploadPhotoAsync(UploadPhotoRequest request)
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
        return new UploadPhotoResponse
        {
            FileName = uniqueFileName,
            OriginalFileName = request.File.FileName,
            RiderName = request.RiderName,
            Notes = request.Notes,
            FileUrl = $"/uploads/{uniqueFileName}"
        };
    }
}